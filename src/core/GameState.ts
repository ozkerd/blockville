import { CharacterId, VehicleId, ColorPaletteId, GameMode, StageConfig, RunStats, CharacterDef, VehicleDef, LevelDef } from '../types/game';

export const LEVEL_DEFS: LevelDef[] = [
  {
    levelNumber: 1,
    name: 'Sunburst Boardwalk',
    subtitle: 'Seaside Town, Beach & Palm Trees',
    targetDistance: 1440, // 20% shorter (was 1800m)
    biome: 'boardwalk',
    baseSpeed: 19,
    obstacleDensity: 0.65,
    hasMovingRobots: false,
    rewardCoins: 150
  },
  {
    levelNumber: 2,
    name: 'Downtown Plaza',
    subtitle: 'Rainy Avenues, Skyscrapers & Neon',
    targetDistance: 1600, // 20% shorter (was 2000m)
    biome: 'plaza',
    baseSpeed: 23,
    obstacleDensity: 0.85,
    hasMovingRobots: true,
    rewardCoins: 250
  },
  {
    levelNumber: 3,
    name: 'Pinecrest Forest',
    subtitle: 'Alpine Snow, Cabins & Mountain Woods',
    targetDistance: 1760, // 20% shorter (was 2200m)
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
    targetDistance: 1920, // 20% shorter (was 2400m)
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
    targetDistance: 2080, // 20% shorter (was 2600m)
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
    targetDistance: 2240, // 20% shorter (was 2800m)
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
    perk: '+15% Speed & Ultra Agility',
    speedBonus: 1.15,
    vehicleDurationBonus: 1.0,
    magnetRangeBonus: 1.0,
    hasPermanentMagnet: false,
    laneAgilityBonus: 1.35,
    smashMultiplier: 1.0,
    gemPrice: 0 // Free default
  },
  leo: {
    id: 'leo',
    name: 'Leo',
    title: 'The Baker',
    perk: '+35% Vehicle Fuel & 2x Smash Multiplier',
    speedBonus: 1.0,
    vehicleDurationBonus: 1.35,
    magnetRangeBonus: 1.0,
    hasPermanentMagnet: false,
    laneAgilityBonus: 1.0,
    smashMultiplier: 2.0,
    gemPrice: 10
  },
  skye: {
    id: 'skye',
    name: 'Skye',
    title: 'The Explorer',
    perk: '🧲 Permanent Magnet Aura (Always Pulls Coins!)',
    speedBonus: 1.05,
    vehicleDurationBonus: 1.0,
    magnetRangeBonus: 1.40,
    hasPermanentMagnet: true,
    laneAgilityBonus: 1.0,
    smashMultiplier: 1.0,
    gemPrice: 20
  }
};

export const VEHICLE_DEFS: Record<VehicleId, VehicleDef> = {
  van: {
    id: 'van',
    name: 'Sweet-Treat Van',
    title: 'Heavy Bumper Delivery',
    ability: 'Shield Bumper & Crash Armor',
    description: 'Bumper smashes crates & cones, and armor absorbs 1 heavy collision!',
    hasBumperShield: true,
    hasMagnetAura: false,
    hasTurboShockwave: false,
    absorbsRoadblocks: true,
    coinMultiplier: 1.0,
    speedMultiplier: 1.0,
    baseDurationSeconds: 22,
    gemPrice: 0 // Free default
  },
  buggy: {
    id: 'buggy',
    name: 'Neon Buggy',
    title: 'All-Terrain Cruiser',
    ability: '3-Lane Magnet & 2x Coins',
    description: 'Electromagnetic field pulls all coins across 3 lanes with 2x coin multiplier!',
    hasBumperShield: false,
    hasMagnetAura: true,
    hasTurboShockwave: false,
    absorbsRoadblocks: false,
    coinMultiplier: 2.0,
    speedMultiplier: 1.05,
    baseDurationSeconds: 20,
    gemPrice: 15
  },
  scooter: {
    id: 'scooter',
    name: 'Eco Scooter',
    title: 'Retro High-Speed Moped',
    ability: 'Max Velocity & Agile Cornering',
    description: '+25% speed velocity, extreme 35° leaning cornering & swift handling!',
    hasBumperShield: false,
    hasMagnetAura: false,
    hasTurboShockwave: false,
    absorbsRoadblocks: false,
    coinMultiplier: 1.0,
    speedMultiplier: 1.25,
    baseDurationSeconds: 18,
    gemPrice: 25
  }
};

export const STAGES: StageConfig[] = [
  {
    id: 1,
    name: 'Sunburst Stroll',
    targetDistance: 1200, // 20% shorter (was 1500m)
    targetCoins: 35,
    targetSmashes: 0,
    biome: 'boardwalk'
  },
  {
    id: 2,
    name: 'Sweet Smash Delivery',
    targetDistance: 2560, // 20% shorter (was 3200m)
    targetCoins: 75,
    targetSmashes: 5,
    biome: 'plaza'
  },
  {
    id: 3,
    name: 'Pier Turbo Cruise',
    targetDistance: 4000, // 20% shorter (was 5000m)
    targetCoins: 130,
    targetSmashes: 10,
    biome: 'pier'
  }
];

const STORAGE_KEY_BEST_DISTANCE = 'blockville_best_distance';
const STORAGE_KEY_BEST_SCORE = 'blockville_best_score';
const STORAGE_KEY_TOTAL_COINS = 'blockville_total_coins';
const STORAGE_KEY_TOTAL_GEMS = 'blockville_total_gems';
const STORAGE_KEY_UNLOCKED_CHARS = 'blockville_unlocked_chars';
const STORAGE_KEY_UNLOCKED_VEHS = 'blockville_unlocked_vehs';
const STORAGE_KEY_CUSTOMIZATION = 'blockville_customization';

export class GameState {
  public mode: GameMode = 'endless';
  public currentStageIndex = 0;
  
  // Customization selection
  public characterId: CharacterId = 'nova';
  public vehicleId: VehicleId = 'van';
  public paletteId: ColorPaletteId = 'classic';

  // Unlocked items
  public unlockedCharacters: Set<CharacterId> = new Set(['nova']);
  public unlockedVehicles: Set<VehicleId> = new Set(['van']);

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
  public totalGemsSaved = 15; // Starting bonus for exciting initial unlocks!

  constructor() {
    this.loadPersistedData();
  }

  private loadPersistedData(): void {
    try {
      this.bestDistance = parseFloat(localStorage.getItem(STORAGE_KEY_BEST_DISTANCE) || '0');
      this.bestScore = parseInt(localStorage.getItem(STORAGE_KEY_BEST_SCORE) || '0', 10);
      this.totalCoinsSaved = parseInt(localStorage.getItem(STORAGE_KEY_TOTAL_COINS) || '0', 10);
      
      const savedGems = localStorage.getItem(STORAGE_KEY_TOTAL_GEMS);
      if (savedGems !== null) {
        this.totalGemsSaved = parseInt(savedGems, 10);
      }

      const savedChars = localStorage.getItem(STORAGE_KEY_UNLOCKED_CHARS);
      if (savedChars) {
        const arr = JSON.parse(savedChars);
        if (Array.isArray(arr)) {
          arr.forEach((id) => this.unlockedCharacters.add(id as CharacterId));
        }
      }
      this.unlockedCharacters.add('nova'); // Always unlocked

      const savedVehs = localStorage.getItem(STORAGE_KEY_UNLOCKED_VEHS);
      if (savedVehs) {
        const arr = JSON.parse(savedVehs);
        if (Array.isArray(arr)) {
          arr.forEach((id) => this.unlockedVehicles.add(id as VehicleId));
        }
      }
      this.unlockedVehicles.add('van'); // Always unlocked

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
      localStorage.setItem(STORAGE_KEY_TOTAL_GEMS, this.totalGemsSaved.toString());
      localStorage.setItem(STORAGE_KEY_UNLOCKED_CHARS, JSON.stringify(Array.from(this.unlockedCharacters)));
      localStorage.setItem(STORAGE_KEY_UNLOCKED_VEHS, JSON.stringify(Array.from(this.unlockedVehicles)));
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

  public isCharacterUnlocked(id: CharacterId): boolean {
    return this.unlockedCharacters.has(id);
  }

  public isVehicleUnlocked(id: VehicleId): boolean {
    return this.unlockedVehicles.has(id);
  }

  public unlockCharacter(id: CharacterId): boolean {
    const def = CHARACTER_DEFS[id];
    if (!def) return false;
    if (this.unlockedCharacters.has(id)) return true;

    if (this.totalGemsSaved >= def.gemPrice) {
      this.totalGemsSaved -= def.gemPrice;
      this.unlockedCharacters.add(id);
      this.savePersistedData();
      return true;
    }
    return false;
  }

  public unlockVehicle(id: VehicleId): boolean {
    const def = VEHICLE_DEFS[id];
    if (!def) return false;
    if (this.unlockedVehicles.has(id)) return true;

    if (this.totalGemsSaved >= def.gemPrice) {
      this.totalGemsSaved -= def.gemPrice;
      this.unlockedVehicles.add(id);
      this.savePersistedData();
      return true;
    }
    return false;
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
    const mult = CHARACTER_DEFS[this.characterId]?.smashMultiplier || 1.0;
    this.smashes += mult;
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
    this.totalGemsSaved += this.diamondGems;
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
