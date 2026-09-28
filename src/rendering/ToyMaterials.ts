import * as THREE from 'three';
import { ColorPaletteId } from '../types/game';

export interface PaletteColors {
  primary: number;
  secondary: number;
  accent: number;
  chassis: number;
  wheelRim: number;
  highlight: number;
}

export const PALETTES: Record<ColorPaletteId, PaletteColors> = {
  classic: {
    primary: 0xFF69B4,   // Pastel Hot Pink
    secondary: 0xFFF9E6, // Cream
    accent: 0x4DD0E1,    // Teal Cyan
    chassis: 0xBA68C8,   // Lilac Purple
    wheelRim: 0xFFD54F,  // Canary Yellow
    highlight: 0x00E676  // Mint Green
  },
  sunset: {
    primary: 0xFF7043,   // Coral Sunset Orange
    secondary: 0xFFD54F, // Golden Sun
    accent: 0xFF4081,    // Deep Pink
    chassis: 0x5D4037,   // Cocoa Brown
    wheelRim: 0xFFEB3B,  // Bright Lemon
    highlight: 0x26C6DA  // Light Teal
  },
  cyber: {
    primary: 0x00E676,   // Neon Cyber Mint
    secondary: 0x7C4DFF, // Deep Violet
    accent: 0x00E5FF,    // Electric Cyan
    chassis: 0x212121,   // Dark Slate
    wheelRim: 0xFF1744,  // Hot Neon Red
    highlight: 0xFFFF00  // Cyber Yellow
  },
  candy: {
    primary: 0xF06292,   // Strawberry Pink
    secondary: 0xFFF176, // Lemon Frosting
    accent: 0x81D4FA,    // Cotton Blue
    chassis: 0xB39DDB,   // Lavender
    wheelRim: 0xFF8A80,  // Soft Coral
    highlight: 0xFFFFFF  // White Gloss
  }
};

export class ToyMaterialFactory {
  private static materialCache = new Map<string, THREE.MeshStandardMaterial>();

  // Standard plastic toy material generator
  public static getPlastic(color: number | string, roughness = 0.18, metalness = 0.0): THREE.MeshStandardMaterial {
    const key = `${color}_${roughness}_${metalness}`;
    if (!this.materialCache.has(key)) {
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        roughness: roughness,
        metalness: metalness,
        flatShading: false
      });
      this.materialCache.set(key, mat);
    }
    return this.materialCache.get(key)!;
  }

  // Pre-configured toy colors
  public static readonly SkinTone = this.getPlastic(0xFFDBAC, 0.4, 0.0);
  public static readonly WhitePlastic = this.getPlastic(0xF8F9FA, 0.15, 0.0);
  public static readonly BlackRubber = this.getPlastic(0x1F2421, 0.8, 0.0);
  public static readonly Chrome = this.getPlastic(0xEEEEEE, 0.1, 0.85);
  public static readonly GoldStar = this.getPlastic(0xFFD700, 0.15, 0.1);
  public static readonly CyanGem = this.getPlastic(0x00E5FF, 0.1, 0.05);
  public static readonly RubyGem = this.getPlastic(0xFF1744, 0.1, 0.05);
  public static readonly GlassWindshield = new THREE.MeshPhysicalMaterial({
    color: 0x80D8FF,
    transparent: true,
    opacity: 0.65,
    roughness: 0.1,
    transmission: 0.6,
    ior: 1.4
  });

  // Reusable cylinder geometry for Lego studs
  private static studGeometry = new THREE.CylinderGeometry(0.18, 0.18, 0.08, 12);

  // Helper to attach realistic toy studs to a rectangular brick mesh
  public static addStuds(
    parent: THREE.Object3D,
    width: number,
    depth: number,
    topY: number,
    material: THREE.Material,
    cols = 2,
    rows = 2
  ): void {
    const xStep = cols > 1 ? width / (cols + 0.5) : 0;
    const zStep = rows > 1 ? depth / (rows + 0.5) : 0;
    const startX = cols > 1 ? -((cols - 1) * xStep) / 2 : 0;
    const startZ = rows > 1 ? -((rows - 1) * zStep) / 2 : 0;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const stud = new THREE.Mesh(this.studGeometry, material);
        stud.position.set(startX + c * xStep, topY + 0.04, startZ + r * zStep);
        stud.castShadow = true;
        stud.receiveShadow = true;
        parent.add(stud);
      }
    }
  }

  // Helper to create a beveled toy block
  public static createBlock(
    w: number,
    h: number,
    d: number,
    material: THREE.Material,
    castShadow = true
  ): THREE.Mesh {
    const geom = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geom, material);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = true;
    return mesh;
  }
}
