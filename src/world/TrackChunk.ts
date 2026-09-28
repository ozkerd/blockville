import * as THREE from 'three';
import { BiomeType, ObstacleType, PickUpType } from '../types/game';
import { BiomeDefinitions } from './BiomeDefinitions';
import { ToyMaterialFactory } from '../rendering/ToyMaterials';
import { LANES } from '../entities/PlayerController';

export const CHUNK_LENGTH = 36;
export const ROAD_WIDTH = 11.2;

export interface ObstacleInstance {
  mesh: THREE.Group;
  type: ObstacleType;
  lane: number;
  z: number;
  boundingBox: THREE.Box3;
  hitboxOffsetMin: THREE.Vector3;
  hitboxOffsetMax: THREE.Vector3;
  isSmashed: boolean;
  canSmash: boolean;
  isMoving?: boolean;
  patrolBaseX?: number;
  patrolPhase?: number;
}

export interface PickUpInstance {
  mesh: THREE.Group;
  type: PickUpType;
  lane: number;
  z: number;
  boundingBox: THREE.Box3;
  isCollected: boolean;
}

export class TrackChunk {
  public group: THREE.Group;
  public chunkIndex = 0;
  public biome: BiomeType = 'boardwalk';
  public obstacles: ObstacleInstance[] = [];
  public pickups: PickUpInstance[] = [];

  private roadMesh!: THREE.Mesh;
  private leftCurb!: THREE.Mesh;
  private rightCurb!: THREE.Mesh;
  private leftSidewalk!: THREE.Mesh;
  private rightSidewalk!: THREE.Mesh;
  private leftLandscape!: THREE.Mesh;
  private rightLandscape!: THREE.Mesh;
  private oceanMesh!: THREE.Mesh;
  private sceneryGroup = new THREE.Group();

  constructor() {
    this.group = new THREE.Group();
    this.buildBaseRoad();
    this.group.add(this.sceneryGroup);
  }

  private buildBaseRoad(): void {
    const roadGeom = new THREE.PlaneGeometry(ROAD_WIDTH, CHUNK_LENGTH);
    roadGeom.rotateX(-Math.PI / 2);
    this.roadMesh = new THREE.Mesh(roadGeom, ToyMaterialFactory.getPlastic(0xFFE082, 0.35, 0.0));
    this.roadMesh.receiveShadow = true;
    this.group.add(this.roadMesh);

    // Curbs
    const curbGeom = new THREE.BoxGeometry(0.6, 0.35, CHUNK_LENGTH);
    this.leftCurb = new THREE.Mesh(curbGeom, ToyMaterialFactory.getPlastic(0x4DD0E1, 0.25, 0.0));
    this.leftCurb.position.set(-ROAD_WIDTH / 2 - 0.3, 0.175, 0);
    this.leftCurb.receiveShadow = true;
    this.group.add(this.leftCurb);

    this.rightCurb = new THREE.Mesh(curbGeom, ToyMaterialFactory.getPlastic(0x4DD0E1, 0.25, 0.0));
    this.rightCurb.position.set(ROAD_WIDTH / 2 + 0.3, 0.175, 0);
    this.rightCurb.receiveShadow = true;
    this.group.add(this.rightCurb);

    // Near Sidewalks
    const sidewalkGeom = new THREE.PlaneGeometry(8.0, CHUNK_LENGTH);
    sidewalkGeom.rotateX(-Math.PI / 2);

    this.leftSidewalk = new THREE.Mesh(sidewalkGeom, ToyMaterialFactory.getPlastic(0xFFF9C4, 0.45, 0.0));
    this.leftSidewalk.position.set(-ROAD_WIDTH / 2 - 4.3, -0.01, 0);
    this.leftSidewalk.receiveShadow = true;
    this.group.add(this.leftSidewalk);

    this.rightSidewalk = new THREE.Mesh(sidewalkGeom, ToyMaterialFactory.getPlastic(0xFFF9C4, 0.45, 0.0));
    this.rightSidewalk.position.set(ROAD_WIDTH / 2 + 4.3, -0.01, 0);
    this.rightSidewalk.receiveShadow = true;
    this.group.add(this.rightSidewalk);

    // Wide Ultra-Horizon Landscapes (spans out to X = +/-85m)
    const landscapeGeom = new THREE.PlaneGeometry(80.0, CHUNK_LENGTH);
    landscapeGeom.rotateX(-Math.PI / 2);

    this.leftLandscape = new THREE.Mesh(landscapeGeom, ToyMaterialFactory.getPlastic(0x81C784, 0.5, 0.0));
    this.leftLandscape.position.set(-ROAD_WIDTH / 2 - 48.0, -0.04, 0);
    this.leftLandscape.receiveShadow = true;
    this.group.add(this.leftLandscape);

    this.rightLandscape = new THREE.Mesh(landscapeGeom, ToyMaterialFactory.getPlastic(0x81C784, 0.5, 0.0));
    this.rightLandscape.position.set(ROAD_WIDTH / 2 + 48.0, -0.04, 0);
    this.rightLandscape.receiveShadow = true;
    this.group.add(this.rightLandscape);

    // Glossy Turquoise Ocean Water (Boardwalk Coastline)
    const oceanGeom = new THREE.PlaneGeometry(75.0, CHUNK_LENGTH);
    oceanGeom.rotateX(-Math.PI / 2);
    this.oceanMesh = new THREE.Mesh(oceanGeom, ToyMaterialFactory.getPlastic(0x00B0FF, 0.08, 0.0));
    this.oceanMesh.position.set(ROAD_WIDTH / 2 + 45.5, -0.02, 0);
    this.oceanMesh.receiveShadow = true;
    this.group.add(this.oceanMesh);

    // Transverse road joints & dashed divider plates
    const jointMat = ToyMaterialFactory.getPlastic(0x37474F, 0.4, 0.0);
    const stripeMat = ToyMaterialFactory.getPlastic(0xFFFFFF, 0.15, 0.0);
    const stripeGeom = new THREE.BoxGeometry(0.24, 0.04, 1.8);
    const jointGeom = new THREE.BoxGeometry(ROAD_WIDTH - 0.2, 0.02, 0.12);

    // Alternating curb blocks with studs
    const curbStudGeom = new THREE.CylinderGeometry(0.18, 0.18, 0.08, 10);
    const altCurbMat = ToyMaterialFactory.getPlastic(0xFFFFFF, 0.2, 0.0);

    for (let z = -CHUNK_LENGTH / 2 + 2; z < CHUNK_LENGTH / 2; z += 3.6) {
      // Road transverse joint line
      const joint = new THREE.Mesh(jointGeom, jointMat);
      joint.position.set(0, 0.01, z);
      joint.receiveShadow = true;
      this.group.add(joint);

      // Dashed lane divider stripes
      [-LANES[2] / 2, LANES[2] / 2].forEach((divX) => {
        const stripe = new THREE.Mesh(stripeGeom, stripeMat);
        stripe.position.set(divX, 0.025, z);
        stripe.receiveShadow = true;
        this.group.add(stripe);
      });

      // Alternating curb studs
      [-ROAD_WIDTH / 2 - 0.3, ROAD_WIDTH / 2 + 0.3].forEach((cx) => {
        const curbStud = new THREE.Mesh(curbStudGeom, altCurbMat);
        curbStud.position.set(cx, 0.38, z);
        curbStud.castShadow = true;
        curbStud.receiveShadow = true;
        this.group.add(curbStud);
      });
    }
  }

  public init(chunkIndex: number, biome: BiomeType, zPos: number, isFirstChunk = false, level = 1): void {
    this.chunkIndex = chunkIndex;
    this.biome = biome;
    this.group.position.set(0, 0, zPos);

    const visuals = BiomeDefinitions.getBiome(biome);

    // Update materials for active biome
    this.roadMesh.material = ToyMaterialFactory.getPlastic(visuals.roadColor, 0.35, 0.0);
    this.leftCurb.material = ToyMaterialFactory.getPlastic(visuals.curbColor, 0.25, 0.0);
    this.rightCurb.material = ToyMaterialFactory.getPlastic(visuals.curbColor, 0.25, 0.0);
    this.leftSidewalk.material = ToyMaterialFactory.getPlastic(visuals.sidewalkColor, 0.45, 0.0);
    this.rightSidewalk.material = ToyMaterialFactory.getPlastic(visuals.sidewalkColor, 0.45, 0.0);

    // Wide terrain styling
    const groundMat = ToyMaterialFactory.getPlastic(visuals.groundColor, 0.45, 0.0);
    this.leftLandscape.material = groundMat;
    this.rightLandscape.material = groundMat;

    // Ocean styling for Boardwalk and Pier
    const hasOcean = biome === 'boardwalk' || biome === 'pier';
    this.oceanMesh.visible = hasOcean;
    if (biome === 'boardwalk') {
      // Golden beach sand leading up to the ocean
      this.rightSidewalk.material = ToyMaterialFactory.getPlastic(0xFFF59D, 0.45, 0.0);
      this.rightLandscape.material = ToyMaterialFactory.getPlastic(0xFFE082, 0.45, 0.0);
    }

    // Clear old props & obstacles
    this.clearDynamicObjects();

    // 1. Spawn Foreground Roadside Props (Streetlamps, palms, cafes, trees)
    let propIdx = this.chunkIndex * 12;
    for (let pZ = -CHUNK_LENGTH / 2 + 3.6; pZ <= CHUNK_LENGTH / 2 - 3.6; pZ += 7.2) {
      const leftProp = visuals.buildSceneryProp('left', propIdx++);
      const leftDepth = -ROAD_WIDTH / 2 - (propIdx % 2 === 0 ? 3.8 : 2.6);
      leftProp.position.set(leftDepth, 0, pZ);
      this.sceneryGroup.add(leftProp);

      const rightProp = visuals.buildSceneryProp('right', propIdx++);
      const rightDepth = ROAD_WIDTH / 2 + (propIdx % 2 === 0 ? 3.8 : 2.6);
      rightProp.position.set(rightDepth, 0, pZ);
      this.sceneryGroup.add(rightProp);
    }

    // 2. Spawn Wide-Angle Horizon Backdrops (Skyscrapers, Ocean Sailboats, Pine Ridges)
    for (let bZ = -CHUNK_LENGTH / 2 + 7.2; bZ <= CHUNK_LENGTH / 2 - 7.2; bZ += 14.4) {
      const leftBackdrop = visuals.buildWideBackdrop('left', propIdx++);
      leftBackdrop.position.set(-ROAD_WIDTH / 2 - 24.0, 0, bZ);
      this.sceneryGroup.add(leftBackdrop);

      const rightBackdrop = visuals.buildWideBackdrop('right', propIdx++);
      // On boardwalk: sailboats float out in the open turquoise water
      const rightDist = biome === 'boardwalk' ? 32.0 : 24.0;
      rightBackdrop.position.set(ROAD_WIDTH / 2 + rightDist, 0, bZ);
      this.sceneryGroup.add(rightBackdrop);
    }

    if (!isFirstChunk) {
      this.populateObstaclesAndPickups(level);
    }
  }

  private populateObstaclesAndPickups(level = 1): void {
    // Generate 1 or 2 obstacle rows in this chunk
    const zOffsets = [-CHUNK_LENGTH / 4, CHUNK_LENGTH / 4];

    zOffsets.forEach((zLocal) => {
      // Pick 1 or 2 lanes to block based on level
      const blockedLane = Math.floor(Math.random() * 3);
      const obstacleType = this.selectRandomObstacle(level);
      this.spawnObstacle(obstacleType, blockedLane, zLocal);

      // In level 3+, chance of a second obstacle in another lane!
      if (level >= 3 && Math.random() < 0.45) {
        const remainingLanes = [0, 1, 2].filter((l) => l !== blockedLane);
        const secondLane = remainingLanes[Math.floor(Math.random() * remainingLanes.length)];
        const secondType = level >= 4 ? 'laser_gate' : 'low_barrier';
        this.spawnObstacle(secondType, secondLane, zLocal);
      }

      // Collectibles in the open lanes
      const openLanes = [0, 1, 2].filter((l) => l !== blockedLane);
      openLanes.forEach((lane) => {
        if (Math.random() < 0.8) {
          const pickupType = this.selectRandomPickup();
          this.spawnPickup(pickupType, lane, zLocal + (Math.random() - 0.5) * 4);
        }
      });
    });
  }

  private selectRandomObstacle(level = 1): ObstacleType {
    const r = Math.random();
    if (level === 1) {
      if (r < 0.35) return 'low_barrier';
      if (r < 0.65) return 'high_arch';
      if (r < 0.85) return 'crate_stack';
      return 'traffic_cone';
    } else if (level === 2) {
      if (r < 0.25) return 'low_barrier';
      if (r < 0.45) return 'high_arch';
      if (r < 0.65) return 'crate_stack';
      if (r < 0.82) return 'robot_patrol';
      return 'roadblock';
    } else if (level === 3) {
      if (r < 0.22) return 'low_barrier';
      if (r < 0.42) return 'laser_gate';
      if (r < 0.62) return 'robot_patrol';
      if (r < 0.80) return 'roadblock';
      return 'crate_stack';
    } else {
      // Level 4+
      if (r < 0.28) return 'laser_gate';
      if (r < 0.52) return 'robot_patrol';
      if (r < 0.76) return 'roadblock';
      if (r < 0.88) return 'low_barrier';
      return 'crate_stack';
    }
  }

  private selectRandomPickup(): PickUpType {
    const r = Math.random();
    if (r < 0.65) return 'star_coin';
    if (r < 0.78) return 'diamond_gem';
    if (r < 0.88) return 'vehicle_key'; // Good chance to hop into vehicles!
    if (r < 0.94) return 'toy_wrench';
    return 'coin_magnet';
  }

  private spawnObstacle(type: ObstacleType, lane: number, zLocal: number): void {
    const group = new THREE.Group();
    const laneX = LANES[lane];
    group.position.set(laneX, 0, zLocal);

    let canSmash = false;
    const hitboxOffsetMin = new THREE.Vector3(-0.75, 0, -0.25);
    const hitboxOffsetMax = new THREE.Vector3(0.75, 0.75, 0.25);

    if (type === 'low_barrier') {
      // Plastic hurdle (jump over)
      const barMat = ToyMaterialFactory.getPlastic(0xFF5252, 0.2, 0.0);
      const postMat = ToyMaterialFactory.WhitePlastic;

      const topBar = ToyMaterialFactory.createBlock(2.0, 0.25, 0.18, barMat);
      topBar.position.y = 0.65;
      group.add(topBar);

      [-0.85, 0.85].forEach((px) => {
        const post = ToyMaterialFactory.createBlock(0.18, 0.7, 0.18, postMat);
        post.position.set(px, 0.35, 0);
        group.add(post);
      });
      hitboxOffsetMin.set(-0.75, 0, -0.2);
      hitboxOffsetMax.set(0.75, 0.70, 0.2);
      canSmash = true; // Smashed easily by vehicle or boost
    } else if (type === 'high_arch') {
      // Overhead hazard banner (slide under!)
      const archMat = ToyMaterialFactory.getPlastic(0x7C4DFF, 0.2, 0.0);
      const signMat = ToyMaterialFactory.getPlastic(0xFFEB3B, 0.2, 0.0);
      const hazardMat = ToyMaterialFactory.getPlastic(0xFF1744, 0.2, 0.0);

      // Overhead crossbeam at ducking height
      const crossbeam = ToyMaterialFactory.createBlock(2.2, 0.55, 0.25, signMat);
      crossbeam.position.y = 1.45;
      group.add(crossbeam);

      // Warning stripes on the crossbeam
      [-0.6, 0, 0.6].forEach((hx) => {
        const stripe = ToyMaterialFactory.createBlock(0.2, 0.57, 0.27, hazardMat);
        stripe.position.set(hx, 1.45, 0);
        group.add(stripe);
      });

      // Side pillars positioned outside player's path
      [-1.25, 1.25].forEach((px) => {
        const pillar = ToyMaterialFactory.createBlock(0.22, 1.8, 0.22, archMat);
        pillar.position.set(px, 0.9, 0);
        group.add(pillar);
      });

      // Slide under: bottom clearance is from 0 to 1.05m
      hitboxOffsetMin.set(-0.75, 1.05, -0.25);
      hitboxOffsetMax.set(0.75, 1.80, 0.25);
      canSmash = true; // Vehicle can bash through
    } else if (type === 'crate_stack') {
      // Wooden block crates (breakable)
      const crateMat = ToyMaterialFactory.getPlastic(0x8D6E63, 0.35, 0.0);
      const crate1 = ToyMaterialFactory.createBlock(0.85, 0.85, 0.85, crateMat);
      crate1.position.y = 0.42;
      ToyMaterialFactory.addStuds(crate1, 0.75, 0.75, 0.42, crateMat, 2, 2);
      group.add(crate1);

      const crate2 = ToyMaterialFactory.createBlock(0.65, 0.65, 0.65, crateMat);
      crate2.position.set(0.08, 1.15, 0.04);
      group.add(crate2);

      hitboxOffsetMin.set(-0.45, 0, -0.35);
      hitboxOffsetMax.set(0.45, 1.25, 0.35);
      canSmash = true;
    } else if (type === 'traffic_cone') {
      // Orange toy traffic cones (breakable)
      const coneMat = ToyMaterialFactory.getPlastic(0xFF6D00, 0.2, 0.0);
      const whiteMat = ToyMaterialFactory.WhitePlastic;

      [-0.4, 0.4].forEach((cx) => {
        const base = ToyMaterialFactory.createBlock(0.45, 0.08, 0.45, coneMat);
        base.position.set(cx, 0.04, 0);
        group.add(base);

        const cone = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.75, 12), coneMat);
        cone.position.set(cx, 0.42, 0);
        group.add(cone);

        const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.17, 0.15, 12), whiteMat);
        ring.position.set(cx, 0.38, 0);
        group.add(ring);
      });
      hitboxOffsetMin.set(-0.45, 0, -0.25);
      hitboxOffsetMax.set(0.45, 0.65, 0.25);
      canSmash = true;
    } else if (type === 'laser_gate') {
      // High-voltage laser grid (slide under!)
      const postMat = ToyMaterialFactory.getPlastic(0x212121, 0.2, 0.0);
      const laserMat = ToyMaterialFactory.getPlastic(0xFF1744, 0.1, 0.0);

      [-1.25, 1.25].forEach((px) => {
        const post = ToyMaterialFactory.createBlock(0.22, 2.2, 0.22, postMat);
        post.position.set(px, 1.1, 0);
        group.add(post);

        const emitter = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), ToyMaterialFactory.getPlastic(0x00E5FF, 0.1, 0.0));
        emitter.position.set(px, 1.35, 0);
        group.add(emitter);
      });

      const beam = ToyMaterialFactory.createBlock(2.2, 0.16, 0.16, laserMat);
      beam.position.y = 1.35;
      group.add(beam);

      // Slide under: bottom clearance from 0 to 1.0m
      hitboxOffsetMin.set(-0.75, 1.0, -0.25);
      hitboxOffsetMax.set(0.75, 1.65, 0.25);
      canSmash = true; // Vehicles can shatter laser beam
    } else if (type === 'robot_patrol') {
      // Moving Toy Road Sweeper Robot (oscillates safely inside lane)
      const robotBodyMat = ToyMaterialFactory.getPlastic(0xFFD600, 0.2, 0.0);
      const brushMat = ToyMaterialFactory.getPlastic(0x00E5FF, 0.2, 0.0);

      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 0.45, 12), robotBodyMat);
      body.position.y = 0.32;
      group.add(body);

      [-0.55, 0.55].forEach((bx) => {
        const brush = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.18, 10), brushMat);
        brush.position.set(bx, 0.16, 0.3);
        brush.rotation.x = Math.PI / 2;
        group.add(brush);
      });

      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), ToyMaterialFactory.getPlastic(0xFF1744, 0.1, 0.0));
      dome.position.y = 0.65;
      group.add(dome);

      hitboxOffsetMin.set(-0.45, 0, -0.45);
      hitboxOffsetMax.set(0.45, 0.75, 0.45);
      canSmash = true;
    } else {
      // Roadblock (heavy concrete toy barrier, red & white stripes)
      const barrierMat = ToyMaterialFactory.getPlastic(0xD50000, 0.25, 0.0);
      const stripeMat = ToyMaterialFactory.WhitePlastic;

      const barrier = ToyMaterialFactory.createBlock(2.2, 1.1, 0.55, barrierMat);
      barrier.position.y = 0.55;
      group.add(barrier);

      // White hazard stripes
      [-0.55, 0, 0.55].forEach((sx) => {
        const stripe = ToyMaterialFactory.createBlock(0.28, 1.12, 0.57, stripeMat);
        stripe.position.set(sx, 0.55, 0);
        group.add(stripe);
      });

      hitboxOffsetMin.set(-0.85, 0, -0.3);
      hitboxOffsetMax.set(0.85, 1.15, 0.3);
      canSmash = false; // Heavy immovable!
    }

    this.group.add(group);
    const box = new THREE.Box3();

    this.obstacles.push({
      mesh: group,
      type,
      lane,
      z: zLocal,
      boundingBox: box,
      hitboxOffsetMin,
      hitboxOffsetMax,
      isSmashed: false,
      canSmash,
      isMoving: type === 'robot_patrol',
      patrolBaseX: laneX,
      patrolPhase: Math.random() * Math.PI * 2
    });
  }

  private spawnPickup(type: PickUpType, lane: number, zLocal: number): void {
    const group = new THREE.Group();
    const laneX = LANES[lane];
    group.position.set(laneX, 1.0, zLocal);

    if (type === 'star_coin') {
      // Glossy Gold Star Coin
      const starGeom = new THREE.CylinderGeometry(0.42, 0.42, 0.14, 16);
      starGeom.rotateX(Math.PI / 2);
      const coin = new THREE.Mesh(starGeom, ToyMaterialFactory.GoldStar);
      coin.castShadow = true;
      group.add(coin);

      // Star emblem in center
      const star = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.18, 5), ToyMaterialFactory.getPlastic(0xFFEB3B, 0.1, 0.0));
      star.position.z = 0.08;
      group.add(star);
    } else if (type === 'diamond_gem') {
      // Cyan Diamond Prism
      const gem = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.45, 0),
        ToyMaterialFactory.CyanGem
      );
      gem.scale.set(1, 1.4, 1);
      gem.castShadow = true;
      group.add(gem);
    } else if (type === 'vehicle_key') {
      // Golden Toy Key Ring
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.35, 0.09, 10, 16),
        ToyMaterialFactory.GoldStar
      );
      group.add(ring);

      const shaft = ToyMaterialFactory.createBlock(0.1, 0.45, 0.08, ToyMaterialFactory.GoldStar);
      shaft.position.y = -0.45;
      group.add(shaft);

      const tooth = ToyMaterialFactory.createBlock(0.2, 0.12, 0.08, ToyMaterialFactory.GoldStar);
      tooth.position.set(0.08, -0.55, 0);
      group.add(tooth);
    } else if (type === 'heart_shield') {
      // Floating Pink Heart
      const heartMat = ToyMaterialFactory.getPlastic(0xFF4081, 0.1, 0.0);
      const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), heartMat);
      sphere1.position.set(-0.14, 0.14, 0);
      group.add(sphere1);

      const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), heartMat);
      sphere2.position.set(0.14, 0.14, 0);
      group.add(sphere2);

      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.5, 12), heartMat);
      cone.rotation.z = Math.PI;
      cone.position.set(0, -0.12, 0);
      group.add(cone);
    } else {
      // Toy Wrench (Repair / Extend Vehicle)
      const wrenchMat = ToyMaterialFactory.Chrome;
      const head = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.08, 8, 12, Math.PI * 1.5), wrenchMat);
      group.add(head);

      const handle = ToyMaterialFactory.createBlock(0.12, 0.55, 0.08, wrenchMat);
      handle.position.y = -0.38;
      group.add(handle);
    }

    this.group.add(group);
    const box = new THREE.Box3();

    this.pickups.push({
      mesh: group,
      type,
      lane,
      z: zLocal,
      boundingBox: box,
      isCollected: false
    });
  }

  public updateBoundingBoxes(): void {
    const worldPos = new THREE.Vector3();
    for (const obs of this.obstacles) {
      if (obs.isSmashed) continue;
      obs.mesh.updateMatrixWorld(true);
      obs.mesh.getWorldPosition(worldPos);
      obs.boundingBox.min.copy(worldPos).add(obs.hitboxOffsetMin);
      obs.boundingBox.max.copy(worldPos).add(obs.hitboxOffsetMax);
    }

    for (const p of this.pickups) {
      if (p.isCollected) continue;
      p.mesh.updateMatrixWorld(true);
      p.boundingBox.setFromObject(p.mesh);
    }
  }

  public updateVisuals(deltaTime: number): void {
    // Spin collectibles
    for (const p of this.pickups) {
      if (!p.isCollected) {
        p.mesh.rotation.y += deltaTime * 3.5;
        p.mesh.position.y = 1.0 + Math.sin(performance.now() * 0.003 + p.z) * 0.15;
      }
    }

    // Oscillate moving obstacles (cleaning robot sweepers) gently inside their lane
    for (const obs of this.obstacles) {
      if (!obs.isSmashed && obs.isMoving && typeof obs.patrolBaseX === 'number') {
        const phase = obs.patrolPhase || 0;
        obs.mesh.position.x = obs.patrolBaseX + Math.sin(performance.now() * 0.0025 + phase) * 0.55;
        obs.mesh.rotation.y += deltaTime * 3.0;
      }
    }
  }

  public clearDynamicObjects(): void {
    // Remove scenery
    while (this.sceneryGroup.children.length > 0) {
      this.sceneryGroup.remove(this.sceneryGroup.children[0]);
    }

    // Remove obstacles
    for (const o of this.obstacles) {
      this.group.remove(o.mesh);
    }
    this.obstacles = [];

    // Remove pickups
    for (const p of this.pickups) {
      this.group.remove(p.mesh);
    }
    this.pickups = [];
  }
}
