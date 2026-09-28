export type CharacterId = 'nova' | 'leo' | 'skye';

export type VehicleId = 'van' | 'buggy' | 'scooter';

export type ColorPaletteId = 'classic' | 'sunset' | 'cyber' | 'candy';

export type GameMode = 'endless' | 'stage';

export type BiomeType = 'boardwalk' | 'plaza' | 'forest' | 'pier' | 'cyber' | 'candy';

export type PlayerMovementState = 'running' | 'jumping' | 'sliding' | 'mounting' | 'dismounting' | 'crashed';

export type DualMode = 'on_foot' | 'in_vehicle';

export type ObstacleType = 
  | 'low_barrier'      // Jump over
  | 'high_arch'        // Slide under
  | 'crate_stack'      // Breakable with vehicle shield or lethal on foot
  | 'traffic_cone'     // Breakable with vehicle shield
  | 'fountain_divider' // Must lane steer
  | 'roadblock'        // Heavy immovable - ejects vehicle or lethal on foot
  | 'laser_gate'       // High-voltage laser grid (slide under)
  | 'robot_patrol';    // Moving toy sweeper patrolling across lanes

export interface LevelDef {
  levelNumber: number;
  name: string;
  subtitle: string;
  targetDistance: number;
  biome: BiomeType;
  baseSpeed: number;
  obstacleDensity: number;
  hasMovingRobots: boolean;
  rewardCoins: number;
}

export type PickUpType = 
  | 'star_coin' 
  | 'diamond_gem' 
  | 'vehicle_key' 
  | 'heart_shield' 
  | 'toy_wrench' 
  | 'coin_magnet';

export interface StageConfig {
  id: number;
  name: string;
  targetDistance: number;
  targetCoins: number;
  targetSmashes: number;
  biome: BiomeType;
}

export interface RunStats {
  distance: number;
  starCoins: number;
  gems: number;
  smashes: number;
  score: number;
  isNewHighDistance: boolean;
  isNewHighScore: boolean;
  stageCompleted?: boolean;
}

export interface PlayerCustomization {
  characterId: CharacterId;
  vehicleId: VehicleId;
  paletteId: ColorPaletteId;
}

export interface CharacterDef {
  id: CharacterId;
  name: string;
  title: string;
  perk: string;
  speedBonus: number;
  vehicleDurationBonus: number;
  magnetRangeBonus: number;
}

export interface VehicleDef {
  id: VehicleId;
  name: string;
  title: string;
  ability: string;
  description: string;
  hasBumperShield: boolean;
  hasMagnetAura: boolean;
  hasTurboShockwave: boolean;
  baseDurationSeconds: number;
}
