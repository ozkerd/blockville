import * as THREE from 'three';
import { BiomeType } from '../types/game';
import { ToyMaterialFactory } from '../rendering/ToyMaterials';

interface ToyCloud {
  group: THREE.Group;
  baseX: number;
  baseY: number;
  baseZ: number;
  speed: number;
}

export class SkyManager {
  public group = new THREE.Group();

  private clouds: ToyCloud[] = [];
  private sunGroup = new THREE.Group();
  private moonGroup = new THREE.Group();
  private starsGroup = new THREE.Group();

  // Weather particles (rain / snow / dust)
  private weatherPoints!: THREE.Points;
  private weatherPositions!: Float32Array;
  private weatherVelocities!: Float32Array;
  private weatherCount = 280;
  private weatherMaterial!: THREE.PointsMaterial;

  public currentBiome: BiomeType = 'boardwalk';

  constructor() {
    this.buildSun();
    this.buildMoon();
    this.buildStars();
    this.buildClouds();
    this.buildWeatherParticles();

    this.group.add(this.sunGroup);
    this.group.add(this.moonGroup);
    this.group.add(this.starsGroup);
    this.group.add(this.weatherPoints);
  }

  /**
   * Cheerful glowing 3D toy sun with radial toy ray blocks
   */
  private buildSun(): void {
    const sunMat = ToyMaterialFactory.getPlastic(0xFFD54F, 0.1, 0.0);
    const core = new THREE.Mesh(new THREE.SphereGeometry(4.5, 16, 16), sunMat);
    this.sunGroup.add(core);

    // 8 Sunshine rays
    const rayMat = ToyMaterialFactory.getPlastic(0xFFEA00, 0.1, 0.0);
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI * 2) / 8;
      const ray = new THREE.Mesh(new THREE.BoxGeometry(1.2, 3.2, 0.8), rayMat);
      ray.position.set(Math.cos(angle) * 6.5, Math.sin(angle) * 6.5, 0);
      ray.rotation.z = angle + Math.PI / 2;
      this.sunGroup.add(ray);
    }

    this.sunGroup.position.set(38, 48, 85);
  }

  /**
   * Stylized crescent moon for twilight / night biomes
   */
  private buildMoon(): void {
    const moonMat = ToyMaterialFactory.getPlastic(0xFFF9C4, 0.1, 0.0);
    const crescent = new THREE.Mesh(new THREE.TorusGeometry(3.6, 1.2, 12, 24, Math.PI * 1.3), moonMat);
    crescent.rotation.z = 0.5;
    this.moonGroup.add(crescent);

    this.moonGroup.position.set(-36, 46, 80);
    this.moonGroup.visible = false;
  }

  /**
   * Field of twinkling star studs high in the sky
   */
  private buildStars(): void {
    const starGeom = new THREE.BufferGeometry();
    const starCount = 120;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = 30 + Math.random() * 40;
      positions[i * 3 + 2] = -20 + Math.random() * 160;
    }

    starGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 1.6,
      transparent: true,
      opacity: 0.85
    });

    this.starsGroup.add(new THREE.Points(starGeom, starMat));
    this.starsGroup.visible = false;
  }

  /**
   * Fluffy low-poly toy clouds with multi-blob cartoon volume
   */
  private buildClouds(): void {
    const cloudMat = ToyMaterialFactory.getPlastic(0xFFFFFF, 0.35, 0.0);

    const cloudConfigs = [
      { x: -45, y: 32, z: 20, scale: 1.4, speed: 1.2 },
      { x: 35, y: 36, z: 45, scale: 1.6, speed: 0.9 },
      { x: -25, y: 28, z: 70, scale: 1.2, speed: 1.5 },
      { x: 42, y: 30, z: 95, scale: 1.5, speed: 1.1 },
      { x: -38, y: 34, z: 125, scale: 1.7, speed: 0.8 },
      { x: 28, y: 32, z: 150, scale: 1.3, speed: 1.3 },
      { x: -18, y: 38, z: 175, scale: 1.5, speed: 1.0 },
      { x: 48, y: 35, z: 5, scale: 1.4, speed: 1.4 }
    ];

    for (const cfg of cloudConfigs) {
      const cloudGroup = new THREE.Group();

      // Multi-blob cloud shape (5 overlapping spheres)
      const blobCount = 5;
      for (let b = 0; b < blobCount; b++) {
        const r = 1.8 + Math.random() * 1.2;
        const blob = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 8), cloudMat);
        blob.position.set((b - 2) * 1.8, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 1.2);
        blob.scale.set(1.1, 0.8, 0.9);
        cloudGroup.add(blob);
      }

      cloudGroup.scale.setScalar(cfg.scale);
      cloudGroup.position.set(cfg.x, cfg.y, cfg.z);
      this.group.add(cloudGroup);

      this.clouds.push({
        group: cloudGroup,
        baseX: cfg.x,
        baseY: cfg.y,
        baseZ: cfg.z,
        speed: cfg.speed
      });
    }
  }

  /**
   * Weather particle generator (Snow in forest, sun sparkles in boardwalk, neon in cyber)
   */
  private buildWeatherParticles(): void {
    const geom = new THREE.BufferGeometry();
    this.weatherPositions = new Float32Array(this.weatherCount * 3);
    this.weatherVelocities = new Float32Array(this.weatherCount * 3);

    for (let i = 0; i < this.weatherCount; i++) {
      this.resetParticle(i, true);
    }

    geom.setAttribute('position', new THREE.BufferAttribute(this.weatherPositions, 3));

    this.weatherMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.5,
      transparent: true,
      opacity: 0.75
    });

    this.weatherPoints = new THREE.Points(geom, this.weatherMaterial);
  }

  private resetParticle(i: number, randomY = false): void {
    const idx = i * 3;
    this.weatherPositions[idx] = (Math.random() - 0.5) * 44;
    this.weatherPositions[idx + 1] = randomY ? Math.random() * 22 : 20 + Math.random() * 5;
    this.weatherPositions[idx + 2] = -15 + Math.random() * 75;

    this.weatherVelocities[idx] = (Math.random() - 0.5) * 0.8;
    this.weatherVelocities[idx + 1] = -(4.0 + Math.random() * 4.0); // falling speed
    this.weatherVelocities[idx + 2] = (Math.random() - 0.5) * 0.5;
  }

  public setBiome(biome: BiomeType): void {
    this.currentBiome = biome;

    if (biome === 'boardwalk') {
      // Level 1: Heartlake Boardwalk - Pure Warm Sunshine & Ocean Breeze (NO SNOW / NO RAIN)
      this.sunGroup.visible = true;
      this.moonGroup.visible = false;
      this.starsGroup.visible = false;
      this.weatherPoints.visible = false;
    } else if (biome === 'plaza') {
      // Level 2: Downtown Plaza - Clear Crisp City Day
      this.sunGroup.visible = true;
      this.moonGroup.visible = false;
      this.starsGroup.visible = false;
      this.weatherPoints.visible = false;
    } else if (biome === 'forest') {
      // Level 3: Pinecrest Mountain Forest - Alpine Elevation with Gentle Snowflakes!
      this.sunGroup.visible = true;
      this.moonGroup.visible = false;
      this.starsGroup.visible = false;
      this.weatherPoints.visible = true;
      this.weatherMaterial.color.setHex(0xFFFFFF); // Crisp white alpine snowflakes
      this.weatherMaterial.opacity = 0.85;
      this.weatherMaterial.size = 0.65;
    } else if (biome === 'cyber') {
      // High-Tech Cyber Grid
      this.sunGroup.visible = false;
      this.moonGroup.visible = true;
      this.starsGroup.visible = true;
      this.weatherPoints.visible = true;
      this.weatherMaterial.color.setHex(0x00E5FF);
      this.weatherMaterial.opacity = 0.55;
      this.weatherMaterial.size = 0.45;
    } else {
      // Pier & Candy
      this.sunGroup.visible = true;
      this.moonGroup.visible = false;
      this.starsGroup.visible = false;
      this.weatherPoints.visible = false;
    }
  }

  public update(playerZ: number, deltaTime: number): void {
    // 1. Drift clouds relative to forward player movement
    for (const cloud of this.clouds) {
      cloud.group.position.x += cloud.speed * deltaTime * 0.8;
      if (cloud.group.position.x > 65) {
        cloud.group.position.x = -65;
      }

      // Keep clouds anchored in forward view relative to player
      const relZ = ((cloud.baseZ - (playerZ % 160)) + 160) % 160;
      cloud.group.position.z = playerZ + relZ - 20;
    }

    // 2. Keep Sun and Moon high in front of player
    this.sunGroup.position.set(28, 34, playerZ + 75);
    this.sunGroup.rotation.z += deltaTime * 0.15; // Slow sunny rotation

    this.moonGroup.position.set(-32, 34, playerZ + 75);
    this.starsGroup.position.z = playerZ;

    // 3. Update weather particles only when active (e.g. mountain forest snow)
    if (this.weatherPoints.visible) {
      const positions = (this.weatherPoints.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;

      for (let i = 0; i < this.weatherCount; i++) {
        const idx = i * 3;
        positions[idx] += this.weatherVelocities[idx] * deltaTime;
        positions[idx + 1] += this.weatherVelocities[idx + 1] * deltaTime;
        positions[idx + 2] += this.weatherVelocities[idx + 2] * deltaTime;

        // Particle hits ground or falls behind player
        if (positions[idx + 1] < 0.1 || positions[idx + 2] < playerZ - 10) {
          positions[idx] = (Math.random() - 0.5) * 44;
          positions[idx + 1] = 18 + Math.random() * 4;
          positions[idx + 2] = playerZ + Math.random() * 65;
        }
      }

      this.weatherPoints.geometry.attributes.position.needsUpdate = true;
    }
  }
}
