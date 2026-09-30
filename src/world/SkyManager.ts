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
   * Cheerful glowing 3D toy sun with radial toy ray blocks and radiant golden halo
   */
  private buildSun(): void {
    // 1. Central Core Sphere with warm luminous plastic
    const sunMat = new THREE.MeshStandardMaterial({
      color: 0xFFF176,
      emissive: 0xFFD54F,
      emissiveIntensity: 0.95,
      roughness: 0.15,
      metalness: 0.0
    });
    const core = new THREE.Mesh(new THREE.SphereGeometry(5.2, 20, 20), sunMat);
    this.sunGroup.add(core);

    // 2. Translucent Inner Coronal Glow
    const innerHaloMat = new THREE.MeshBasicMaterial({
      color: 0xFFEA00,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide
    });
    const innerHalo = new THREE.Mesh(new THREE.RingGeometry(5.2, 8.5, 32), innerHaloMat);
    this.sunGroup.add(innerHalo);

    // 3. Translucent Outer Golden Aura
    const outerHaloMat = new THREE.MeshBasicMaterial({
      color: 0xFFD54F,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide
    });
    const outerHalo = new THREE.Mesh(new THREE.RingGeometry(8.5, 13.0, 32), outerHaloMat);
    this.sunGroup.add(outerHalo);

    // 4. 12 Golden Sunshine Ray Blocks
    const rayMat = ToyMaterialFactory.getPlastic(0xFFEA00, 0.1, 0.0);
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI * 2) / 12;
      const ray = new THREE.Mesh(new THREE.BoxGeometry(1.2, 4.4, 0.8), rayMat);
      ray.position.set(Math.cos(angle) * 7.6, Math.sin(angle) * 7.6, 0);
      ray.rotation.z = angle + Math.PI / 2;
      this.sunGroup.add(ray);
    }

    // 5. Bright Star Burst Flares (diamond points)
    const flareMat = ToyMaterialFactory.getPlastic(0xFFFFFF, 0.1, 0.0);
    [-1, 1].forEach((dir) => {
      const flareH = new THREE.Mesh(new THREE.ConeGeometry(0.8, 8.0, 4), flareMat);
      flareH.rotation.z = (Math.PI / 2) * dir;
      flareH.position.set(dir * 5.0, 0, 0.2);
      this.sunGroup.add(flareH);

      const flareV = new THREE.Mesh(new THREE.ConeGeometry(0.8, 8.0, 4), flareMat);
      flareV.rotation.z = dir === 1 ? 0 : Math.PI;
      flareV.position.set(0, dir * 5.0, 0.2);
      this.sunGroup.add(flareV);
    });

    this.sunGroup.position.set(22, 38, -90);
  }

  /**
   * Stylized crescent moon for twilight / night biomes
   */
  private buildMoon(): void {
    const moonMat = ToyMaterialFactory.getPlastic(0xFFF9C4, 0.1, 0.0);
    const crescent = new THREE.Mesh(new THREE.TorusGeometry(3.6, 1.2, 12, 24, Math.PI * 1.3), moonMat);
    crescent.rotation.z = 0.5;
    this.moonGroup.add(crescent);

    this.moonGroup.position.set(-28, 38, -90);
    this.moonGroup.visible = false;
  }

  /**
   * Field of twinkling star studs high in the sky
   */
  private buildStars(): void {
    const starGeom = new THREE.BufferGeometry();
    const starCount = 160;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = 25 + Math.random() * 45;
      positions[i * 3 + 2] = -120 + Math.random() * 120;
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
      { x: -45, y: 32, z: -20, scale: 1.4, speed: 1.2 },
      { x: 35, y: 36, z: -45, scale: 1.6, speed: 0.9 },
      { x: -25, y: 28, z: -70, scale: 1.2, speed: 1.5 },
      { x: 42, y: 30, z: -95, scale: 1.5, speed: 1.1 },
      { x: -38, y: 34, z: -125, scale: 1.7, speed: 0.8 },
      { x: 28, y: 32, z: -150, scale: 1.3, speed: 1.3 },
      { x: -18, y: 38, z: -175, scale: 1.5, speed: 1.0 },
      { x: 48, y: 35, z: -5, scale: 1.4, speed: 1.4 }
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
   * Weather particle generator (Delicate alpine snow, crisp city rain, cyber sparks)
   */
  private weatherType: 'snow' | 'rain' | 'cyber' | 'none' = 'none';

  private buildWeatherParticles(): void {
    this.weatherCount = 750; // Dense and atmospheric
    const geom = new THREE.BufferGeometry();
    this.weatherPositions = new Float32Array(this.weatherCount * 3);
    this.weatherVelocities = new Float32Array(this.weatherCount * 3);

    for (let i = 0; i < this.weatherCount; i++) {
      this.resetParticle(i, 0, true);
    }

    geom.setAttribute('position', new THREE.BufferAttribute(this.weatherPositions, 3));

    this.weatherMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.20,
      transparent: true,
      opacity: 0.85
    });

    this.weatherPoints = new THREE.Points(geom, this.weatherMaterial);
  }

  private resetParticle(i: number, playerZ = 0, randomY = false): void {
    const idx = i * 3;
    this.weatherPositions[idx] = (Math.random() - 0.5) * 48;
    this.weatherPositions[idx + 1] = randomY ? Math.random() * 22 : 18 + Math.random() * 6;
    this.weatherPositions[idx + 2] = playerZ - 90 + Math.random() * 110;

    if (this.weatherType === 'rain') {
      this.weatherVelocities[idx] = -1.8 + (Math.random() - 0.5) * 0.6; // Slanted wind
      this.weatherVelocities[idx + 1] = -(20.0 + Math.random() * 8.0);   // Fast falling rain
      this.weatherVelocities[idx + 2] = (Math.random() - 0.5) * 0.4;
    } else {
      // Gentle snow flutter
      this.weatherVelocities[idx] = (Math.random() - 0.5) * 0.7;
      this.weatherVelocities[idx + 1] = -(3.0 + Math.random() * 2.5);   // Soft alpine fall
      this.weatherVelocities[idx + 2] = (Math.random() - 0.5) * 0.4;
    }
  }

  public setBiome(biome: BiomeType): void {
    this.currentBiome = biome;

    if (biome === 'boardwalk') {
      // Level 1: Sunburst Boardwalk - Warm Golden Sunshine & Beach Blue Sky
      this.weatherType = 'none';
      this.sunGroup.visible = true;
      this.moonGroup.visible = false;
      this.starsGroup.visible = false;
      this.weatherPoints.visible = false;
    } else if (biome === 'plaza') {
      // Level 2: Downtown Plaza - Cool Urban Rain & Glistening Avenues!
      this.weatherType = 'rain';
      this.sunGroup.visible = false;
      this.moonGroup.visible = false;
      this.starsGroup.visible = false;
      this.weatherPoints.visible = true;
      this.weatherMaterial.color.setHex(0xB3E5FC); // Translucent rain blue
      this.weatherMaterial.size = 0.32;            // Slender rain streak points
      this.weatherMaterial.opacity = 0.75;
    } else if (biome === 'forest') {
      // Level 3: Pinecrest Mountain Forest - Fine Delicate Alpine Snowflakes!
      this.weatherType = 'snow';
      this.sunGroup.visible = true;
      this.moonGroup.visible = false;
      this.starsGroup.visible = false;
      this.weatherPoints.visible = true;
      this.weatherMaterial.color.setHex(0xFFFFFF); // Pure crisp snowflake white
      this.weatherMaterial.size = 0.18;            // Fine, delicate snowflake size
      this.weatherMaterial.opacity = 0.90;
    } else if (biome === 'cyber') {
      // Level 5: High-Tech Cyber Circuit
      this.weatherType = 'cyber';
      this.sunGroup.visible = false;
      this.moonGroup.visible = true;
      this.starsGroup.visible = true;
      this.weatherPoints.visible = true;
      this.weatherMaterial.color.setHex(0x00E5FF);
      this.weatherMaterial.size = 0.28;
      this.weatherMaterial.opacity = 0.65;
    } else {
      // Pier & Candy
      this.weatherType = 'none';
      this.sunGroup.visible = true;
      this.moonGroup.visible = false;
      this.starsGroup.visible = false;
      this.weatherPoints.visible = false;
    }
  }

  public update(playerZ: number, deltaTime: number): void {
    // 1. Drift clouds smoothly in front horizon
    for (const cloud of this.clouds) {
      cloud.group.position.x += cloud.speed * deltaTime * 0.8;
      if (cloud.group.position.x > 65) {
        cloud.group.position.x = -65;
      }
      cloud.group.position.z = playerZ - 90 + ((cloud.baseZ % 120) + 120) % 120;
    }

    // 2. Keep Sun and Moon positioned high in front of player (Negative Z horizon)
    this.sunGroup.position.set(20, 36, playerZ - 92);
    this.sunGroup.rotation.z += deltaTime * 0.12; // Slow golden solar rotation

    this.moonGroup.position.set(-24, 36, playerZ - 92);
    this.starsGroup.position.z = playerZ - 60;

    // 3. Update weather particles (fine snow or fast rain)
    if (this.weatherPoints.visible) {
      const positions = (this.weatherPoints.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;

      for (let i = 0; i < this.weatherCount; i++) {
        const idx = i * 3;
        
        // Gentle wind sway for snow
        if (this.weatherType === 'snow') {
          positions[idx] += (this.weatherVelocities[idx] + Math.sin(performance.now() * 0.003 + i) * 0.4) * deltaTime;
        } else {
          positions[idx] += this.weatherVelocities[idx] * deltaTime;
        }
        
        positions[idx + 1] += this.weatherVelocities[idx + 1] * deltaTime;
        positions[idx + 2] += this.weatherVelocities[idx + 2] * deltaTime;

        // Recycle particle when hitting ground or passing behind camera
        if (positions[idx + 1] < 0.1 || positions[idx + 2] > playerZ + 12) {
          this.resetParticle(i, playerZ, false);
        }
      }

      this.weatherPoints.geometry.attributes.position.needsUpdate = true;
    }
  }
}

