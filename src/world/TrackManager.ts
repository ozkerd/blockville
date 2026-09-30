import * as THREE from 'three';
import { BiomeType } from '../types/game';
import { TrackChunk, CHUNK_LENGTH } from './TrackChunk';
import { PlayerController } from '../entities/PlayerController';
import { ParticleSystem } from '../rendering/ParticleSystem';
import { AudioManager } from '../core/AudioManager';
import { GameState, VEHICLE_DEFS, CHARACTER_DEFS } from '../core/GameState';
import { SceneRenderer } from '../rendering/SceneRenderer';
import { BiomeDefinitions } from './BiomeDefinitions';
import { FloatingTextManager } from '../rendering/FloatingTextManager';
import { SkyManager } from './SkyManager';
import { HapticManager } from '../core/HapticManager';

export class TrackManager {
  public group: THREE.Group;
  public skyManager = new SkyManager();
  private chunks: TrackChunk[] = [];
  private readonly numChunks = 10;
  private currentBiome: BiomeType = 'boardwalk';
  private chunkCounter = 0;

  private sceneRenderer: SceneRenderer;
  private particleSystem: ParticleSystem;
  private audioManager: AudioManager;
  private gameState: GameState;
  private floatingText: FloatingTextManager;

  constructor(
    sceneRenderer: SceneRenderer,
    particleSystem: ParticleSystem,
    audioManager: AudioManager,
    gameState: GameState,
    floatingText: FloatingTextManager
  ) {
    this.sceneRenderer = sceneRenderer;
    this.particleSystem = particleSystem;
    this.audioManager = audioManager;
    this.gameState = gameState;
    this.floatingText = floatingText;
    this.group = new THREE.Group();

    // Add sky dome and celestial objects
    this.group.add(this.skyManager.group);

    // Initialize chunk pool
    for (let i = 0; i < this.numChunks; i++) {
      const chunk = new TrackChunk();
      this.chunks.push(chunk);
      this.group.add(chunk.group);
    }
  }

  public reset(startingBiome: BiomeType = 'boardwalk'): void {
    this.currentBiome = startingBiome;
    this.chunkCounter = 0;

    const visuals = BiomeDefinitions.getBiome(this.currentBiome);
    this.sceneRenderer.setSkyColor(visuals.skyColor, visuals.groundColor, visuals.fogColor);
    this.skyManager.setBiome(this.currentBiome);

    // Layout chunks sequentially ahead of Z = 0 (towards negative Z)
    for (let i = 0; i < this.numChunks; i++) {
      const chunk = this.chunks[i];
      const zPos = -i * CHUNK_LENGTH;
      chunk.init(this.chunkCounter++, this.currentBiome, zPos, i <= 1);
    }
  }

  public getCurrentBiomeName(): string {
    return BiomeDefinitions.getBiome(this.currentBiome).name;
  }

  public update(player: PlayerController, deltaTime: number): { crashed: boolean; stageWon: boolean } {
    const forwardSpeed = this.gameState.speed;
    const distanceDelta = forwardSpeed * deltaTime;

    // 1. Move all track chunks forward along +Z towards player
    for (const chunk of this.chunks) {
      chunk.group.position.z += distanceDelta;
    }

    // 2. Check biome transitions based on total distance
    this.updateBiomeProgression();

    // 3. Recycle chunks that have scrolled completely past the player
    this.recycleChunks();

    // 4. Update chunk visuals (spins, floating animations) & world bounding boxes
    for (const chunk of this.chunks) {
      chunk.updateVisuals(deltaTime);
      chunk.updateBoundingBoxes();
    }

    // 5. Process collisions and pickups
    const crashOccurred = this.checkCollisions(player);
    const stageWon = this.gameState.mode === 'stage' && this.gameState.checkStageCompletion();

    // 6. Update sky dome clouds, weather, and celestial objects
    this.skyManager.update(player.z, deltaTime);

    return { crashed: crashOccurred, stageWon };
  }

  private updateBiomeProgression(): void {
    if (this.gameState.mode === 'stage') {
      const stage = this.gameState.getActiveStage();
      if (stage && stage.biome !== this.currentBiome) {
        this.currentBiome = stage.biome;
        const visuals = BiomeDefinitions.getBiome(this.currentBiome);
        this.sceneRenderer.setSkyColor(visuals.skyColor, visuals.groundColor, visuals.fogColor);
        this.skyManager.setBiome(this.currentBiome);
      }
      return;
    }

    // Biome driven dynamically by current level
    const targetBiome = this.gameState.getCurrentLevelDef().biome;
    if (targetBiome !== this.currentBiome) {
      this.currentBiome = targetBiome;
      const visuals = BiomeDefinitions.getBiome(this.currentBiome);
      this.sceneRenderer.setSkyColor(visuals.skyColor, visuals.groundColor, visuals.fogColor);
      this.skyManager.setBiome(this.currentBiome);
    }
  }

  private recycleChunks(): void {
    for (const chunk of this.chunks) {
      // If chunk is behind camera by more than 1 chunk length
      if (chunk.group.position.z > CHUNK_LENGTH) {
        // Find most distant forward chunk along negative Z
        let minZ = 0;
        for (const c of this.chunks) {
          if (c.group.position.z < minZ) {
            minZ = c.group.position.z;
          }
        }
        const newZ = minZ - CHUNK_LENGTH;
        chunk.init(this.chunkCounter++, this.currentBiome, newZ, false, this.gameState.currentLevel);
      }
    }
  }

  private checkCollisions(player: PlayerController): boolean {
    const playerBox = player.getBoundingBox();
    const playerPos = player.group.position;
    const isVehicle = player.mode === 'in_vehicle';
    const vehDef = VEHICLE_DEFS[player.vehicleId];
    const charDef = CHARACTER_DEFS[player.characterId];

    // Magnet aura range: Skye has a built-in permanent coin magnet!
    const isSkye = charDef.hasPermanentMagnet;
    const hasMagnet = isSkye || (isVehicle && vehDef.hasMagnetAura) || player.magnetTimer > 0;
    const baseMagnetRange = isSkye ? 5.5 : 6.0;
    const magnetRange = (isVehicle && vehDef.hasMagnetAura) 
      ? 8.0 
      : baseMagnetRange * charDef.magnetRangeBonus;

    for (const chunk of this.chunks) {
      // Skip chunks far from player
      if (Math.abs(chunk.group.position.z - playerPos.z) > CHUNK_LENGTH * 1.2) {
        continue;
      }

      // 1. Pickups & Collectibles
      for (const pickup of chunk.pickups) {
        if (pickup.isCollected) continue;

        const pickupWorldPos = new THREE.Vector3();
        pickup.mesh.getWorldPosition(pickupWorldPos);

        // Magnet attraction
        if (hasMagnet && pickup.type === 'star_coin') {
          const distToPlayer = pickupWorldPos.distanceTo(playerPos);
          if (distToPlayer < magnetRange) {
            const localPlayerPos = chunk.group.worldToLocal(playerPos.clone());
            pickup.mesh.position.lerp(localPlayerPos, 0.24);
          }
        }

        // Bounding box collision with player
        if (playerBox.intersectsBox(pickup.boundingBox)) {
          pickup.isCollected = true;
          pickup.mesh.visible = false;

          if (pickup.type === 'star_coin') {
            const coinCount = isVehicle ? (vehDef.coinMultiplier || 1) : 1;
            this.gameState.addCoins(coinCount);
            this.audioManager.playCoinSound();
            HapticManager.lightImpact();
            this.particleSystem.emitPickupSparkles(pickupWorldPos, 0xFFD700);
            const pts = 15 * this.gameState.multiplier * coinCount;
            this.floatingText.spawn(pickupWorldPos, `+${pts}${coinCount > 1 ? ' (2x!)' : ''}`, '#FFD700', '⭐');
          } else if (pickup.type === 'diamond_gem') {
            this.gameState.addGems(1);
            this.audioManager.playGemSound();
            HapticManager.mediumImpact();
            this.particleSystem.emitPickupSparkles(pickupWorldPos, 0x00E5FF);
            this.floatingText.spawn(pickupWorldPos, '+100 (💎+1)', '#00E5FF', '💎', true);
          } else if (pickup.type === 'nitro_boost') {
            player.addBoostCharge();
            HapticManager.heavyImpact();
            this.particleSystem.emitPickupSparkles(pickupWorldPos, 0x00E5FF);
            this.floatingText.spawn(pickupWorldPos, '+1 BOOST [SPACE]!', '#00E5FF', '🚀', true);
          } else if (pickup.type === 'vehicle_key') {
            player.mountVehicle();
            HapticManager.heavyImpact();
            this.particleSystem.emitPickupSparkles(pickupWorldPos, 0xFFD54F);
            this.floatingText.spawn(pickupWorldPos, 'MOUNT RIDE!', '#FF4081', '🔑', true);
          } else if (pickup.type === 'heart_shield') {
            player.hasShield = true;
            this.audioManager.playGemSound();
            HapticManager.mediumImpact();
            this.particleSystem.emitPickupSparkles(pickupWorldPos, 0xFF4081);
            this.floatingText.spawn(pickupWorldPos, 'SHIELD ON!', '#FF4081', '💖', true);
          } else if (pickup.type === 'toy_wrench') {
            if (isVehicle) {
              player.vehicleDuration = Math.min(player.maxVehicleDuration, player.vehicleDuration + 10);
            }
            this.audioManager.playMountSound();
            HapticManager.lightImpact();
            this.particleSystem.emitPickupSparkles(pickupWorldPos, 0x00E676);
            this.floatingText.spawn(pickupWorldPos, '+10s FUEL', '#00E676', '🔧');
          }
        }
      }

      // 2. Obstacles
      for (const obs of chunk.obstacles) {
        if (obs.isSmashed) continue;

        if (playerBox.intersectsBox(obs.boundingBox)) {
          const obsWorldPos = new THREE.Vector3();
          obs.mesh.getWorldPosition(obsWorldPos);

          // Handle Jump clearance over low barriers
          if (obs.type === 'low_barrier' && (player.y > 0.45 || player.movementState === 'jumping')) {
            continue; // Safely leaped over!
          }

          // Handle Slide clearance under high arches and laser gates
          if ((obs.type === 'high_arch' || obs.type === 'laser_gate') && (player.movementState === 'sliding' || (player.y < 0.2 && playerBox.max.y < obs.boundingBox.min.y))) {
            continue; // Safely slided under!
          }

          // Handle Slick Rain Puddle / Ice Drift Hazard
          if (obs.type === 'slick_puddle') {
            obs.isSmashed = true;
            if (player.movementState === 'sliding') {
              // Successfully executed a sick powerslide / vehicle drift!
              obs.mesh.visible = false;
              this.gameState.addSmash();
              this.audioManager.playSlideSound();
              HapticManager.heavyImpact();
              this.particleSystem.emitGroundSparks(obsWorldPos, 0x00E5FF);
              this.floatingText.spawn(obsWorldPos, 'SICK DRIFT! +100', '#00E5FF', '🌊', true);
            } else {
              // Hit puddle without sliding: tire skid, water splash, and handling challenge!
              this.audioManager.playVehicleDuckSound();
              HapticManager.heavyImpact();
              this.particleSystem.emitGroundSparks(obsWorldPos, 0xFFEB3B);
              this.floatingText.spawn(obsWorldPos, '⚠️ SLICK SKID! SLIDE TO DRIFT!', '#FF9100', '⚠️', true);
              player.group.rotation.y += (Math.random() > 0.5 ? 0.32 : -0.32);
            }
            continue;
          }

          // In-Vehicle collisions:
          if (isVehicle) {
            // Active Turbo bulldozes through all obstacles
            if (player.turboTimer > 0) {
              obs.isSmashed = true;
              obs.mesh.visible = false;
              this.gameState.addSmash();
              this.audioManager.playSmashSound();
              HapticManager.heavyImpact();
              this.particleSystem.emitSmashDebris(obsWorldPos);
              this.floatingText.spawn(obsWorldPos, 'TURBO SMASH! +100', '#FFEA00', '⚡', true);
              continue;
            }

            // Only soft breakable props (cones, wooden crates) get cleanly smashed
            if (obs.type === 'crate_stack' || obs.type === 'traffic_cone') {
              obs.isSmashed = true;
              obs.mesh.visible = false;
              this.gameState.addSmash();
              this.audioManager.playSmashSound();
              HapticManager.mediumImpact();
              this.particleSystem.emitSmashDebris(obsWorldPos);
              this.floatingText.spawn(obsWorldPos, '+50', '#FF7043', '💥');
              continue;
            }

            // Sweet-Treat Van: Crash Armor absorbs 1 heavy collision without crashing!
            if (player.vanArmorShield) {
              player.vanArmorShield = false;
              obs.isSmashed = true;
              obs.mesh.visible = false;
              this.gameState.addSmash();
              this.audioManager.playSmashSound();
              HapticManager.heavyImpact();
              this.particleSystem.emitSmashDebris(obsWorldPos, [0xFFD54F, 0xFF69B4, 0x00E5FF]);
              this.floatingText.spawn(obsWorldPos, 'ARMOR SAVED!', '#FFD54F', '🛡️', true);
              continue;
            }

            // Solid obstacles (roadblocks, barriers, un-ducked arches): Spectacular Crash & Eject!
            obs.isSmashed = true;
            obs.mesh.visible = false;
            this.audioManager.playCrashSound();
            HapticManager.heavyImpact();
            this.particleSystem.emitSmashDebris(obsWorldPos, [0xD50000, 0xFFEB3B, 0xFF4081, 0x00E5FF]);
            this.floatingText.spawn(obsWorldPos, 'CRASH EJECT!', '#FF1744', '💥', true);
            player.dismountVehicle(true); // Dramatic front-flip ejection onto feet!
            continue;
          }

          // On-foot: breakable crates and cones are smashed with points rather than fatal crashes
          if (obs.type === 'crate_stack' || obs.type === 'traffic_cone') {
            obs.isSmashed = true;
            obs.mesh.visible = false;
            this.gameState.addSmash();
            this.audioManager.playSmashSound();
            HapticManager.mediumImpact();
            this.particleSystem.emitSmashDebris(obsWorldPos);
            this.floatingText.spawn(obsWorldPos, '+30', '#FF7043', '💥');
            continue;
          }

          // On foot collision: Heart shield check
          if (player.hasShield) {
            player.hasShield = false;
            obs.isSmashed = true;
            obs.mesh.visible = false;
            this.audioManager.playSmashSound();
            HapticManager.mediumImpact();
            this.particleSystem.emitSmashDebris(obsWorldPos, [0xFF4081, 0xFFFFFF]);
            this.floatingText.spawn(obsWorldPos, 'SHIELD SAVED!', '#FF4081', '💖');
            continue;
          }

          // Lethal on-foot crash! (Hitting roadblock, robot sweeper, or barrier without jumping/sliding)
          this.audioManager.playCrashSound();
          HapticManager.heavyImpact();
          this.particleSystem.emitSmashDebris(obsWorldPos, [0xFF5252, 0x263238]);
          player.movementState = 'crashed';
          return true;
        }
      }
    }

    return false;
  }
}
