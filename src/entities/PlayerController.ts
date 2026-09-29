import * as THREE from 'three';
import { 
  CharacterId, 
  VehicleId, 
  ColorPaletteId, 
  PlayerMovementState, 
  DualMode 
} from '../types/game';
import { CharacterBuilder, CharacterRigs } from './CharacterBuilder';
import { VehicleBuilder, VehicleParts } from './VehicleBuilder';
import { ParticleSystem } from '../rendering/ParticleSystem';
import { CHARACTER_DEFS, VEHICLE_DEFS } from '../core/GameState';
import { AudioManager } from '../core/AudioManager';
import { HapticManager } from '../core/HapticManager';

export const LANE_WIDTH = 3.2;
export const LANES = [-LANE_WIDTH, 0, LANE_WIDTH];

export class PlayerController {
  public group: THREE.Group;
  public characterId: CharacterId;
  public vehicleId: VehicleId;
  public paletteId: ColorPaletteId;

  // Visual sub-groups
  private avatarModel!: THREE.Group;
  private avatarRig!: CharacterRigs;
  private vehicleModel!: THREE.Group;
  private vehicleParts!: VehicleParts;

  // Movement & State
  public currentLane = 1; // 0: Left, 1: Center, 2: Right
  public targetX = 0;
  public currentX = 0;
  public y = 0;
  public z = 0;

  public mode: DualMode = 'on_foot';
  public movementState: PlayerMovementState = 'running';

  // Jump & Slide physics
  private verticalVelocity = 0;
  private readonly gravity = -32;
  private readonly jumpForce = 13.5;
  private slideTimer = 0;
  private readonly maxSlideDuration = 0.75;

  // Vehicle Mount Transition
  public vehicleDuration = 0;
  public maxVehicleDuration = 20;
  private transitionTimer = 0;
  private readonly mountTransitionDuration = 0.55;

  // Super abilities & Power-ups
  public hasShield = false;
  public magnetTimer = 0;
  public turboTimer = 0;

  // Run cycle animation timer
  private runCycleTime = 0;

  // References
  private particleSystem: ParticleSystem;
  private audioManager: AudioManager;

  constructor(
    characterId: CharacterId,
    vehicleId: VehicleId,
    paletteId: ColorPaletteId,
    particleSystem: ParticleSystem,
    audioManager: AudioManager
  ) {
    this.characterId = characterId;
    this.vehicleId = vehicleId;
    this.paletteId = paletteId;
    this.particleSystem = particleSystem;
    this.audioManager = audioManager;

    this.group = new THREE.Group();
    this.rebuildMeshes();
  }

  public rebuildMeshes(): void {
    // Clear existing
    while (this.group.children.length > 0) {
      this.group.remove(this.group.children[0]);
    }

    // Build character
    const charData = CharacterBuilder.buildCharacter(this.characterId);
    this.avatarModel = charData.model;
    this.avatarRig = charData.rig;

    // Build vehicle
    const vehData = VehicleBuilder.buildVehicle(this.vehicleId, this.paletteId);
    this.vehicleModel = vehData.model;
    this.vehicleParts = vehData.parts;

    // Vehicle initially hidden in on_foot mode
    if (this.mode === 'on_foot') {
      this.vehicleModel.visible = false;
      this.group.add(this.avatarModel);
    } else {
      this.vehicleModel.visible = true;
      this.vehicleParts.cockpitAnchor.add(this.avatarModel);
      CharacterBuilder.poseInVehicle(this.avatarRig, 0, false, this.vehicleId === 'scooter');
      this.group.add(this.vehicleModel);
    }
  }

  public setCustomization(charId: CharacterId, vehId: VehicleId, palId: ColorPaletteId): void {
    this.characterId = charId;
    this.vehicleId = vehId;
    this.paletteId = palId;
    this.rebuildMeshes();
  }

  public setShowcasePreview(showVehicle: boolean): void {
    this.mode = showVehicle ? 'in_vehicle' : 'on_foot';
    this.rebuildMeshes();
  }

  public reset(): void {
    this.currentLane = 1;
    this.targetX = LANES[1];
    this.currentX = LANES[1];
    this.y = 0;
    this.z = 0;
    this.verticalVelocity = 0;
    this.slideTimer = 0;
    this.mode = 'on_foot';
    this.movementState = 'running';
    this.vehicleDuration = 0;
    this.transitionTimer = 0;
    this.hasShield = false;
    this.magnetTimer = 0;
    this.turboTimer = 0;
    this.runCycleTime = 0;
    this.rebuildMeshes();
    this.audioManager.stopVehicleEngine();
  }

  public moveLeft(): void {
    if (this.currentLane > 0 && this.movementState !== 'crashed') {
      this.currentLane--;
      this.targetX = LANES[this.currentLane];
      this.audioManager.playSlideSound();
      HapticManager.mediumImpact();
    }
  }

  public moveRight(): void {
    if (this.currentLane < LANES.length - 1 && this.movementState !== 'crashed') {
      this.currentLane++;
      this.targetX = LANES[this.currentLane];
      this.audioManager.playSlideSound();
      HapticManager.mediumImpact();
    }
  }

  public jump(): void {
    if (this.movementState === 'running' || (this.mode === 'in_vehicle' && this.y <= 0.05)) {
      this.verticalVelocity = this.jumpForce;
      this.movementState = 'jumping';
      this.slideTimer = 0;
      this.audioManager.playJumpSound();
      HapticManager.mediumImpact();
    }
  }

  public slide(): void {
    if (this.movementState === 'running' || this.mode === 'in_vehicle') {
      this.movementState = 'sliding';
      this.slideTimer = this.maxSlideDuration;
      if (this.mode === 'in_vehicle') {
        this.audioManager.playVehicleDuckSound();
      } else {
        this.audioManager.playSlideSound();
      }
      HapticManager.mediumImpact();
    } else if (this.movementState === 'jumping') {
      // Fast fall / slam down on foot
      this.verticalVelocity = -22;
      this.movementState = 'sliding';
      this.slideTimer = this.maxSlideDuration;
      this.audioManager.playSlideSound();
      HapticManager.mediumImpact();
    }
  }

  /**
   * Triggers cinematic mount transition into vehicle
   */
  public mountVehicle(): void {
    if (this.mode === 'in_vehicle') {
      // Extend timer if already mounted
      this.vehicleDuration = Math.min(this.maxVehicleDuration, this.vehicleDuration + 10);
      this.audioManager.playMountSound();
      return;
    }

    this.mode = 'in_vehicle';
    this.movementState = 'mounting';
    this.transitionTimer = this.mountTransitionDuration;

    const charDef = CHARACTER_DEFS[this.characterId];
    const vehDef = VEHICLE_DEFS[this.vehicleId];
    this.maxVehicleDuration = vehDef.baseDurationSeconds * charDef.vehicleDurationBonus;
    this.vehicleDuration = this.maxVehicleDuration;

    // Cinematic hop
    this.verticalVelocity = 9.5;

    // Mount vehicle hierarchy
    this.group.remove(this.avatarModel);
    this.vehicleParts.cockpitAnchor.add(this.avatarModel);
    CharacterBuilder.poseInVehicle(this.avatarRig, 0);

    this.vehicleModel.visible = true;
    this.vehicleModel.position.set(0, -0.6, 2.0); // zooms in from underneath/behind
    this.group.add(this.vehicleModel);

    // Audio
    this.audioManager.playMountSound();
    this.audioManager.startVehicleEngine();

    // Particle flash
    this.particleSystem.emitSmashDebris(this.group.position, [0x00E5FF, 0xFF69B4, 0xFFD54F]);
    HapticManager.heavyImpact();
  }

  /**
   * Safely ejects character back to foot mode
   */
  public dismountVehicle(crashEject = false): void {
    if (this.mode !== 'in_vehicle') return;

    this.mode = 'on_foot';
    this.vehicleDuration = 0;
    this.turboTimer = 0;
    this.audioManager.stopVehicleEngine();

    // Detach avatar from vehicle cockpit and attach to root group
    this.vehicleParts.cockpitAnchor.remove(this.avatarModel);
    this.group.remove(this.vehicleModel);
    this.vehicleModel.visible = false;
    this.group.add(this.avatarModel);

    // Front-flip landing onto feet
    this.verticalVelocity = crashEject ? 7.0 : 6.0;
    this.movementState = 'jumping';

    // Particle explosion of toy stars
    this.particleSystem.emitSmashDebris(this.group.position, [0xFF4081, 0xFFEB3B, 0x00E676]);
    HapticManager.heavyImpact();
  }

  public activateTurbo(): void {
    this.turboTimer = 5.0;
    this.audioManager.playMountSound();
  }

  public update(deltaTime: number, forwardSpeed: number): void {
    // 1. Smooth horizontal lane lerp
    this.currentX = THREE.MathUtils.lerp(this.currentX, this.targetX, deltaTime * 14);
    const laneShiftProgress = (this.targetX - this.currentX) / LANE_WIDTH;

    // 2. Vertical jump/fall physics
    if (this.y > 0 || this.verticalVelocity !== 0) {
      this.verticalVelocity += this.gravity * deltaTime;
      this.y += this.verticalVelocity * deltaTime;

      if (this.y <= 0) {
        this.y = 0;
        this.verticalVelocity = 0;
        if (this.movementState === 'jumping' || this.movementState === 'mounting') {
          this.movementState = 'running';
        }
      }
    }

    // 3. Slide timer
    if (this.movementState === 'sliding') {
      this.slideTimer -= deltaTime;
      if (this.slideTimer <= 0) {
        this.slideTimer = 0;
        this.movementState = 'running';
      }
    }

    // 4. Vehicle Duration & Transition
    const isDucking = this.movementState === 'sliding';

    if (this.mode === 'in_vehicle') {
      // Zoom-in interpolation during mount
      if (this.transitionTimer > 0) {
        this.transitionTimer -= deltaTime;
        const t = 1 - Math.max(0, this.transitionTimer / this.mountTransitionDuration);
        this.vehicleModel.position.z = THREE.MathUtils.lerp(2.0, 0, t);
        this.vehicleModel.position.y = THREE.MathUtils.lerp(-0.6, 0, t);
      } else {
        this.vehicleModel.position.set(0, 0, 0);
      }

      this.vehicleDuration -= deltaTime;
      if (this.vehicleDuration <= 0) {
        this.dismountVehicle(false);
      }

      // Exhaust stud particles
      if (Math.random() < 0.7) {
        const worldPos = new THREE.Vector3();
        this.vehicleModel.localToWorld(worldPos.copy(this.vehicleParts.leftExhaustPos));
        this.particleSystem.emitExhaust(worldPos, this.paletteId === 'cyber' ? 0x00E5FF : 0xFF69B4);
      }

      // Physics update (steer, wheel spin, suspension, chassis roll, ducking)
      VehicleBuilder.updatePhysics(
        this.vehicleParts,
        forwardSpeed,
        laneShiftProgress,
        laneShiftProgress,
        deltaTime,
        this.turboTimer > 0,
        isDucking
      );

      // Scrape sparks when vehicle is slammed low in duck mode
      if (isDucking) {
        const sparkPos = this.group.position.clone();
        sparkPos.y = 0.05;
        this.particleSystem.emitGroundSparks(sparkPos, 0xFFD54F);
      }

      this.audioManager.setEngineSpeed(forwardSpeed / 30);
    }

    // 5. Timers
    if (this.magnetTimer > 0) this.magnetTimer -= deltaTime;
    if (this.turboTimer > 0) this.turboTimer -= deltaTime;

    // 6. Avatar Rig animation
    this.runCycleTime += deltaTime * (forwardSpeed / 18);
    if (this.mode === 'on_foot') {
      CharacterBuilder.updateAnimation(
        this.avatarRig,
        this.movementState,
        this.runCycleTime,
        laneShiftProgress,
        deltaTime
      );
    } else {
      const isScooter = this.vehicleId === 'scooter';
      CharacterBuilder.poseInVehicle(this.avatarRig, laneShiftProgress, isDucking, isScooter);
    }

    // Dynamic Turn Banking & Steering Yaw!
    const isScooter = this.mode === 'in_vehicle' && this.vehicleId === 'scooter';
    const turnDelta = (this.targetX - this.currentX);
    // Yaw: point nose dynamically towards target lane
    const targetYaw = -turnDelta * (isScooter ? 0.32 : 0.22);
    // Roll: lean into turn (Scooters lean heavily like real mopeds up to ~35 degrees!)
    const targetRoll = -turnDelta * (isScooter ? 0.65 : (this.mode === 'in_vehicle' ? 0.32 : 0.24));

    this.group.rotation.y = THREE.MathUtils.lerp(this.group.rotation.y, targetYaw, deltaTime * 14);
    this.group.rotation.z = THREE.MathUtils.lerp(this.group.rotation.z, targetRoll, deltaTime * 14);

    // Update group transform
    this.group.position.set(this.currentX, this.y, this.z);
  }

  /**
   * Collision bounding box
   */
  public getBoundingBox(): THREE.Box3 {
    const box = new THREE.Box3();
    const halfWidth = this.mode === 'in_vehicle' ? 1.0 : 0.45;
    const height = this.movementState === 'sliding' ? 0.7 : (this.mode === 'in_vehicle' ? 1.8 : 1.7);
    const halfDepth = this.mode === 'in_vehicle' ? 1.6 : 0.5;

    box.min.set(this.currentX - halfWidth, this.y, this.z - halfDepth);
    box.max.set(this.currentX + halfWidth, this.y + height, this.z + halfDepth);
    return box;
  }
}
