import * as THREE from 'three';
import { CharacterId, PlayerMovementState } from '../types/game';
import { ToyMaterialFactory } from '../rendering/ToyMaterials';

export interface CharacterRigs {
  root: THREE.Group;
  hips: THREE.Group;
  torso: THREE.Group;
  head: THREE.Group;
  leftArm: THREE.Group;
  rightArm: THREE.Group;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  leftSkateWheels?: THREE.Mesh[];
  rightSkateWheels?: THREE.Mesh[];
}

export class CharacterBuilder {
  public static buildCharacter(id: CharacterId): { model: THREE.Group; rig: CharacterRigs } {
    const root = new THREE.Group();
    root.name = `character_${id}`;

    const hips = new THREE.Group();
    hips.position.y = 0.85;
    root.add(hips);

    // Torso
    const torso = new THREE.Group();
    torso.position.y = 0.35;
    hips.add(torso);

    // Head
    const head = new THREE.Group();
    head.position.y = 0.72;
    torso.add(head);

    // Limbs
    const leftArm = new THREE.Group();
    leftArm.position.set(-0.46, 0.48, 0);
    torso.add(leftArm);

    const rightArm = new THREE.Group();
    rightArm.position.set(0.46, 0.48, 0);
    torso.add(rightArm);

    const leftLeg = new THREE.Group();
    leftLeg.position.set(-0.22, 0, 0);
    hips.add(leftLeg);

    const rightLeg = new THREE.Group();
    rightLeg.position.set(0.22, 0, 0);
    hips.add(rightLeg);

    let leftSkateWheels: THREE.Mesh[] | undefined;
    let rightSkateWheels: THREE.Mesh[] | undefined;

    // Materials based on character
    const skinMat = ToyMaterialFactory.SkinTone;
    const eyeMat = ToyMaterialFactory.getPlastic(0x1A237E, 0.1, 0.0);
    const smileMat = ToyMaterialFactory.getPlastic(0xD81B60, 0.2, 0.0);

    // 1. Common Head Base (Rounded cylinder / bevelled box)
    const headMesh = ToyMaterialFactory.createBlock(0.44, 0.44, 0.44, skinMat);
    head.add(headMesh);

    // Face features (Eyes + Smile)
    const eyeGeom = new THREE.CylinderGeometry(0.045, 0.045, 0.02, 10);
    eyeGeom.rotateX(Math.PI / 2);
    const leftEye = new THREE.Mesh(eyeGeom, eyeMat);
    leftEye.position.set(-0.11, 0.04, 0.23);
    head.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeom, eyeMat);
    rightEye.position.set(0.11, 0.04, 0.23);
    head.add(rightEye);

    const smileGeom = new THREE.TorusGeometry(0.07, 0.02, 8, 12, Math.PI);
    smileGeom.rotateZ(Math.PI);
    const smile = new THREE.Mesh(smileGeom, smileMat);
    smile.position.set(0, -0.08, 0.23);
    head.add(smile);

    // Common Hands
    const handGeom = new THREE.CylinderGeometry(0.09, 0.09, 0.14, 10);
    handGeom.rotateX(Math.PI / 2);

    if (id === 'nova') {
      // NOVA (The Maker): Lilac hoodie, denim shorts, turquoise sneakers, high ponytail
      const hoodieMat = ToyMaterialFactory.getPlastic(0xBA68C8, 0.25, 0.0); // Lilac
      const denimMat = ToyMaterialFactory.getPlastic(0x1976D2, 0.3, 0.0);  // Denim
      const shoeMat = ToyMaterialFactory.getPlastic(0x00E5FF, 0.18, 0.0);  // Turquoise
      const hairMat = ToyMaterialFactory.getPlastic(0x3E2723, 0.2, 0.0);  // Dark Espresso

      // Torso mesh (hoodie)
      const torsoMesh = ToyMaterialFactory.createBlock(0.62, 0.65, 0.38, hoodieMat);
      torso.add(torsoMesh);

      // Hoodie pocket
      const pocket = ToyMaterialFactory.createBlock(0.38, 0.18, 0.06, ToyMaterialFactory.getPlastic(0xAB47BC, 0.25, 0.0));
      pocket.position.set(0, -0.15, 0.20);
      torso.add(pocket);

      // Hair & Ponytail
      const hairTop = ToyMaterialFactory.createBlock(0.48, 0.22, 0.48, hairMat);
      hairTop.position.set(0, 0.22, 0);
      head.add(hairTop);

      const ponytailBase = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 10), hairMat);
      ponytailBase.position.set(0, 0.24, -0.26);
      head.add(ponytailBase);

      const hairTie = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.03, 8, 12), shoeMat);
      hairTie.position.set(0, 0.24, -0.24);
      head.add(hairTie);

      const tail = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.45, 10), hairMat);
      tail.rotation.x = -Math.PI / 3;
      tail.position.set(0, 0.08, -0.42);
      head.add(tail);

      // Arms (Lilac sleeves + skin hands)
      [-1, 1].forEach((dir) => {
        const armGroup = dir === -1 ? leftArm : rightArm;
        const sleeve = ToyMaterialFactory.createBlock(0.24, 0.48, 0.24, hoodieMat);
        sleeve.position.y = -0.24;
        armGroup.add(sleeve);

        const hand = new THREE.Mesh(handGeom, skinMat);
        hand.position.set(0, -0.52, 0.04);
        armGroup.add(hand);
      });

      // Hips & Legs
      const hipMesh = ToyMaterialFactory.createBlock(0.56, 0.22, 0.34, denimMat);
      hips.add(hipMesh);

      [leftLeg, rightLeg].forEach((leg) => {
        const thigh = ToyMaterialFactory.createBlock(0.22, 0.28, 0.24, denimMat); // Denim shorts
        thigh.position.y = -0.14;
        leg.add(thigh);

        const calf = ToyMaterialFactory.createBlock(0.20, 0.32, 0.22, skinMat); // Bare legs
        calf.position.y = -0.44;
        leg.add(calf);

        const shoe = ToyMaterialFactory.createBlock(0.24, 0.16, 0.36, shoeMat); // Turquoise sneakers
        shoe.position.set(0, -0.68, 0.06);
        leg.add(shoe);
      });
    } else if (id === 'leo') {
      // LEO (The Baker): Apron over striped shirt, baker cap, roller skates
      const apronMat = ToyMaterialFactory.getPlastic(0xFFFFFF, 0.2, 0.0);  // White apron
      const shirtMat = ToyMaterialFactory.getPlastic(0x0288D1, 0.2, 0.0);  // Blue striped
      const pantsMat = ToyMaterialFactory.getPlastic(0x37474F, 0.25, 0.0); // Slate trousers
      const skateMat = ToyMaterialFactory.getPlastic(0xFFD54F, 0.15, 0.0); // Yellow skates
      const wheelMat = ToyMaterialFactory.getPlastic(0xE91E63, 0.15, 0.0); // Hot pink wheels
      const hairMat = ToyMaterialFactory.getPlastic(0xFFA000, 0.2, 0.0);  // Blonde/caramel

      // Torso
      const shirtMesh = ToyMaterialFactory.createBlock(0.62, 0.65, 0.38, shirtMat);
      torso.add(shirtMesh);
      const apronFront = ToyMaterialFactory.createBlock(0.48, 0.62, 0.06, apronMat);
      apronFront.position.set(0, -0.02, 0.18);
      torso.add(apronFront);

      // Baker Toque (Puffy Chef Hat)
      const hatBand = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.12, 16), apronMat);
      hatBand.position.set(0, 0.24, 0);
      head.add(hatBand);

      const hatTop = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.24, 0.28, 16), apronMat);
      hatTop.position.set(0, 0.42, 0);
      head.add(hatTop);

      // Hair fringe
      const hairFringe = ToyMaterialFactory.createBlock(0.46, 0.12, 0.46, hairMat);
      hairFringe.position.set(0, 0.18, 0);
      head.add(hairFringe);

      // Arms
      [-1, 1].forEach((dir) => {
        const armGroup = dir === -1 ? leftArm : rightArm;
        const sleeve = ToyMaterialFactory.createBlock(0.24, 0.48, 0.24, shirtMat);
        sleeve.position.y = -0.24;
        armGroup.add(sleeve);

        const hand = new THREE.Mesh(handGeom, skinMat);
        hand.position.set(0, -0.52, 0.04);
        armGroup.add(hand);
      });

      // Hips & Legs
      const hipMesh = ToyMaterialFactory.createBlock(0.56, 0.22, 0.34, pantsMat);
      hips.add(hipMesh);

      leftSkateWheels = [];
      rightSkateWheels = [];

      [leftLeg, rightLeg].forEach((leg, index) => {
        const trouser = ToyMaterialFactory.createBlock(0.22, 0.58, 0.24, pantsMat);
        trouser.position.y = -0.29;
        leg.add(trouser);

        // Roller skate boot
        const boot = ToyMaterialFactory.createBlock(0.26, 0.18, 0.38, skateMat);
        boot.position.set(0, -0.66, 0.04);
        leg.add(boot);

        // 4 Skate wheels
        const wheelGeom = new THREE.CylinderGeometry(0.08, 0.08, 0.06, 10);
        wheelGeom.rotateZ(Math.PI / 2);
        const wheelList = index === 0 ? leftSkateWheels! : rightSkateWheels!;

        [-0.15, 0.15].forEach((wX) => {
          [-0.10, 0.10].forEach((wZ) => {
            const wheel = new THREE.Mesh(wheelGeom, wheelMat);
            wheel.position.set(wX, -0.78, 0.04 + wZ);
            leg.add(wheel);
            wheelList.push(wheel);
          });
        });
      });
    } else {
      // SKYE (The Explorer): Aviator goggles, sunset orange jacket, utility belt
      const jacketMat = ToyMaterialFactory.getPlastic(0xFF7043, 0.2, 0.0); // Sunset orange
      const beltMat = ToyMaterialFactory.getPlastic(0x4E342E, 0.3, 0.0);   // Leather brown
      const pantsMat = ToyMaterialFactory.getPlastic(0x546E7A, 0.25, 0.0); // Utility grey
      const bootMat = ToyMaterialFactory.getPlastic(0x3E2723, 0.25, 0.0);  // Explorer boots
      const goggleMat = ToyMaterialFactory.getPlastic(0x263238, 0.15, 0.0);// Dark goggle frame
      const lensMat = ToyMaterialFactory.getPlastic(0x00E5FF, 0.1, 0.0);   // Cyan lenses
      const hairMat = ToyMaterialFactory.getPlastic(0x2E1C0C, 0.2, 0.0);   // Jet brown

      // Torso
      const jacketMesh = ToyMaterialFactory.createBlock(0.62, 0.65, 0.38, jacketMat);
      torso.add(jacketMesh);

      // Utility belt pouches
      const belt = ToyMaterialFactory.createBlock(0.64, 0.10, 0.40, beltMat);
      belt.position.set(0, -0.28, 0);
      torso.add(belt);

      const pouch1 = ToyMaterialFactory.createBlock(0.12, 0.14, 0.10, beltMat);
      pouch1.position.set(-0.24, -0.28, 0.20);
      torso.add(pouch1);

      const pouch2 = ToyMaterialFactory.createBlock(0.12, 0.14, 0.10, beltMat);
      pouch2.position.set(0.24, -0.28, 0.20);
      torso.add(pouch2);

      // Hair & Aviator Goggles
      const hairMesh = ToyMaterialFactory.createBlock(0.48, 0.30, 0.48, hairMat);
      hairMesh.position.set(0, 0.16, 0);
      head.add(hairMesh);

      // Goggles on forehead
      const goggleFrame = ToyMaterialFactory.createBlock(0.46, 0.12, 0.12, goggleMat);
      goggleFrame.position.set(0, 0.22, 0.22);
      head.add(goggleFrame);

      const lensGeom = new THREE.CylinderGeometry(0.065, 0.065, 0.04, 10);
      lensGeom.rotateX(Math.PI / 2);
      const leftLens = new THREE.Mesh(lensGeom, lensMat);
      leftLens.position.set(-0.12, 0.22, 0.28);
      head.add(leftLens);

      const rightLens = new THREE.Mesh(lensGeom, lensMat);
      rightLens.position.set(0.12, 0.22, 0.28);
      head.add(rightLens);

      // Arms
      [-1, 1].forEach((dir) => {
        const armGroup = dir === -1 ? leftArm : rightArm;
        const sleeve = ToyMaterialFactory.createBlock(0.24, 0.48, 0.24, jacketMat);
        sleeve.position.y = -0.24;
        armGroup.add(sleeve);

        const hand = new THREE.Mesh(handGeom, skinMat);
        hand.position.set(0, -0.52, 0.04);
        armGroup.add(hand);
      });

      // Hips & Legs
      const hipMesh = ToyMaterialFactory.createBlock(0.56, 0.22, 0.34, pantsMat);
      hips.add(hipMesh);

      [leftLeg, rightLeg].forEach((leg) => {
        const trouser = ToyMaterialFactory.createBlock(0.22, 0.48, 0.24, pantsMat);
        trouser.position.y = -0.24;
        leg.add(trouser);

        const boot = ToyMaterialFactory.createBlock(0.25, 0.28, 0.36, bootMat);
        boot.position.set(0, -0.62, 0.05);
        leg.add(boot);
      });
    }

    return {
      model: root,
      rig: {
        root,
        hips,
        torso,
        head,
        leftArm,
        rightArm,
        leftLeg,
        rightLeg,
        leftSkateWheels,
        rightSkateWheels
      }
    };
  }

  /**
   * Procedural animation updates for the avatar rig
   */
  public static updateAnimation(
    rig: CharacterRigs,
    state: PlayerMovementState,
    cycleTime: number,
    laneShiftTilt: number,
    deltaTime: number
  ): void {
    const { root, hips, torso, head, leftArm, rightArm, leftLeg, rightLeg, leftSkateWheels, rightSkateWheels } = rig;

    // Face forward down the road (-Z) with back to camera
    root.rotation.set(0, Math.PI, 0);
    hips.rotation.set(0, 0, 0);
    torso.rotation.set(0, 0, 0);
    head.rotation.set(0, 0, 0);

    if (state === 'running') {
      // Natural running arm & leg pendulum
      const runFreq = 16.0;
      const legAngle = Math.sin(cycleTime * runFreq) * 0.75;
      const armAngle = -legAngle * 0.85;

      leftLeg.rotation.x = legAngle;
      rightLeg.rotation.x = -legAngle;
      leftArm.rotation.x = armAngle;
      rightArm.rotation.x = -armAngle;

      // Vertical bounce
      hips.position.y = 0.85 + Math.abs(Math.sin(cycleTime * runFreq)) * 0.12;

      // Torso sway & lane shift banking
      torso.rotation.y = Math.sin(cycleTime * runFreq) * 0.12;
      torso.rotation.z = laneShiftTilt * 0.35;
      root.rotation.z = laneShiftTilt * 0.25;

      // Roller skate wheel spin if present
      if (leftSkateWheels && rightSkateWheels) {
        for (const w of leftSkateWheels) w.rotation.x += deltaTime * 20;
        for (const w of rightSkateWheels) w.rotation.x += deltaTime * 20;
      }
    } else if (state === 'jumping') {
      // Tucked knees and raised arms
      leftLeg.rotation.x = -0.8;
      rightLeg.rotation.x = -0.5;
      leftArm.rotation.x = -1.6;
      rightArm.rotation.x = -1.6;
      leftArm.rotation.z = -0.4;
      rightArm.rotation.z = 0.4;
      torso.rotation.x = 0.2;
      hips.position.y = 1.0;
    } else if (state === 'sliding') {
      // Sleek athletic slide / crouch facing forward
      torso.rotation.x = 0.7;
      hips.position.y = 0.35;
      leftLeg.rotation.x = -0.5;
      rightLeg.rotation.x = -0.5;
      leftArm.rotation.x = 0.8;
      rightArm.rotation.x = 0.8;
    } else if (state === 'mounting') {
      // Acrobatic mid-air hop into vehicle
      root.rotation.y += deltaTime * 12;
      leftLeg.rotation.x = -0.6;
      rightLeg.rotation.x = -0.6;
      leftArm.rotation.z = -0.8;
      rightArm.rotation.z = 0.8;
    } else if (state === 'crashed') {
      // Stumble / tumble backward
      root.rotation.x = Math.PI / 2.5;
      hips.position.y = 0.3;
      leftArm.rotation.x = 1.2;
      rightArm.rotation.x = 1.2;
    }
  }

  /**
   * Poses the avatar inside the vehicle cockpit or on scooter with dynamic turn banking and ducking
   */
  public static poseInVehicle(rig: CharacterRigs, steerAngle: number, isDucking = false, isScooter = false): void {
    const { root, hips, torso, head, leftArm, rightArm, leftLeg, rightLeg } = rig;

    root.rotation.set(0, Math.PI, 0);

    if (isDucking) {
      // Duck down deeply into cockpit or over scooter handlebars
      hips.position.set(0, isScooter ? 0.35 : 0.22, 0.12);
      torso.rotation.set(0.65, 0, -steerAngle * 0.2); // lean hard forward + bank
      head.rotation.set(-0.4, -steerAngle * 0.3, 0);  // tuck chin down, look into apex
      leftLeg.rotation.set(-1.6, 0.3, 0);
      rightLeg.rotation.set(-1.6, -0.3, 0);
      leftArm.rotation.set(-1.5, 0.4 + steerAngle * 0.5, -0.3);
      rightArm.rotation.set(-1.5, -0.4 + steerAngle * 0.5, 0.3);
    } else if (isScooter) {
      // Upright stylish retro Vespa riding posture with dynamic rider banking
      hips.position.set(0, 0.54, 0.08);
      torso.rotation.set(0.05, 0, -steerAngle * 0.35); // Lean into curve!
      head.rotation.set(0.08, -steerAngle * 0.4, 0);   // Eyes on the road
      leftLeg.rotation.set(-0.85, 0.18, 0);
      rightLeg.rotation.set(-0.85, -0.18, 0);

      // Gripping the handlebars
      leftArm.rotation.set(-1.05, 0.25 + steerAngle * 0.5, -0.18);
      rightArm.rotation.set(-1.05, -0.25 + steerAngle * 0.5, 0.18);
    } else {
      hips.position.set(0, 0.45, 0.05);
      torso.rotation.set(-0.15, 0, -steerAngle * 0.18);
      head.rotation.set(0.1, -steerAngle * 0.2, 0);

      // Seated legs forward towards pedals
      leftLeg.rotation.set(-1.4, 0.2, 0);
      rightLeg.rotation.set(-1.4, -0.2, 0);

      // Hands holding steering wheel
      leftArm.rotation.set(-1.1, 0.3 + steerAngle * 0.4, -0.2);
      rightArm.rotation.set(-1.1, -0.3 + steerAngle * 0.4, 0.2);
    }
  }
}
