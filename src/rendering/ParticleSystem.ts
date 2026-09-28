import * as THREE from 'three';
import { ToyMaterialFactory } from './ToyMaterials';

interface ActiveParticle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  angularVelocity: THREE.Vector3;
  life: number;
  maxLife: number;
  scaleInitial: number;
}

export class ParticleSystem {
  public group: THREE.Group;
  private particles: ActiveParticle[] = [];

  private studGeom = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 8);
  private cubeGeom = new THREE.BoxGeometry(0.2, 0.2, 0.2);

  constructor() {
    this.group = new THREE.Group();
  }

  private getParticleMesh(useStud = true, color = 0xFFD54F): THREE.Mesh {
    const mat = ToyMaterialFactory.getPlastic(color, 0.2, 0.0);
    const geom = useStud ? this.studGeom : this.cubeGeom;
    const mesh = new THREE.Mesh(geom, mat);
    mesh.castShadow = true;
    return mesh;
  }

  /**
   * Spawns exhaust puffs behind the vehicle
   */
  public emitExhaust(position: THREE.Vector3, color = 0x4DD0E1): void {
    const mesh = this.getParticleMesh(true, color);
    mesh.position.copy(position);
    mesh.position.x += (Math.random() - 0.5) * 0.2;
    mesh.position.y += (Math.random() - 0.5) * 0.1;
    mesh.scale.setScalar(0.7 + Math.random() * 0.4);

    this.group.add(mesh);
    this.particles.push({
      mesh,
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.8,
        0.5 + Math.random() * 0.8,
        3.0 + Math.random() * 2.0 // shoots backward relative to vehicle movement
      ),
      angularVelocity: new THREE.Vector3(
        Math.random() * 4,
        Math.random() * 4,
        Math.random() * 4
      ),
      life: 0,
      maxLife: 0.4 + Math.random() * 0.3,
      scaleInitial: mesh.scale.x
    });
  }

  /**
   * Spawns a burst of colorful toy bricks and studs when an obstacle is smashed
   */
  public emitSmashDebris(position: THREE.Vector3, colors: number[] = [0xFF69B4, 0xFFD54F, 0x00E5FF, 0xFF7043]): void {
    const count = 18;
    for (let i = 0; i < count; i++) {
      const col = colors[Math.floor(Math.random() * colors.length)];
      const isStud = Math.random() > 0.4;
      const mesh = this.getParticleMesh(isStud, col);
      mesh.position.copy(position);
      mesh.position.x += (Math.random() - 0.5) * 0.4;
      mesh.position.y += 0.2 + Math.random() * 0.4;
      mesh.scale.setScalar(0.9 + Math.random() * 0.5);

      this.group.add(mesh);
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 6;
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.cos(angle) * speed,
          3.5 + Math.random() * 5.0,
          Math.sin(angle) * speed * 0.8
        ),
        angularVelocity: new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        ),
        life: 0,
        maxLife: 0.7 + Math.random() * 0.5,
        scaleInitial: mesh.scale.x
      });
    }
  }

  /**
   * Spawns sparkles on coin/gem pickup
   */
  public emitPickupSparkles(position: THREE.Vector3, color = 0xFFD700): void {
    const count = 8;
    for (let i = 0; i < count; i++) {
      const mesh = this.getParticleMesh(true, color);
      mesh.position.copy(position);
      mesh.scale.setScalar(0.6 + Math.random() * 0.4);

      this.group.add(mesh);
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 3,
          2.0 + Math.random() * 3.5,
          (Math.random() - 0.5) * 3
        ),
        angularVelocity: new THREE.Vector3(
          Math.random() * 6,
          Math.random() * 6,
          Math.random() * 6
        ),
        life: 0,
        maxLife: 0.45 + Math.random() * 0.2,
        scaleInitial: mesh.scale.x
      });
    }
  }

  /**
   * Spawns intense road scrape sparks when vehicle drops low to slide/duck
   */
  public emitGroundSparks(position: THREE.Vector3, color = 0xFFFF00): void {
    const count = 4;
    for (let i = 0; i < count; i++) {
      const mesh = this.getParticleMesh(true, color);
      mesh.position.copy(position);
      mesh.position.x += (Math.random() - 0.5) * 0.8;
      mesh.position.y = 0.05 + Math.random() * 0.1;
      mesh.position.z += (Math.random() - 0.5) * 0.5;
      mesh.scale.setScalar(0.4 + Math.random() * 0.3);

      this.group.add(mesh);
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 4.5,
          0.8 + Math.random() * 2.2,
          5.0 + Math.random() * 6.0 // Spray backward rapidly
        ),
        angularVelocity: new THREE.Vector3(
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10
        ),
        life: 0,
        maxLife: 0.25 + Math.random() * 0.15,
        scaleInitial: mesh.scale.x
      });
    }
  }

  public update(deltaTime: number): void {
    const gravity = -14.0;

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += deltaTime;
      if (p.life >= p.maxLife) {
        this.group.remove(p.mesh);
        p.mesh.geometry.dispose();
        this.particles.splice(i, 1);
        continue;
      }

      // Physics
      p.velocity.y += gravity * deltaTime;
      p.mesh.position.addScaledVector(p.velocity, deltaTime);

      p.mesh.rotation.x += p.angularVelocity.x * deltaTime;
      p.mesh.rotation.y += p.angularVelocity.y * deltaTime;
      p.mesh.rotation.z += p.angularVelocity.z * deltaTime;

      // Fade scale
      const progress = p.life / p.maxLife;
      const s = p.scaleInitial * (1 - progress);
      p.mesh.scale.setScalar(Math.max(0.001, s));
    }
  }

  public clear(): void {
    for (const p of this.particles) {
      this.group.remove(p.mesh);
      p.mesh.geometry.dispose();
    }
    this.particles = [];
  }
}
