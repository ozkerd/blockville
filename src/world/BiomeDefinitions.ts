import * as THREE from 'three';
import { BiomeType } from '../types/game';
import { ToyMaterialFactory } from '../rendering/ToyMaterials';

export interface BiomeVisuals {
  name: string;
  roadColor: number;
  curbColor: number;
  sidewalkColor: number;
  skyColor: number;
  fogColor: number;
  groundColor: number;
  buildSceneryProp: (side: 'left' | 'right', index: number) => THREE.Group;
  buildWideBackdrop: (side: 'left' | 'right', index: number) => THREE.Group;
}

export class BiomeDefinitions {
  public static getBiome(type: BiomeType): BiomeVisuals {
    switch (type) {
      case 'boardwalk':
        return this.boardwalkBiome;
      case 'plaza':
        return this.plazaBiome;
      case 'forest':
        return this.forestBiome;
      case 'pier':
        return this.pierBiome;
      case 'cyber':
        return this.cyberBiome;
      case 'candy':
        return this.candyBiome;
    }
  }

  // =========================================================================
  // 1. HEARTLAKE BOARDWALK (Seaside Town, Beach, Ocean & Realistic Palm Trees)
  // =========================================================================
  private static boardwalkBiome: BiomeVisuals = {
    name: 'Heartlake Boardwalk',
    roadColor: 0xFFE082,      // Warm beach boardwalk yellow
    curbColor: 0x4DD0E1,      // Teal cyan railing
    sidewalkColor: 0xFFF9C4,  // Golden sandy boardwalk edge
    skyColor: 0x81D4FA,       // Tropical azure sky
    fogColor: 0x81D4FA,
    groundColor: 0xFFF59D,    // Golden beach sand

    buildSceneryProp: (side, idx) => {
      const group = new THREE.Group();
      const xSign = side === 'left' ? -1 : 1;
      const typeChoice = idx % 5;

      if (typeChoice === 0) {
        // --- REALISTIC DETAILED COCONUT PALM TREE ---
        const trunkMat = ToyMaterialFactory.getPlastic(0x795548, 0.35, 0.0);
        const leafMatDark = ToyMaterialFactory.getPlastic(0x2E7D32, 0.22, 0.0);
        const leafMatBright = ToyMaterialFactory.getPlastic(0x43A047, 0.22, 0.0);
        const coconutMat = ToyMaterialFactory.getPlastic(0x4E342E, 0.3, 0.0);

        // Curved segmented trunk (7 segments that gently arc toward the road/ocean)
        let curX = 0;
        let curY = 0;
        const trunkCurve = (Math.sin(idx * 0.7) * 0.12 + 0.15) * xSign;

        for (let i = 0; i < 7; i++) {
          const segRadiusBottom = 0.36 - i * 0.02;
          const segRadiusTop = 0.33 - i * 0.02;
          const segHeight = 0.75;
          const seg = new THREE.Mesh(
            new THREE.CylinderGeometry(segRadiusTop, segRadiusBottom, segHeight, 10),
            trunkMat
          );
          curY += segHeight * 0.5;
          curX += Math.sin(i * 0.4) * trunkCurve;
          seg.position.set(curX, curY, 0);
          seg.rotation.z = -trunkCurve * (i * 0.18);
          seg.castShadow = true;
          group.add(seg);
          curY += segHeight * 0.5;

          // Bark ring stud ring
          const ring = new THREE.Mesh(
            new THREE.TorusGeometry(segRadiusTop + 0.02, 0.04, 6, 12),
            trunkMat
          );
          ring.position.set(curX, curY, 0);
          ring.rotation.x = Math.PI / 2;
          group.add(ring);
        }

        // 3 Coconuts clustered right under crown
        [-0.18, 0, 0.18].forEach((cX, cIdx) => {
          const nut = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), coconutMat);
          nut.position.set(curX + cX, curY - 0.2, (cIdx % 2 === 0 ? 0.16 : -0.16));
          group.add(nut);
        });

        // 10 Lush Drooping Palm Fronds in 2 tiers
        const frondCount = 10;
        for (let f = 0; f < frondCount; f++) {
          const angle = (f * Math.PI * 2) / frondCount + (idx * 0.2);
          const isUpper = f % 2 === 0;
          const mat = isUpper ? leafMatBright : leafMatDark;

          const frondGroup = new THREE.Group();
          frondGroup.position.set(curX, curY, 0);
          frondGroup.rotation.y = angle;

          const leafLen = isUpper ? 2.4 : 1.9;
          const droopAngle = isUpper ? 0.42 : 0.68;

          const frondLeaf = ToyMaterialFactory.createBlock(0.38, 0.06, leafLen, mat);
          frondLeaf.position.set(0, 0, leafLen * 0.45);
          frondLeaf.rotation.x = droopAngle;
          frondGroup.add(frondLeaf);

          const tip = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.8, 4), mat);
          tip.position.set(0, -Math.sin(droopAngle) * leafLen * 0.45, leafLen * 0.85);
          tip.rotation.x = droopAngle + 0.3;
          frondGroup.add(tip);

          group.add(frondGroup);
        }
      } else if (typeChoice === 1) {
        // --- SEASIDE LIFEGUARD TOWER ---
        const woodMat = ToyMaterialFactory.getPlastic(0xFFFFFF, 0.2, 0.0);
        const redMat = ToyMaterialFactory.getPlastic(0xD50000, 0.2, 0.0);
        const roofMat = ToyMaterialFactory.getPlastic(0x00E5FF, 0.2, 0.0);

        const stiltH = 2.4;
        [-0.7, 0.7].forEach((sx) => {
          [-0.7, 0.7].forEach((sz) => {
            const stilt = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, stiltH, 8), ToyMaterialFactory.getPlastic(0x8D6E63, 0.3, 0.0));
            stilt.position.set(sx, stiltH * 0.5, sz);
            group.add(stilt);
          });
        });

        const cabin = ToyMaterialFactory.createBlock(1.8, 1.4, 1.8, woodMat);
        cabin.position.y = stiltH + 0.7;
        group.add(cabin);

        const stripe = ToyMaterialFactory.createBlock(1.85, 0.25, 1.85, redMat);
        stripe.position.y = stiltH + 0.7;
        group.add(stripe);

        const windowPane = ToyMaterialFactory.createBlock(1.2, 0.5, 1.9, ToyMaterialFactory.getPlastic(0x80D8FF, 0.1, 0.0));
        windowPane.position.y = stiltH + 0.85;
        group.add(windowPane);

        const roof = new THREE.Mesh(new THREE.ConeGeometry(1.6, 0.9, 4), roofMat);
        roof.position.y = stiltH + 1.85;
        roof.rotation.y = Math.PI / 4;
        group.add(roof);

        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.09, 8, 16), redMat);
        ring.position.set(xSign * 0.95, stiltH + 0.7, 0);
        ring.rotation.y = Math.PI / 2;
        group.add(ring);
      } else if (typeChoice === 2) {
        // --- 2-STORY PASTEL SEASIDE COTTAGE ---
        const wallColors = [0xF8BBD0, 0xB2DFDB, 0xFFF9C4, 0xD1C4E9];
        const wallMat = ToyMaterialFactory.getPlastic(wallColors[idx % wallColors.length], 0.25, 0.0);
        const trimMat = ToyMaterialFactory.WhitePlastic;
        const roofMat = ToyMaterialFactory.getPlastic(0xFF7043, 0.25, 0.0);

        const bldg = ToyMaterialFactory.createBlock(3.0, 3.8, 2.6, wallMat);
        bldg.position.y = 1.9;
        group.add(bldg);

        const balcony = ToyMaterialFactory.createBlock(2.2, 0.15, 0.8, trimMat);
        balcony.position.set(0, 2.1, xSign * -1.5);
        group.add(balcony);

        const rail = ToyMaterialFactory.createBlock(2.2, 0.5, 0.08, trimMat);
        rail.position.set(0, 2.4, xSign * -1.85);
        group.add(rail);

        const flowerbox = ToyMaterialFactory.createBlock(1.4, 0.25, 0.35, ToyMaterialFactory.getPlastic(0x8D6E63, 0.3, 0.0));
        flowerbox.position.set(0, 0.9, xSign * -1.4);
        group.add(flowerbox);

        [-0.45, 0, 0.45].forEach((fx) => {
          const flw = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 6), ToyMaterialFactory.getPlastic(0xFF4081, 0.15, 0.0));
          flw.position.set(fx, 1.1, xSign * -1.4);
          group.add(flw);
        });

        const roof = new THREE.Mesh(new THREE.ConeGeometry(2.5, 1.4, 4), roofMat);
        roof.position.y = 4.5;
        roof.rotation.y = Math.PI / 4;
        group.add(roof);
      } else if (typeChoice === 3) {
        // --- SEASIDE GELATO & SMOOTHIE CAFE ---
        const kioskMat = ToyMaterialFactory.getPlastic(0xFF80AB, 0.2, 0.0);
        const awningMat1 = ToyMaterialFactory.getPlastic(0xFFEB3B, 0.2, 0.0);
        const awningMat2 = ToyMaterialFactory.WhitePlastic;

        const counter = ToyMaterialFactory.createBlock(2.6, 1.4, 1.8, kioskMat);
        counter.position.y = 0.7;
        group.add(counter);

        const top = ToyMaterialFactory.createBlock(2.8, 0.12, 2.0, ToyMaterialFactory.getPlastic(0x4DD0E1, 0.2, 0.0));
        top.position.y = 1.42;
        group.add(top);

        for (let a = 0; a < 5; a++) {
          const mat = a % 2 === 0 ? awningMat1 : awningMat2;
          const stripe = ToyMaterialFactory.createBlock(0.5, 0.15, 1.8, mat);
          stripe.position.set(-1.0 + a * 0.5, 2.3, 0);
          stripe.rotation.x = 0.2;
          group.add(stripe);
        }

        const cone = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.8, 8), ToyMaterialFactory.getPlastic(0xD7CCC8, 0.3, 0.0));
        cone.rotation.z = Math.PI;
        cone.position.set(0, 2.7, 0);
        group.add(cone);

        const iceCream = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 10), ToyMaterialFactory.getPlastic(0x00E5FF, 0.15, 0.0));
        iceCream.position.set(0, 3.2, 0);
        group.add(iceCream);

        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.2, 6), ToyMaterialFactory.Chrome);
        pole.position.set(xSign * 1.6, 1.1, 0);
        group.add(pole);

        const umbrella = new THREE.Mesh(new THREE.ConeGeometry(1.2, 0.5, 10), ToyMaterialFactory.getPlastic(0xFF4081, 0.2, 0.0));
        umbrella.position.set(xSign * 1.6, 2.2, 0);
        group.add(umbrella);
      } else {
        // --- SURFBOARD RACK & BEACH LOUNGERS ---
        const rackMat = ToyMaterialFactory.getPlastic(0x5D4037, 0.35, 0.0);
        const rack = ToyMaterialFactory.createBlock(2.0, 1.1, 0.2, rackMat);
        rack.position.y = 0.55;
        group.add(rack);

        const surfColors = [0x00E5FF, 0xFF1744, 0x76FF03];
        [-0.6, 0, 0.6].forEach((sx, sIdx) => {
          const board = ToyMaterialFactory.createBlock(0.38, 2.2, 0.08, ToyMaterialFactory.getPlastic(surfColors[sIdx], 0.15, 0.0));
          board.position.set(sx, 1.1, 0.15);
          board.rotation.z = (sIdx - 1) * 0.08;
          group.add(board);
        });

        const chair = ToyMaterialFactory.createBlock(0.8, 0.45, 1.4, ToyMaterialFactory.getPlastic(0xFFD54F, 0.2, 0.0));
        chair.position.set(xSign * 1.5, 0.22, 0);
        chair.rotation.x = -0.15;
        group.add(chair);
      }

      return group;
    },

    buildWideBackdrop: (side, idx) => {
      const group = new THREE.Group();
      if (side === 'right') {
        // --- RIGHT SIDE: OPEN OCEAN & TOY SAILBOATS ---
        const boatChoice = idx % 2;
        if (boatChoice === 0) {
          // Classic Toy Sailboat bobbing in the bay
          const hull = ToyMaterialFactory.createBlock(1.6, 0.7, 3.8, ToyMaterialFactory.WhitePlastic);
          hull.position.y = 0.25;
          group.add(hull);

          const deck = ToyMaterialFactory.createBlock(1.4, 0.08, 3.5, ToyMaterialFactory.getPlastic(0xD7CCC8, 0.4, 0.0));
          deck.position.y = 0.62;
          group.add(deck);

          const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 4.5, 8), ToyMaterialFactory.Chrome);
          mast.position.set(0, 2.8, 0);
          group.add(mast);

          const sailShape = new THREE.Shape();
          sailShape.moveTo(0, 0);
          sailShape.lineTo(0, 3.8);
          sailShape.lineTo(2.0, 0.4);
          sailShape.closePath();
          const sailGeom = new THREE.ShapeGeometry(sailShape);
          const sailColors = [0xFF4081, 0x00E5FF, 0xFFEA00];
          const sailMat = ToyMaterialFactory.getPlastic(sailColors[idx % sailColors.length], 0.15, 0.0);
          const sail = new THREE.Mesh(sailGeom, sailMat);
          sail.position.set(0.04, 0.9, -0.2);
          sail.rotation.y = 0.25;
          group.add(sail);
        } else {
          // Ocean Navigation Buoy with bright flashing yellow beacon
          const buoy = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.8, 8), ToyMaterialFactory.getPlastic(0xFF1744, 0.2, 0.0));
          buoy.position.y = 0.9;
          group.add(buoy);

          const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 8), ToyMaterialFactory.getPlastic(0xFFEB3B, 0.1, 0.0));
          beacon.position.y = 1.95;
          group.add(beacon);
        }
      } else {
        // --- LEFT SIDE: TALL RESORT HOTELS & COASTAL TOWNHOUSES ---
        const bldgColors = [0xFF80AB, 0x80D8FF, 0xB388FF, 0xA7FFEB];
        const facadeMat = ToyMaterialFactory.getPlastic(bldgColors[idx % bldgColors.length], 0.2, 0.0);
        const windowMat = ToyMaterialFactory.GlassWindshield;

        const height = 9.5 + (idx % 3) * 2.5;
        const bldg = ToyMaterialFactory.createBlock(5.6, height, 5.0, facadeMat);
        bldg.position.y = height * 0.5;
        group.add(bldg);

        for (let floor = 1; floor <= 4; floor++) {
          [-1.6, 0, 1.6].forEach((wx) => {
            const win = ToyMaterialFactory.createBlock(0.85, 1.1, 0.1, windowMat);
            win.position.set(wx, floor * 1.9, 2.52);
            group.add(win);
          });
        }

        const umbrella = new THREE.Mesh(new THREE.ConeGeometry(1.6, 0.6, 10), ToyMaterialFactory.getPlastic(0xFF5252, 0.2, 0.0));
        umbrella.position.set(0, height + 0.8, 0);
        group.add(umbrella);
      }
      return group;
    }
  };

  // =========================================================================
  // 2. DOWNTOWN PLAZA (Lego High-Rises, Streetfront Boutiques & Urban Avenues)
  // =========================================================================
  private static plazaBiome: BiomeVisuals = {
    name: 'Downtown Plaza',
    roadColor: 0x90A4AE,      // Smooth cobblestone asphalt
    curbColor: 0xFFD54F,      // Gold curb
    sidewalkColor: 0xCFD8DC,  // Plaza stone paving
    skyColor: 0x64B5F6,       // Clear daylight blue
    fogColor: 0x64B5F6,
    groundColor: 0x81C784,    // Park lawns

    buildSceneryProp: (side, idx) => {
      const group = new THREE.Group();
      const xSign = side === 'left' ? -1 : 1;
      const typeChoice = idx % 5;

      if (typeChoice === 0) {
        // --- 4-STORY LEGO SKYSCRAPER ---
        const bldgColors = [0x3949AB, 0x00897B, 0x5E35B1, 0x37474F];
        const facadeMat = ToyMaterialFactory.getPlastic(bldgColors[idx % bldgColors.length], 0.25, 0.0);
        const windowMat = ToyMaterialFactory.getPlastic(0x80D8FF, 0.1, 0.0);
        const corniceMat = ToyMaterialFactory.WhitePlastic;

        const height = 7.5;
        const bldg = ToyMaterialFactory.createBlock(3.4, height, 2.8, facadeMat);
        bldg.position.y = height * 0.5;
        group.add(bldg);

        for (let row = 0; row < 4; row++) {
          [-0.9, 0, 0.9].forEach((wx) => {
            const win = ToyMaterialFactory.createBlock(0.65, 0.95, 0.1, windowMat);
            win.position.set(wx, 1.4 + row * 1.5, xSign * -1.42);
            group.add(win);
          });
        }

        const cornice = ToyMaterialFactory.createBlock(3.6, 0.35, 3.0, corniceMat);
        cornice.position.y = height + 0.15;
        group.add(cornice);

        const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.2, 12), ToyMaterialFactory.getPlastic(0x8D6E63, 0.3, 0.0));
        tank.position.set(0.6, height + 0.9, 0);
        group.add(tank);
      } else if (typeChoice === 1) {
        // --- GRAND CLOCK TOWER / CIVIC SPIRE ---
        const stoneMat = ToyMaterialFactory.getPlastic(0xBA68C8, 0.25, 0.0);
        const roofMat = ToyMaterialFactory.getPlastic(0xFF7043, 0.2, 0.0);

        const base = ToyMaterialFactory.createBlock(2.6, 5.5, 2.6, stoneMat);
        base.position.y = 2.75;
        group.add(base);

        const clock = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.12, 16), ToyMaterialFactory.WhitePlastic);
        clock.rotation.x = Math.PI / 2;
        clock.position.set(0, 4.4, xSign * -1.35);
        group.add(clock);

        const hands = ToyMaterialFactory.createBlock(0.08, 0.45, 0.15, ToyMaterialFactory.getPlastic(0x212121, 0.2, 0.0));
        hands.position.set(0, 4.5, xSign * -1.4);
        group.add(hands);

        const roof = new THREE.Mesh(new THREE.ConeGeometry(2.0, 2.6, 4), roofMat);
        roof.position.y = 6.8;
        roof.rotation.y = Math.PI / 4;
        group.add(roof);

        const vane = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), ToyMaterialFactory.GoldStar);
        vane.position.y = 8.2;
        group.add(vane);
      } else if (typeChoice === 2) {
        // --- BOUTIQUE STOREFRONT & BISTRO CAFE ---
        const shopMat = ToyMaterialFactory.getPlastic(0xEC407A, 0.25, 0.0);
        const awningMat = ToyMaterialFactory.getPlastic(0x00E5FF, 0.18, 0.0);

        const shop = ToyMaterialFactory.createBlock(3.2, 3.6, 2.4, shopMat);
        shop.position.y = 1.8;
        group.add(shop);

        const display = ToyMaterialFactory.createBlock(2.2, 1.4, 0.1, ToyMaterialFactory.getPlastic(0x80D8FF, 0.1, 0.0));
        display.position.set(0, 1.2, xSign * -1.22);
        group.add(display);

        const awning = ToyMaterialFactory.createBlock(2.6, 0.35, 1.2, awningMat);
        awning.position.set(0, 2.1, xSign * -1.6);
        awning.rotation.x = 0.2;
        group.add(awning);

        const table = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.65, 10), ToyMaterialFactory.Chrome);
        table.position.set(xSign * 1.6, 0.32, 0);
        group.add(table);

        const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.18, 8), ToyMaterialFactory.WhitePlastic);
        cup.position.set(xSign * 1.6, 0.74, 0);
        group.add(cup);
      } else if (typeChoice === 3) {
        // --- ORNATE STREETLAMP & BLOOMING PLANTER ---
        const ironMat = ToyMaterialFactory.getPlastic(0x263238, 0.2, 0.0);
        const lampMat = ToyMaterialFactory.getPlastic(0xFFEB3B, 0.1, 0.0);

        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 3.8, 8), ironMat);
        pole.position.y = 1.9;
        group.add(pole);

        [-0.55, 0.55].forEach((lx) => {
          const arm = ToyMaterialFactory.createBlock(0.6, 0.08, 0.08, ironMat);
          arm.position.set(lx * 0.5, 3.6, 0);
          group.add(arm);

          const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 10), lampMat);
          lantern.position.set(lx, 3.45, 0);
          group.add(lantern);

          const pot = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.25, 6), ToyMaterialFactory.getPlastic(0x8D6E63, 0.3, 0.0));
          pot.position.set(lx, 3.1, 0);
          group.add(pot);
        });

        const planter = ToyMaterialFactory.createBlock(1.4, 0.35, 1.4, ToyMaterialFactory.getPlastic(0x78909C, 0.3, 0.0));
        planter.position.y = 0.18;
        group.add(planter);

        const flower = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), ToyMaterialFactory.getPlastic(0xE91E63, 0.2, 0.0));
        flower.position.y = 0.45;
        group.add(flower);
      } else {
        // --- BUS STOP SHELTER & FIRE HYDRANT ---
        const frameMat = ToyMaterialFactory.getPlastic(0x1976D2, 0.2, 0.0);
        const glassMat = ToyMaterialFactory.getPlastic(0x80D8FF, 0.1, 0.0);

        const roof = ToyMaterialFactory.createBlock(2.4, 0.12, 1.4, frameMat);
        roof.position.set(0, 2.4, 0);
        group.add(roof);

        const backGlass = ToyMaterialFactory.createBlock(2.2, 2.2, 0.08, glassMat);
        backGlass.position.set(0, 1.2, xSign * -0.6);
        group.add(backGlass);

        const bench = ToyMaterialFactory.createBlock(1.8, 0.4, 0.45, ToyMaterialFactory.getPlastic(0x5D4037, 0.3, 0.0));
        bench.position.set(0, 0.25, xSign * -0.2);
        group.add(bench);

        const hydrant = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.7, 8), ToyMaterialFactory.getPlastic(0xD50000, 0.2, 0.0));
        hydrant.position.set(xSign * 1.6, 0.35, 0.5);
        group.add(hydrant);
      }

      return group;
    },

    buildWideBackdrop: (_side, idx) => {
      const group = new THREE.Group();
      // Towering 6 to 12 story high-rise Lego Skyscraper
      const colors = [0x1A237E, 0x004D40, 0x311B92, 0x263238, 0xB71C1C];
      const facade = ToyMaterialFactory.getPlastic(colors[idx % colors.length], 0.2, 0.0);
      const glass = ToyMaterialFactory.getPlastic(0x80D8FF, 0.1, 0.0);

      const height = 12.0 + (idx % 4) * 3.5;
      const tower = ToyMaterialFactory.createBlock(6.5, height, 5.5, facade);
      tower.position.y = height * 0.5;
      group.add(tower);

      // Windows grid
      for (let f = 1; f < Math.floor(height / 2.2); f++) {
        [-2.0, 0, 2.0].forEach((wx) => {
          const w = ToyMaterialFactory.createBlock(1.1, 1.2, 0.1, glass);
          w.position.set(wx, f * 2.2, 2.8);
          group.add(w);
        });
      }

      // Rooftop Spire Antenna or Helipad
      const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.15, 4.5, 8), ToyMaterialFactory.Chrome);
      spire.position.set(0, height + 2.25, 0);
      group.add(spire);

      return group;
    }
  };

  // =========================================================================
  // 3. PINECREST FOREST (Whispering Woods, Log Cabins, Streams & Pine Trees)
  // =========================================================================
  private static forestBiome: BiomeVisuals = {
    name: 'Pinecrest Forest',
    roadColor: 0x8D6E63,      // Rustic forest trail / dirt-and-stone brown
    curbColor: 0x5D4037,      // Stacked timber log curbs
    sidewalkColor: 0xA1887F,  // Pine needle mulch path
    skyColor: 0x80CBC4,       // Misty emerald morning sky
    fogColor: 0x80CBC4,
    groundColor: 0x2E7D32,    // Lush deep forest moss

    buildSceneryProp: (side, idx) => {
      const group = new THREE.Group();
      const xSign = side === 'left' ? -1 : 1;
      const typeChoice = idx % 5;

      if (typeChoice === 0 || typeChoice === 3) {
        // --- LAYERED ALPINE PINE TREE ---
        const trunkMat = ToyMaterialFactory.getPlastic(0x4E342E, 0.35, 0.0);
        const needleMat1 = ToyMaterialFactory.getPlastic(0x1B5E20, 0.25, 0.0); // Deep spruce
        const needleMat2 = ToyMaterialFactory.getPlastic(0x2E7D32, 0.25, 0.0); // Forest green
        const needleMat3 = ToyMaterialFactory.getPlastic(0x43A047, 0.25, 0.0); // Fresh pine

        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 5.5, 10), trunkMat);
        trunk.position.y = 2.75;
        trunk.castShadow = true;
        group.add(trunk);

        const tiers = [
          { y: 3.2, r: 2.1, h: 1.6, mat: needleMat1 },
          { y: 4.2, r: 1.7, h: 1.5, mat: needleMat2 },
          { y: 5.1, r: 1.3, h: 1.4, mat: needleMat2 },
          { y: 5.9, r: 0.8, h: 1.3, mat: needleMat3 }
        ];

        tiers.forEach((t) => {
          const cone = new THREE.Mesh(new THREE.ConeGeometry(t.r, t.h, 8), t.mat);
          cone.position.y = t.y;
          cone.castShadow = true;
          group.add(cone);
        });
      } else if (typeChoice === 1) {
        // --- FORESTER TIMBER LOG CABIN ---
        const logMat = ToyMaterialFactory.getPlastic(0x6D4C41, 0.35, 0.0);
        const roofMat = ToyMaterialFactory.getPlastic(0x3E2723, 0.35, 0.0);
        const chimneyMat = ToyMaterialFactory.getPlastic(0x78909C, 0.3, 0.0);

        const cabin = ToyMaterialFactory.createBlock(3.2, 2.6, 2.6, logMat);
        cabin.position.y = 1.3;
        group.add(cabin);

        const roof = new THREE.Mesh(new THREE.ConeGeometry(2.6, 1.6, 4), roofMat);
        roof.position.y = 3.4;
        roof.rotation.y = Math.PI / 4;
        group.add(roof);

        const chimney = ToyMaterialFactory.createBlock(0.6, 3.2, 0.6, chimneyMat);
        chimney.position.set(0.9, 2.6, 0.6);
        group.add(chimney);

        [0, 0.4, 0.8].forEach((sY, sIdx) => {
          const smoke = new THREE.Mesh(new THREE.SphereGeometry(0.2 + sIdx * 0.08, 8, 8), ToyMaterialFactory.WhitePlastic);
          smoke.position.set(0.9 + Math.sin(sIdx) * 0.15, 4.4 + sY, 0.6);
          group.add(smoke);
        });

        const woodPile = ToyMaterialFactory.createBlock(1.2, 0.6, 0.6, ToyMaterialFactory.getPlastic(0x8D6E63, 0.35, 0.0));
        woodPile.position.set(xSign * 1.8, 0.3, 0);
        group.add(woodPile);
      } else if (typeChoice === 2) {
        // --- WOODLAND MOUNTAIN STREAM & FOOTBRIDGE ---
        const waterMat = ToyMaterialFactory.getPlastic(0x00E5FF, 0.1, 0.0);
        const bridgeMat = ToyMaterialFactory.getPlastic(0x5D4037, 0.3, 0.0);
        const stoneMat = ToyMaterialFactory.getPlastic(0x9E9E9E, 0.3, 0.0);

        const water = ToyMaterialFactory.createBlock(2.4, 0.08, 3.6, waterMat);
        water.position.set(0, 0.04, 0);
        group.add(water);

        [-0.8, 0.2, 0.7].forEach((px, pIdx) => {
          const pebble = new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 6), stoneMat);
          pebble.position.set(px, 0.12, (pIdx - 1) * 0.8);
          pebble.scale.set(1.4, 0.6, 1.1);
          group.add(pebble);
        });

        const bridge = ToyMaterialFactory.createBlock(1.2, 0.2, 2.2, bridgeMat);
        bridge.position.set(0, 0.35, 0);
        group.add(bridge);

        [-0.55, 0.55].forEach((hx) => {
          const rail = ToyMaterialFactory.createBlock(0.08, 0.45, 2.2, bridgeMat);
          rail.position.set(hx, 0.65, 0);
          group.add(rail);
        });
      } else {
        // --- SPLIT-RAIL FENCE, CAMPFIRE & MUSHROOM CLUSTERS ---
        const fenceMat = ToyMaterialFactory.getPlastic(0x6D4C41, 0.35, 0.0);

        const rail1 = ToyMaterialFactory.createBlock(0.12, 0.12, 3.2, fenceMat);
        rail1.position.set(0, 0.7, 0);
        group.add(rail1);

        const rail2 = ToyMaterialFactory.createBlock(0.12, 0.12, 3.2, fenceMat);
        rail2.position.set(0, 0.35, 0);
        group.add(rail2);

        [-1.4, 0, 1.4].forEach((postZ) => {
          const post = ToyMaterialFactory.createBlock(0.18, 0.9, 0.18, fenceMat);
          post.position.set(0, 0.45, postZ);
          group.add(post);
        });

        const mushMat = ToyMaterialFactory.getPlastic(0xFF1744, 0.15, 0.0);
        [-0.4, 0.3].forEach((mx, mIdx) => {
          const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.35, 8), ToyMaterialFactory.WhitePlastic);
          stem.position.set(mx, 0.18, 0.8 + mIdx * 0.3);
          group.add(stem);

          const cap = new THREE.Mesh(new THREE.SphereGeometry(0.24, 8, 8), mushMat);
          cap.position.set(mx, 0.36, 0.8 + mIdx * 0.3);
          cap.scale.set(1, 0.6, 1);
          group.add(cap);
        });
      }

      return group;
    },

    buildWideBackdrop: (_side, idx) => {
      const group = new THREE.Group();
      // Dense Alpine Pine Grove & Forest Chalet
      const choice = idx % 2;
      if (choice === 0) {
        // Cluster of 3 towering mountain pines
        const pineMat = ToyMaterialFactory.getPlastic(0x1B5E20, 0.3, 0.0);
        const trunkMat = ToyMaterialFactory.getPlastic(0x4E342E, 0.4, 0.0);

        [-2.4, 0, 2.4].forEach((px, pIdx) => {
          const h = 8.5 + pIdx * 1.5;
          const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.48, h, 8), trunkMat);
          trunk.position.set(px, h * 0.5, (pIdx % 2 === 0 ? 1.2 : -1.2));
          group.add(trunk);

          for (let t = 0; t < 5; t++) {
            const cone = new THREE.Mesh(new THREE.ConeGeometry(2.6 - t * 0.4, 2.4, 8), pineMat);
            cone.position.set(px, h * 0.38 + t * 1.5, (pIdx % 2 === 0 ? 1.2 : -1.2));
            group.add(cone);
          }
        });
      } else {
        // Mountain Chalet Lodge with smoking chimney
        const logMat = ToyMaterialFactory.getPlastic(0x5D4037, 0.4, 0.0);
        const roofMat = ToyMaterialFactory.getPlastic(0x37474F, 0.3, 0.0);
        const cabin = ToyMaterialFactory.createBlock(5.4, 3.6, 4.2, logMat);
        cabin.position.y = 1.8;
        group.add(cabin);

        const roof = new THREE.Mesh(new THREE.ConeGeometry(4.4, 2.5, 4), roofMat);
        roof.position.set(0, 4.6, 0);
        roof.rotation.y = Math.PI / 4;
        group.add(roof);

        const chimney = ToyMaterialFactory.createBlock(0.8, 4.4, 0.8, ToyMaterialFactory.getPlastic(0x78909C, 0.4, 0.0));
        chimney.position.set(1.9, 3.4, 0.8);
        group.add(chimney);
      }
      return group;
    }
  };

  // =========================================================================
  // 4. AMUSEMENT PIER (Neon Carnival, Rollercoaster Loops & Game Pavilions)
  // =========================================================================
  private static pierBiome: BiomeVisuals = {
    name: 'Amusement Pier',
    roadColor: 0x7E57C2,      // Deep carnival violet
    curbColor: 0x00E5FF,      // Electric cyan neon
    sidewalkColor: 0xBA68C8,  // Neon magenta-purple
    skyColor: 0x1A237E,       // Twilight carnival evening sky
    fogColor: 0x283593,
    groundColor: 0x0D47A1,    // Ocean shimmer

    buildSceneryProp: (side, idx) => {
      const group = new THREE.Group();
      const xSign = side === 'left' ? -1 : 1;
      const typeChoice = idx % 4;

      if (typeChoice === 0) {
        // --- FERRIS WHEEL SILHOUETTE ---
        const wheelMat = ToyMaterialFactory.getPlastic(0xFFD600, 0.15, 0.0);
        const rim = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.15, 8, 24), wheelMat);
        rim.position.y = 4.2;
        rim.rotation.y = xSign * 0.3;
        group.add(rim);

        const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.2, 12), ToyMaterialFactory.Chrome);
        hub.position.y = 4.2;
        group.add(hub);

        [-1.4, 1.4].forEach((lx) => {
          const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 4.8, 8), ToyMaterialFactory.getPlastic(0x37474F, 0.2, 0.0));
          leg.position.set(lx, 2.4, 0);
          leg.rotation.z = -lx * 0.18;
          group.add(leg);
        });
      } else if (typeChoice === 1) {
        // --- LOOP-THE-LOOP ROLLERCOASTER ---
        const loopMat = ToyMaterialFactory.getPlastic(0xFF1744, 0.15, 0.0);
        const loopTorus = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.2, 8, 24), loopMat);
        loopTorus.position.set(0, 3.0, 0);
        loopTorus.rotation.y = side === 'left' ? 0.3 : -0.3;
        group.add(loopTorus);

        [-1.8, 1.8].forEach((tx) => {
          const col = ToyMaterialFactory.createBlock(0.25, 3.2, 0.25, ToyMaterialFactory.WhitePlastic);
          col.position.set(tx, 1.6, 0);
          group.add(col);
        });
      } else if (typeChoice === 2) {
        // --- CARNIVAL GAME BOOTH WITH PLUSHIES ---
        const boothMat = ToyMaterialFactory.getPlastic(0x00E5FF, 0.18, 0.0);
        const booth = ToyMaterialFactory.createBlock(2.2, 2.4, 1.8, boothMat);
        booth.position.y = 1.2;
        group.add(booth);

        const marquee = ToyMaterialFactory.createBlock(2.6, 0.55, 0.2, ToyMaterialFactory.getPlastic(0xFFEB3B, 0.15, 0.0));
        marquee.position.set(0, 2.45, 0.95);
        group.add(marquee);

        const teddy = new THREE.Mesh(new THREE.SphereGeometry(0.42, 8, 8), ToyMaterialFactory.getPlastic(0x8D6E63, 0.3, 0.0));
        teddy.position.set(0, 1.4, 1.0);
        group.add(teddy);
      } else {
        // --- BALLOON CLUSTER & TICKET KIOSK ---
        const archPole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 4.2, 8), ToyMaterialFactory.WhitePlastic);
        archPole.position.y = 2.1;
        group.add(archPole);

        const balloonColors = [0xFFEB3B, 0x00E5FF, 0xFF1744, 0x76FF03, 0xE040FB];
        for (let b = 0; b < 5; b++) {
          const balloon = new THREE.Mesh(
            new THREE.SphereGeometry(0.38, 10, 10),
            ToyMaterialFactory.getPlastic(balloonColors[b], 0.12, 0.0)
          );
          balloon.position.set(
            Math.sin(b * 1.3) * 0.45,
            4.2 + (b * 0.25),
            Math.cos(b * 1.3) * 0.45
          );
          group.add(balloon);
        }
      }

      return group;
    },

    buildWideBackdrop: (side, idx) => {
      const group = new THREE.Group();
      // Glowing Carnival Ferris Wheel or Coaster Mountain
      const isWheel = idx % 2 === 0;
      if (isWheel) {
        const rim = new THREE.Mesh(new THREE.TorusGeometry(5.5, 0.22, 8, 30), ToyMaterialFactory.getPlastic(0xFFD600, 0.15, 0.0));
        rim.position.y = 7.0;
        rim.rotation.y = side === 'left' ? 0.35 : -0.35;
        group.add(rim);

        [-2.2, 2.2].forEach((lx) => {
          const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 8.0, 8), ToyMaterialFactory.getPlastic(0x37474F, 0.2, 0.0));
          leg.position.set(lx, 4.0, 0);
          leg.rotation.z = -lx * 0.15;
          group.add(leg);
        });
      } else {
        const tent = new THREE.Mesh(new THREE.ConeGeometry(4.2, 4.5, 10), ToyMaterialFactory.getPlastic(0xFF1744, 0.15, 0.0));
        tent.position.y = 2.25;
        group.add(tent);
      }
      return group;
    }
  };

  // =========================================================================
  // 5. CYBER CIRCUIT (High-Tech Grid, Neon Pillars & Server Hubs)
  // =========================================================================
  private static cyberBiome: BiomeVisuals = {
    name: 'Cyber Circuit',
    roadColor: 0x1A237E,      // Deep electric indigo
    curbColor: 0x00E676,      // Neon cyber mint
    sidewalkColor: 0x263238,  // Dark slate high-tech grid
    skyColor: 0x0D47A1,       // Dark cyber neon sky
    fogColor: 0x0D47A1,
    groundColor: 0x004D40,    // Dark circuit ground

    buildSceneryProp: (side, idx) => {
      const group = new THREE.Group();
      const typeChoice = idx % 3;

      if (typeChoice === 0) {
        // --- HOLOGRAPHIC DATA PILLAR ---
        const pillarMat = ToyMaterialFactory.getPlastic(0x00E5FF, 0.1, 0.0);
        const baseMat = ToyMaterialFactory.getPlastic(0x37474F, 0.2, 0.0);
        const base = ToyMaterialFactory.createBlock(1.6, 0.7, 1.6, baseMat);
        base.position.y = 0.35;
        group.add(base);

        const column = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 5.0, 6), pillarMat);
        column.position.y = 2.85;
        group.add(column);

        [3.5, 4.6].forEach((ry) => {
          const ring = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.08, 8, 16), ToyMaterialFactory.getPlastic(0x76FF03, 0.1, 0.0));
          ring.position.y = ry;
          ring.rotation.x = Math.PI / 2;
          group.add(ring);
        });
      } else if (typeChoice === 1) {
        // --- SPEED BOOSTER GATE TOWER ---
        const frame = ToyMaterialFactory.createBlock(0.9, 4.2, 0.9, ToyMaterialFactory.getPlastic(0xFF1744, 0.2, 0.0));
        frame.position.y = 2.1;
        group.add(frame);

        const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.0, 3), ToyMaterialFactory.getPlastic(0xFFFF00, 0.1, 0.0));
        arrow.position.set(0, 4.3, 0);
        arrow.rotation.z = side === 'left' ? -Math.PI / 2 : Math.PI / 2;
        group.add(arrow);
      } else {
        // --- HIGH-TECH SERVER NODE HUB ---
        const server = ToyMaterialFactory.createBlock(1.8, 2.8, 1.6, ToyMaterialFactory.getPlastic(0x424242, 0.25, 0.0));
        server.position.y = 1.4;
        group.add(server);

        [1.0, 1.7, 2.3].forEach((ly) => {
          const led = ToyMaterialFactory.createBlock(1.85, 0.15, 0.9, ToyMaterialFactory.getPlastic(0x00E5FF, 0.1, 0.0));
          led.position.set(0, ly, 0);
          group.add(led);
        });
      }

      return group;
    },

    buildWideBackdrop: (_side, idx) => {
      const group = new THREE.Group();
      // Giant Cyber Data Monolith with pulsing neon lines
      const monolith = ToyMaterialFactory.createBlock(4.5, 14.0 + (idx % 3) * 3, 4.5, ToyMaterialFactory.getPlastic(0x1A237E, 0.15, 0.0));
      monolith.position.y = 7.0;
      group.add(monolith);

      const neonSpire = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.2, 5.0, 6), ToyMaterialFactory.getPlastic(0x00E5FF, 0.1, 0.0));
      neonSpire.position.y = 16.5;
      group.add(neonSpire);
      return group;
    }
  };

  // =========================================================================
  // 6. CANDY WONDERLAND (Swirl Lollipop Trees, Gummy Bears & Cupcake Pavilions)
  // =========================================================================
  private static candyBiome: BiomeVisuals = {
    name: 'Candy Wonderland',
    roadColor: 0xF48FB1,      // Strawberry milk pink
    curbColor: 0xFFF59D,      // Banana cream yellow
    sidewalkColor: 0xCE93D8,  // Cotton candy lilac
    skyColor: 0xF8BBD0,       // Pastel sunset pink
    fogColor: 0xF8BBD0,
    groundColor: 0xFFCCBC,    // Peach sugar sand

    buildSceneryProp: (side, idx) => {
      const group = new THREE.Group();
      const typeChoice = idx % 3;

      if (typeChoice === 0) {
        // --- GIANT SWIRL LOLLIPOP TREE ---
        const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 4.0, 8), ToyMaterialFactory.WhitePlastic);
        stick.position.y = 2.0;
        group.add(stick);

        const candy = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.35, 18), ToyMaterialFactory.getPlastic(0xFF4081, 0.15, 0.0));
        candy.rotation.x = Math.PI / 2;
        candy.rotation.y = side === 'left' ? 0.3 : -0.3;
        candy.position.y = 4.0;
        group.add(candy);

        const swirl = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.38, 12), ToyMaterialFactory.WhitePlastic);
        swirl.rotation.x = Math.PI / 2;
        swirl.position.y = 4.0;
        group.add(swirl);
      } else if (typeChoice === 1) {
        // --- TRANSLUCENT GUMMY BEAR STATUE ---
        const gummyMat = ToyMaterialFactory.getPlastic(0x00E676, 0.15, 0.0);
        const bearBody = ToyMaterialFactory.createBlock(1.4, 2.0, 1.2, gummyMat);
        bearBody.position.y = 1.0;
        group.add(bearBody);

        const bearHead = new THREE.Mesh(new THREE.SphereGeometry(0.65, 10, 10), gummyMat);
        bearHead.position.y = 2.35;
        group.add(bearHead);

        [-0.45, 0.45].forEach((ex) => {
          const ear = new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 6), gummyMat);
          ear.position.set(ex, 2.9, 0);
          group.add(ear);
        });
      } else {
        // --- CUPCAKE PAVILION WITH CHERRY TOP ---
        const cone = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 0.9, 1.2, 12), ToyMaterialFactory.getPlastic(0xD7CCC8, 0.3, 0.0));
        cone.position.y = 0.6;
        group.add(cone);

        const frosting = new THREE.Mesh(new THREE.SphereGeometry(1.15, 12, 12), ToyMaterialFactory.getPlastic(0x80DEEA, 0.18, 0.0));
        frosting.position.y = 1.7;
        group.add(frosting);

        const cherry = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), ToyMaterialFactory.getPlastic(0xD50000, 0.1, 0.0));
        cherry.position.y = 2.8;
        group.add(cherry);
      }

      return group;
    },

    buildWideBackdrop: (_side, idx) => {
      const group = new THREE.Group();
      // Giant Swirl Lollipop Mountain / Sugar Cane Tower
      const h = 10.0 + (idx % 3) * 2;
      const cane = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, h, 12), ToyMaterialFactory.WhitePlastic);
      cane.position.y = h * 0.5;
      group.add(cane);

      const candyHead = new THREE.Mesh(new THREE.SphereGeometry(3.0, 12, 12), ToyMaterialFactory.getPlastic(0xFF4081, 0.15, 0.0));
      candyHead.position.y = h + 1.5;
      group.add(candyHead);
      return group;
    }
  };
}
