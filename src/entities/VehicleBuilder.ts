import * as THREE from 'three';
import { VehicleId, ColorPaletteId } from '../types/game';
import { ToyMaterialFactory, PALETTES } from '../rendering/ToyMaterials';

export interface VehicleParts {
  root: THREE.Group;
  chassis: THREE.Group;
  cockpitAnchor: THREE.Group;
  frontWheelPivots: THREE.Group[];
  allWheels: THREE.Mesh[];
  topperMesh?: THREE.Object3D;
  leftExhaustPos: THREE.Vector3;
  rightExhaustPos: THREE.Vector3;
  bumperMesh?: THREE.Mesh;
}

export class VehicleBuilder {
  public static buildVehicle(id: VehicleId, paletteId: ColorPaletteId): { model: THREE.Group; parts: VehicleParts } {
    const palette = PALETTES[paletteId] || PALETTES.classic;
    const root = new THREE.Group();
    root.name = `vehicle_${id}`;

    const chassis = new THREE.Group();
    root.add(chassis);

    const cockpitAnchor = new THREE.Group();
    chassis.add(cockpitAnchor);

    const frontWheelPivots: THREE.Group[] = [];
    const allWheels: THREE.Mesh[] = [];
    let topperMesh: THREE.Object3D | undefined;
    let bumperMesh: THREE.Mesh | undefined;

    const leftExhaustPos = new THREE.Vector3(-0.6, 0.4, 1.6);
    const rightExhaustPos = new THREE.Vector3(0.6, 0.4, 1.6);

    // Materials
    const matPrimary = ToyMaterialFactory.getPlastic(palette.primary, 0.16, 0.0);
    const matSecondary = ToyMaterialFactory.getPlastic(palette.secondary, 0.16, 0.0);
    const matAccent = ToyMaterialFactory.getPlastic(palette.accent, 0.16, 0.0);
    const matChassis = ToyMaterialFactory.getPlastic(palette.chassis, 0.22, 0.0);
    const matRim = ToyMaterialFactory.getPlastic(palette.wheelRim, 0.18, 0.0);
    const matTire = ToyMaterialFactory.BlackRubber;
    const matChrome = ToyMaterialFactory.Chrome;

    // Helper: Wheel with Tire + Rim
    const createWheel = (radius: number, width: number): THREE.Mesh => {
      const group = new THREE.Mesh(
        new THREE.CylinderGeometry(radius, radius, width, 16),
        matTire
      );
      group.castShadow = true;
      group.receiveShadow = true;
      group.rotation.z = Math.PI / 2;

      // Rim
      const rim = new THREE.Mesh(
        new THREE.CylinderGeometry(radius * 0.65, radius * 0.65, width + 0.02, 12),
        matRim
      );
      group.add(rim);

      // Center stud
      const cap = new THREE.Mesh(
        new THREE.CylinderGeometry(radius * 0.25, radius * 0.25, width + 0.04, 8),
        matChrome
      );
      group.add(cap);

      allWheels.push(group);
      return group;
    };

    if (id === 'van') {
      // 1. SWEET-TREAT VAN
      // Chassis platform
      const basePlatform = ToyMaterialFactory.createBlock(1.8, 0.35, 3.4, matChassis);
      basePlatform.position.y = 0.5;
      chassis.add(basePlatform);

      // Cab & Cargo Body
      const cargoBody = ToyMaterialFactory.createBlock(1.7, 1.3, 2.0, matPrimary);
      cargoBody.position.set(0, 1.25, 0.6);
      chassis.add(cargoBody);

      // Toy studs on top of cargo roof
      ToyMaterialFactory.addStuds(cargoBody, 1.5, 1.8, 0.65, matPrimary, 4, 4);

      // Cab front
      const cab = ToyMaterialFactory.createBlock(1.6, 1.0, 1.2, matSecondary);
      cab.position.set(0, 1.05, -0.9);
      chassis.add(cab);

      // Windshield
      const windshield = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 0.65, 0.08),
        ToyMaterialFactory.GlassWindshield
      );
      windshield.position.set(0, 1.25, -1.52);
      windshield.rotation.x = -0.15;
      chassis.add(windshield);

      // Heavy Bumper Shield (Smash ability)
      bumperMesh = ToyMaterialFactory.createBlock(1.9, 0.45, 0.3, matAccent);
      bumperMesh.position.set(0, 0.48, -1.8);
      ToyMaterialFactory.addStuds(bumperMesh, 1.8, 0.25, 0.22, matAccent, 4, 1);
      chassis.add(bumperMesh);

      // Headlights
      [-0.65, 0.65].forEach((hx) => {
        const light = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.12, 0.08, 12),
          ToyMaterialFactory.getPlastic(0xFFEB3B, 0.1, 0.0)
        );
        light.rotation.x = Math.PI / 2;
        light.position.set(hx, 0.75, -1.55);
        chassis.add(light);
      });

      // Rooftop Giant Spinning Cupcake / Donut
      const topperGroup = new THREE.Group();
      topperGroup.position.set(0, 2.1, 0.6);

      // Donut base
      const donutMat = ToyMaterialFactory.getPlastic(0xFF80AB, 0.15, 0.0);
      const donut = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.25, 12, 24), donutMat);
      donut.rotation.x = Math.PI / 2;
      topperGroup.add(donut);

      // Frosting dollop on top
      const dollop = new THREE.Mesh(
        new THREE.ConeGeometry(0.28, 0.45, 12),
        ToyMaterialFactory.getPlastic(0xFFFFFF, 0.15, 0.0)
      );
      dollop.position.y = 0.25;
      topperGroup.add(dollop);

      // Cherry on top
      const cherry = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 10, 10),
        ToyMaterialFactory.getPlastic(0xD50000, 0.1, 0.0)
      );
      cherry.position.y = 0.52;
      topperGroup.add(cherry);

      chassis.add(topperGroup);
      topperMesh = topperGroup;

      // Cockpit position
      cockpitAnchor.position.set(0, 0.72, -0.5);

      // 4 Wheels
      const wheelRadius = 0.42;
      const wheelWidth = 0.32;

      // Front Wheels with Pivots
      [-0.95, 0.95].forEach((wx) => {
        const pivot = new THREE.Group();
        pivot.position.set(wx, wheelRadius, -1.05);
        const wheel = createWheel(wheelRadius, wheelWidth);
        pivot.add(wheel);
        chassis.add(pivot);
        frontWheelPivots.push(pivot);
      });

      // Rear Wheels
      [-0.95, 0.95].forEach((wx) => {
        const wheel = createWheel(wheelRadius, wheelWidth);
        wheel.position.set(wx, wheelRadius, 0.95);
        chassis.add(wheel);
      });

      leftExhaustPos.set(-0.7, 0.45, 1.75);
      rightExhaustPos.set(0.7, 0.45, 1.75);
    } else if (id === 'buggy') {
      // 2. NEON BUGGY (All-Terrain with Magnet Aura)
      // Low-slung chassis
      const body = ToyMaterialFactory.createBlock(1.5, 0.3, 3.0, matPrimary);
      body.position.y = 0.55;
      chassis.add(body);

      // Roll cage frame pipes
      const rollMat = matAccent;
      const cagePipeGeom = new THREE.CylinderGeometry(0.06, 0.06, 1.4, 8);
      [-0.65, 0.65].forEach((cx) => {
        const pipeFront = new THREE.Mesh(cagePipeGeom, rollMat);
        pipeFront.position.set(cx, 1.25, -0.4);
        pipeFront.rotation.x = 0.25;
        chassis.add(pipeFront);

        const pipeBack = new THREE.Mesh(cagePipeGeom, rollMat);
        pipeBack.position.set(cx, 1.25, 0.6);
        pipeBack.rotation.x = -0.25;
        chassis.add(pipeBack);
      });

      // Roof crossbar
      const roofBar = ToyMaterialFactory.createBlock(1.4, 0.1, 0.9, matSecondary);
      roofBar.position.set(0, 1.85, 0.1);
      ToyMaterialFactory.addStuds(roofBar, 1.2, 0.7, 0.05, matSecondary, 3, 2);
      chassis.add(roofBar);

      // Bull-bar front bumper
      bumperMesh = ToyMaterialFactory.createBlock(1.6, 0.3, 0.25, matChassis);
      bumperMesh.position.set(0, 0.5, -1.6);
      chassis.add(bumperMesh);

      // Big Magnet Antenna at rear
      const antennaPole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 1.2, 8),
        matChrome
      );
      antennaPole.position.set(0.55, 1.6, 1.2);
      antennaPole.rotation.z = -0.15;
      chassis.add(antennaPole);

      // Horseshoe magnet topper on antenna
      const magnetTopper = new THREE.Group();
      magnetTopper.position.set(0.72, 2.2, 1.2);
      const magnetArch = new THREE.Mesh(
        new THREE.TorusGeometry(0.25, 0.08, 8, 16, Math.PI),
        ToyMaterialFactory.RubyGem
      );
      magnetArch.rotation.z = Math.PI;
      magnetTopper.add(magnetArch);

      // Magnet tips (silver)
      [-0.25, 0.25].forEach((tx) => {
        const tip = ToyMaterialFactory.createBlock(0.14, 0.18, 0.14, matChrome);
        tip.position.set(tx, 0.12, 0);
        magnetTopper.add(tip);
      });
      chassis.add(magnetTopper);
      topperMesh = magnetTopper;

      // Cockpit
      cockpitAnchor.position.set(0, 0.65, -0.05);

      // Wheels: Oversized rear tires, medium front tires
      const frontRadius = 0.38;
      const rearRadius = 0.52;
      const wheelWidth = 0.36;

      // Front Wheels
      [-0.88, 0.88].forEach((wx) => {
        const pivot = new THREE.Group();
        pivot.position.set(wx, frontRadius, -1.1);
        const wheel = createWheel(frontRadius, wheelWidth);
        pivot.add(wheel);
        chassis.add(pivot);
        frontWheelPivots.push(pivot);
      });

      // Oversized Rear Wheels
      [-0.95, 0.95].forEach((wx) => {
        const wheel = createWheel(rearRadius, wheelWidth + 0.08);
        wheel.position.set(wx, rearRadius, 0.9);
        chassis.add(wheel);
      });

      leftExhaustPos.set(-0.6, 0.55, 1.55);
      rightExhaustPos.set(0.6, 0.55, 1.55);
    } else {
      // 3. ECO SCOOTER (Iconic 2-Wheeled Retro Toy Vespa / Moped)
      // Narrow step-through floorboard deck
      const floorboard = ToyMaterialFactory.createBlock(0.55, 0.14, 1.5, matChassis);
      floorboard.position.set(0, 0.38, -0.1);
      chassis.add(floorboard);

      // Rubber grip foot-strips on floorboard
      [-0.16, 0, 0.16].forEach((gx) => {
        const strip = new THREE.Mesh(
          new THREE.BoxGeometry(0.06, 0.04, 1.1),
          matTire
        );
        strip.position.set(gx, 0.47, -0.1);
        chassis.add(strip);
      });

      // Curved Front Apron / Leg-Shield
      const apron = ToyMaterialFactory.createBlock(0.85, 0.85, 0.12, matPrimary);
      apron.position.set(0, 0.85, -0.85);
      apron.rotation.x = -0.12;
      chassis.add(apron);
      ToyMaterialFactory.addStuds(apron, 0.65, 0.65, 0.04, matPrimary, 2, 2);

      // Apron Chrome Trim
      const apronTrim = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 0.88, 8),
        matChrome
      );
      apronTrim.rotation.z = Math.PI / 2;
      apronTrim.position.set(0, 1.28, -0.9);
      chassis.add(apronTrim);

      // Rear Engine Cowl / Teardrop Body (encloses rear wheel)
      const rearCowl = ToyMaterialFactory.createBlock(0.68, 0.6, 1.15, matPrimary);
      rearCowl.position.set(0, 0.65, 0.72);
      chassis.add(rearCowl);

      // Two-Tone Padded Saddle Seat
      const seatBase = ToyMaterialFactory.createBlock(0.48, 0.12, 0.8, matSecondary);
      seatBase.position.set(0, 0.98, 0.45);
      chassis.add(seatBase);

      const seatCushion = ToyMaterialFactory.createBlock(0.42, 0.08, 0.72, matAccent);
      seatCushion.position.set(0, 1.06, 0.45);
      chassis.add(seatCushion);

      // Rear Chrome Luggage Carrier Rack
      const rackGroup = new THREE.Group();
      rackGroup.position.set(0, 0.96, 1.25);

      const rackBar1 = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.05, 0.4), matChrome);
      rackGroup.add(rackBar1);

      // Toy Delivery Box / Picnic Basket on rack
      const deliveryBox = ToyMaterialFactory.createBlock(0.45, 0.35, 0.35, matSecondary);
      deliveryBox.position.set(0, 0.22, 0);
      ToyMaterialFactory.addStuds(deliveryBox, 0.35, 0.25, 0.04, matSecondary, 2, 1);
      rackGroup.add(deliveryBox);

      // Small spinning antenna flag or emblem on rear rack
      const flagPole = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.6, 8), matChrome);
      flagPole.position.set(0.2, 0.4, 0.1);
      rackGroup.add(flagPole);

      const flag = ToyMaterialFactory.createBlock(0.2, 0.12, 0.03, matAccent);
      flag.position.set(0.1, 0.65, 0.1);
      rackGroup.add(flag);

      chassis.add(rackGroup);
      topperMesh = flag;

      // Chrome Front Bumper Guard
      bumperMesh = ToyMaterialFactory.createBlock(0.75, 0.14, 0.12, matChrome);
      bumperMesh.position.set(0, 0.38, -1.35);
      chassis.add(bumperMesh);

      // Cockpit position for avatar
      cockpitAnchor.position.set(0, 0.48, 0.05);

      // Single-Track Inline Wheels: 1 Front (steered), 1 Rear
      const wheelRadius = 0.35;
      const wheelWidth = 0.22;

      // FRONT STEERING FORK & HANDLEBARS (Rotates with steering!)
      const frontSteerPivot = new THREE.Group();
      frontSteerPivot.position.set(0, wheelRadius, -1.15);

      // Front Wheel
      const frontWheel = createWheel(wheelRadius, wheelWidth);
      frontSteerPivot.add(frontWheel);

      // Fork struts (left and right of front wheel)
      [-0.14, 0.14].forEach((fx) => {
        const forkLeg = new THREE.Mesh(
          new THREE.CylinderGeometry(0.035, 0.035, 0.65, 8),
          matChrome
        );
        forkLeg.position.set(fx, 0.26, 0);
        frontSteerPivot.add(forkLeg);
      });

      // Steering Stem rising to handlebars
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.045, 0.045, 0.75, 8),
        matChrome
      );
      stem.position.set(0, 0.75, 0.08);
      stem.rotation.x = -0.15;
      frontSteerPivot.add(stem);

      // Horizontal Chrome Handlebars
      const handlebar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.035, 0.035, 0.9, 8),
        matChrome
      );
      handlebar.rotation.z = Math.PI / 2;
      handlebar.position.set(0, 1.15, 0.14);
      frontSteerPivot.add(handlebar);

      // Rubber Hand Grips
      [-0.42, 0.42].forEach((gx) => {
        const grip = new THREE.Mesh(
          new THREE.CylinderGeometry(0.048, 0.048, 0.16, 8),
          matTire
        );
        grip.rotation.z = Math.PI / 2;
        grip.position.set(gx, 1.15, 0.14);
        frontSteerPivot.add(grip);
      });

      // Round Retro Headlight
      const headlightHousing = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.1, 0.14, 12),
        matChrome
      );
      headlightHousing.rotation.x = Math.PI / 2;
      headlightHousing.position.set(0, 1.15, 0.04);
      frontSteerPivot.add(headlightHousing);

      const headlightLens = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 12, 12),
        ToyMaterialFactory.getPlastic(0xFFEB3B, 0.1, 0.0)
      );
      headlightLens.position.set(0, 1.15, -0.04);
      frontSteerPivot.add(headlightLens);

      // Round Side Mirrors
      [-0.32, 0.32].forEach((mx) => {
        const mirrorStem = new THREE.Mesh(
          new THREE.CylinderGeometry(0.015, 0.015, 0.22, 6),
          matChrome
        );
        mirrorStem.position.set(mx, 1.3, 0.14);
        frontSteerPivot.add(mirrorStem);

        const mirror = new THREE.Mesh(
          new THREE.CylinderGeometry(0.07, 0.07, 0.02, 10),
          matChrome
        );
        mirror.rotation.x = Math.PI / 2;
        mirror.position.set(mx, 1.42, 0.14);
        frontSteerPivot.add(mirror);
      });

      chassis.add(frontSteerPivot);
      frontWheelPivots.push(frontSteerPivot);

      // REAR WHEEL (Single, Centered at x=0 under the rear cowl)
      const rearWheel = createWheel(wheelRadius, wheelWidth);
      rearWheel.position.set(0, wheelRadius, 0.78);
      chassis.add(rearWheel);

      // Single Chrome Exhaust Muffler on right side
      const muffler = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.06, 0.55, 8),
        matChrome
      );
      muffler.rotation.x = Math.PI / 2;
      muffler.position.set(0.38, 0.32, 0.85);
      chassis.add(muffler);

      leftExhaustPos.set(0.38, 0.32, 1.15);
      rightExhaustPos.set(0.38, 0.32, 1.15);
    }

    return {
      model: root,
      parts: {
        root,
        chassis,
        cockpitAnchor,
        frontWheelPivots,
        allWheels,
        topperMesh,
        leftExhaustPos,
        rightExhaustPos,
        bumperMesh
      }
    };
  }

  /**
   * Applies physics simulation (spring suspension bounce, wheel spin, chassis banking roll, front steering)
   */
  public static updatePhysics(
    parts: VehicleParts,
    speed: number,
    steerTarget: number,
    laneShiftProgress: number,
    deltaTime: number,
    isBoosting = false,
    isDucking = false
  ): void {
    const { chassis, frontWheelPivots, allWheels, topperMesh } = parts;

    // 1. Steering angle on front wheels
    const targetSteerAngle = -steerTarget * 0.45;
    for (const pivot of frontWheelPivots) {
      pivot.rotation.y = THREE.MathUtils.lerp(pivot.rotation.y, targetSteerAngle, deltaTime * 12);
    }

    // 2. Wheel rotation based on forward speed
    const wheelRotSpeed = (speed / 0.4) * deltaTime;
    for (const wheel of allWheels) {
      wheel.rotation.x += wheelRotSpeed;
    }

    // 3. Chassis roll on lane changes (body banking)
    const rollAngle = -laneShiftProgress * 0.18;
    chassis.rotation.z = THREE.MathUtils.lerp(chassis.rotation.z, rollAngle, deltaTime * 10);

    // 4. Spring suspension bounce & Ducking drop!
    const bounceFreq = isBoosting ? 24 : 14;
    const bounceAmp = isBoosting ? 0.04 : 0.025;
    const naturalBounce = Math.sin(performance.now() * 0.001 * bounceFreq) * bounceAmp;

    if (isDucking) {
      // Slam down suspension by -0.42m!
      chassis.position.y = THREE.MathUtils.lerp(chassis.position.y, -0.42, deltaTime * 18);
      // Aerodynamic downward rake pitch
      chassis.rotation.x = THREE.MathUtils.lerp(chassis.rotation.x, 0.12, deltaTime * 16);
      chassis.scale.y = THREE.MathUtils.lerp(chassis.scale.y, 0.72, deltaTime * 18); // squashes low!
    } else {
      chassis.position.y = THREE.MathUtils.lerp(chassis.position.y, naturalBounce, deltaTime * 14);
      chassis.rotation.x = THREE.MathUtils.lerp(chassis.rotation.x, (speed / 40) * 0.03, deltaTime * 10);
      chassis.scale.y = THREE.MathUtils.lerp(chassis.scale.y, 1.0, deltaTime * 14);
    }

    // 5. Roof topper animation
    if (topperMesh) {
      topperMesh.rotation.y += deltaTime * (isDucking ? 6.0 : 2.5);
    }
  }
}
