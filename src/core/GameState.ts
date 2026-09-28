import { CharacterId, VehicleId, ColorPaletteId, GameMode, StageConfig, RunStats, CharacterDef, VehicleDef, LevelDef } from '../types/game';

export const LEVEL_DEFS: LevelDef[] = [
  {
    levelNumber: 1,
    name: 'Heartlake Boardwalk',
    subtitle: 'Seaside Town, Beach & Palm Trees',
    targetDistance: 1800, // ~1.5 minutes at 19 m/s
    biome: 'boardwalk',
    baseSpeed: 19,
    obstacleDensity: 0.65,
    hasMovingRobots: false,
    rewardCoins: 150
  },
  {
    levelNumber: 2,
    name: 'Downtown Plaza',
    subtitle: 'Skyscrapers, Avenues & Boutiques',
    targetDistance: 2000, // ~1.5 minutes at 23 m/s
    biome: 'plaza',
    baseSpeed: 23,
    obstacleDensity: 0.85,
    hasMovingRobots: true,
    rewardCoins: 250
  },
  {
    levelNumber: 3,
    name: 'Pinecrest Forest',
    subtitle: 'Whispering Woods, Cabins & Streams',
    targetDistance: 2200, // ~1.5 minutes at 26 m/s
    biome: 'forest',
    baseSpeed: 26,
    obstacleDensity: 0.95,
    hasMovingRobots: true,
    rewardCoins: 350
  },
  {
    levelNumber: 4,
    name: 'Amusement Pier',
    subtitle: 'Neon Carnival & Rapid Dodges',
    targetDistance: 2400, // ~1.5 minutes at 29 m/s
    biome: 'pier',
    baseSpeed: 29,
    obstacleDensity: 1.1,
    hasMovingRobots: true,
    rewardCoins: 450
  },
  {
    levelNumber: 5,
    name: 'Cyber Circuit',
    subtitle: 'Electric Lasers & High Voltage',
    targetDistance: 2600, // ~1.5 minutes at 32 m/s
    biome: 'cyber',
    baseSpeed: 32,
    obstacleDensity: 1.25,
    hasMovingRobots: true,
    rewardCoins: 600
  },
  {
    levelNumber: 6,
    name: 'Candy Wonderland',
    subtitle: 'Sweet Chaos & Hyper Velocity',
    targetDistance: 2800, // ~1.5 minutes at 35 m/s
    biome: 'candy',
    baseSpeed: 35,
    obstacleDensity: 1.4,
    hasMovingRobots: true,
    rewardCoins: 800
  }
];

export const CHARACTER_DEFS: Record<CharacterId, CharacterDef> = {
  nova: {
    id: 'nova',
    name: 'Nova',
    title: 'The Maker',
    perk: '+10% Speed & Lane Agility',
    speedBonus: 1.10,
    vehicleDurationBonus: 1.0,
    magnetRangeBonus: 1.0
  },
  leo: {
    id: 'leo',
    name: 'Leo',
    title: 'The Baker',
    perk: '+20% Vehicle Ride Duration',
    speedBonus: 1.0,
    vehicleDurationBonus: 1.20,
    magnetRangeBonus: 1.0
  },
  skye: {
    id: 'skye',
    name: 'Skye',
    title: 'The Explorer',
    perk: '+35% Coin Magnet Pull Range',
    speedBonus: 1.0,
    vehicleDurationBonus: 1.0,
    magnetRangeBonus: 1.35
  }
};

export const VEHICLE_DEFS: Record<VehicleId, VehicleDef> = {
  van: {
    id: 'van',
    name: 'Sweet-Treat Van',
    title: 'Heavy Bumper Delivery',
    ability: 'Shield Bumper',
    description: 'Bumper shield smashes through crates and cones with burst debris!',
    hasBumperShield: true,
    hasMagnetAura: false,
    hasTurboShockwave: false,
    baseDurationSeconds: 20
  },
  buggy: {
    id: 'buggy',
    name: 'Neon Buggy',
    title: 'All-Terrain Cruiser',
    ability: 'Magnet Aura',
    description: 'Strong electromagnetic field pulls star coins across all 3 lanes!',
    hasBumperShield: false,
    hasMagnetAura: true,
    hasTurboShockwave: false,
    baseDurationSeconds: 20
  },
  scooter: {
    id: 'scooter',
    name: 'Eco Scooter',
    title: 'Retro Turbo Moped',
    ability: 'Turbo Shockwave',
    description: 'Turbo thrusters clear obstacles and grant speed bursts!',
    hasBumperShield: false,
    hasMagnetAura: false,
    hasTurboShockwave: true,
    baseDurationSeconds: 18
  }
};

export const STAGES: StageConfig[] = [
  {
    id: 1,
    name: 'Heartlake Stroll',
    targetDistance: 1500,
    targetCoins: 40,
    targetSmashes: 0,
    biome: 'boardwalk'
  },
  {
    id: 2,
    name: 'Sweet Smash Delivery',
    targetDistance: 3200,
    targetCoins: 90,
    targetSmashes: 5,
    biome: 'plaza'
  },
  {
    id: 3,
    name: 'Pier Turbo Cruise',
    targetDistance: 5000,
    targetCoins: 160,
    targetSmashes: 10,
    biome: 'pier'
  }
];

const STORAGE_KEY_BEST_DISTANCE = 'blockville_best_distance';
const STORAGE_KEY_BEST_SCORE = 'blockville_best_score';
const STORAGE_KEY_TOTAL_COINS = 'blockville_total_coins';
const STORAGE_KEY_CUSTOMIZATION = 'blockville_customization';

export class GameState {
  public mode: GameMode = 'endless';
  public currentStageIndex = 0;
  
  // Customization selection
  public characterId: CharacterId = 'nova';
  public vehicleId: VehicleId = 'van';
  public paletteId: ColorPaletteId = 'classic';

  // Run statistics
  public distance = 0;
  public starCoins = 0;
  public diamondGems = 0;
  public smashes = 0;
  public multiplier = 1;
  public speed = 18; // Base speed m/s
  public baseSpeed = 18;
  // Level Progression
  public currentLevel = 1;
  public levelDistance = 0;

  // Persisted statistics
  public bestDistance = 0;
  public bestScore = 0;
  public totalCoinsSaved = 0;

  constructor() {
    this.loadPersistedData();
  }

  private loadPersistedData(): void {
    try {
      this.bestDistance = parseFloat(localStorage.getItem(STORAGE_KEY_BEST_DISTANCE) || '0');
      this.bestScore = parseInt(localStorage.getItem(STORAGE_KEY_BEST_SCORE) || '0', 10);
      this.totalCoinsSaved = parseInt(localStorage.getItem(STORAGE_KEY_TOTAL_COINS) || '0', 10);

      const savedCust = localStorage.getItem(STORAGE_KEY_CUSTOMIZATION);
      if (savedCust) {
        const parsed = JSON.parse(savedCust);
        if (parsed.characterId && CHARACTER_DEFS[parsed.characterId as CharacterId]) {
          this.characterId = parsed.characterId;
        }
        if (parsed.vehicleId && VEHICLE_DEFS[parsed.vehicleId as VehicleId]) {
          this.vehicleId = parsed.vehicleId;
        }
        if (parsed.paletteId) {
          this.paletteId = parsed.paletteId;
        }
      }
    } catch {
      // LocalStorage not available or corrupted
    }
  }

  public savePersistedData(): void {
    try {
      localStorage.setItem(STORAGE_KEY_BEST_DISTANCE, this.bestDistance.toFixed(0));
      localStorage.setItem(STORAGE_KEY_BEST_SCORE, this.bestScore.toString());
      localStorage.setItem(STORAGE_KEY_TOTAL_COINS, this.totalCoinsSaved.toString());
      localStorage.setItem(
        STORAGE_KEY_CUSTOMIZATION,
        JSON.stringify({
          characterId: this.characterId,
          vehicleId: this.vehicleId,
          paletteId: this.paletteId
        })
      );
    } catch {
      // Ignore write errors
    }
  }

  public getCurrentLevelDef(): LevelDef {
    const idx = Math.min(this.currentLevel - 1, LEVEL_DEFS.length - 1);
    const base = LEVEL_DEFS[idx];
    if (this.currentLevel > LEVEL_DEFS.length) {
      // Dynamic infinite scaling past Level 5
      const extra = this.currentLevel - 5;
      return {
        levelNumber: this.currentLevel,
        name: `Hyper Zone ${this.currentLevel}`,
        subtitle: 'Ultimate Reflex Gauntlet',
        targetDistance: 500 + extra * 100,
        biome: LEVEL_DEFS[(this.currentLevel - 1) % LEVEL_DEFS.length].biome,
        baseSpeed: Math.min(42, 34 + extra * 1.5),
        obstacleDensity: 1.4,
        hasMovingRobots: true,
        rewardCoins: 250
      };
    }
    return base;
  }

  public resetRun(): void {
    this.distance = 0;
    this.starCoins = 0;
    this.diamondGems = 0;
    this.smashes = 0;
    this.currentLevel = 1;
    this.levelDistance = 0;
    this.multiplier = 1;
    this.baseSpeed = this.getCurrentLevelDef().baseSpeed * CHARACTER_DEFS[this.characterId].speedBonus;
    this.speed = this.baseSpeed;
  }

  public updateDistanceAndSpeed(deltaTime: number, speedBoost = 1.0): void {
    const levelDef = this.getCurrentLevelDef();
    this.baseSpeed = levelDef.baseSpeed * CHARACTER_DEFS[this.characterId].speedBonus;
    this.speed = this.baseSpeed * speedBoost;

    const deltaDist = this.speed * deltaTime;
    this.distance += deltaDist;
    this.levelDistance += deltaDist;
  }

  public checkLevelUp(): LevelDef | null {
    const currentDef = this.getCurrentLevelDef();
    if (this.levelDistance >= currentDef.targetDistance) {
      this.currentLevel++;
      this.levelDistance = 0;
      this.multiplier = Math.min(10, this.currentLevel);
      this.addCoins(currentDef.rewardCoins);
      return this.getCurrentLevelDef();
    }
    return null;
  }

  public addCoins(amount = 1): void {
    this.starCoins += amount * this.multiplier;
  }

  public addGems(amount = 1): void {
    this.diamondGems += amount;
  }

  public addSmash(): void {
    this.smashes++;
  }

  public calculateTotalScore(): number {
    return Math.floor(this.distance * 2 + this.starCoins * 15 + this.diamondGems * 100 + this.smashes * 50);
  }

  public finalizeRun(stageCompleted = false): RunStats {
    const finalScore = this.calculateTotalScore();
    const isNewDist = this.distance > this.bestDistance;
    const isNewScore = finalScore > this.bestScore;

    if (isNewDist) this.bestDistance = this.distance;
    if (isNewScore) this.bestScore = finalScore;

    this.totalCoinsSaved += this.starCoins;
    this.savePersistedData();

    return {
      distance: Math.floor(this.distance),
      starCoins: this.starCoins,
      gems: this.diamondGems,
      smashes: this.smashes,
      score: finalScore,
      isNewHighDistance: isNewDist,
      isNewHighScore: isNewScore,
      stageCompleted
    };
  }

  public getActiveStage(): StageConfig | null {
    if (this.mode !== 'stage') return null;
    return STAGES[this.currentStageIndex] || STAGES[0];
  }

  public checkStageCompletion(): boolean {
    const stage = this.getActiveStage();
    if (!stage) return false;

    return (
      this.distance >= stage.targetDistance &&
      this.starCoins >= stage.targetCoins &&
      this.smashes >= stage.targetSmashes
    );
  }

  public advanceStage(): { nextStage: StageConfig | null; rewardCoins: number } {
    const rewardCoins = (this.currentStageIndex + 1) * 250;
    this.addCoins(rewardCoins);
    this.multiplier = Math.min(10, this.multiplier + 1);

    this.currentStageIndex++;
    if (this.currentStageIndex < STAGES.length) {
      return {
        nextStage: STAGES[this.currentStageIndex],
        rewardCoins
      };
    } else {
      // Cleared all stages -> seamlessly transition into endless mode with high difficulty
      this.mode = 'endless';
      this.currentLevel = 4;
      return {
        nextStage: null,
        rewardCoins
      };
    }
  }
}
