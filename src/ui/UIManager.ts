import { GameState, VEHICLE_DEFS, CHARACTER_DEFS } from '../core/GameState';
import { PlayerController } from '../entities/PlayerController';
import { AudioManager } from '../core/AudioManager';
import { GarageView } from './GarageView';
import { RunStats } from '../types/game';

export class UIManager {
  private gameState: GameState;
  private player: PlayerController;
  private audioManager: AudioManager;
  public garageView: GarageView;

  // DOM Elements
  private hudScreen!: HTMLElement;
  private mainMenu!: HTMLElement;
  private garageScreen!: HTMLElement;
  private stageScreen!: HTMLElement;
  private instructionsScreen!: HTMLElement;
  private gameOverScreen!: HTMLElement;
  private pauseScreen!: HTMLElement;

  // Top Bar & Stats
  private btnSound!: HTMLElement;
  private btnPause!: HTMLElement;
  private biomeBanner!: HTMLElement;
  private starCount!: HTMLElement;
  private gemCount!: HTMLElement;

  // HUD Elements
  private distanceVal!: HTMLElement;
  private speedMeter!: HTMLElement;
  private multiplierBadge!: HTMLElement;
  private missionCard!: HTMLElement;
  private missionTitle!: HTMLElement;
  private missionProgressBar!: HTMLElement;
  private missionFraction!: HTMLElement;

  // Vehicle Meter
  private vehicleMeterContainer!: HTMLElement;
  private vehicleMeterName!: HTMLElement;
  private vehicleMeterAbility!: HTMLElement;
  private vehicleMeterFill!: HTMLElement;
  private vehicleTimerText!: HTMLElement;

  // Level HUD Elements
  private hudLevelBadge!: HTMLElement;
  private hudLevelName!: HTMLElement;
  private levelProgressBar!: HTMLElement;
  private levelFraction!: HTMLElement;
  private levelUpBanner!: HTMLElement;
  private levelUpSub!: HTMLElement;

  // Modals & Buttons
  private actionPrompt!: HTMLElement;
  private menuBestDistance!: HTMLElement;
  private menuBestScore!: HTMLElement;
  private btnHudBoost!: HTMLElement;
  private hudBoostBadge!: HTMLElement;

  // Callbacks
  public onStartGame: (mode: 'endless' | 'stage', stageIdx?: number) => void = () => {};
  public onPauseGame: () => void = () => {};
  public onResumeGame: () => void = () => {};
  public onRestartGame: () => void = () => {};
  public onTriggerBoost: () => void = () => {};
  public onQuitToMenu: () => void = () => {};

  constructor(gameState: GameState, player: PlayerController, audioManager: AudioManager) {
    this.gameState = gameState;
    this.player = player;
    this.audioManager = audioManager;

    this.cacheDOMElements();
    this.garageView = new GarageView(this.gameState, this.player, () => {
      this.closeGarage();
    });
    this.bindEvents();
    this.updateMenuStats();
  }

  private cacheDOMElements(): void {
    this.hudScreen = document.getElementById('hud-screen')!;
    this.mainMenu = document.getElementById('main-menu')!;
    this.garageScreen = document.getElementById('garage-screen')!;
    this.stageScreen = document.getElementById('stage-screen')!;
    this.instructionsScreen = document.getElementById('instructions-screen')!;
    this.gameOverScreen = document.getElementById('game-over-screen')!;
    this.pauseScreen = document.getElementById('pause-screen')!;

    this.btnSound = document.getElementById('btn-sound')!;
    this.btnPause = document.getElementById('btn-pause')!;
    this.biomeBanner = document.getElementById('biome-banner')!;
    this.starCount = document.getElementById('star-count')!;
    this.gemCount = document.getElementById('gem-count')!;

    this.distanceVal = document.getElementById('distance-value')!;
    this.speedMeter = document.getElementById('speed-meter')!;
    this.multiplierBadge = document.getElementById('multiplier-badge')!;

    // Level HUD
    this.hudLevelBadge = document.getElementById('hud-level-badge')!;
    this.hudLevelName = document.getElementById('hud-level-name')!;
    this.levelProgressBar = document.getElementById('level-progress-bar')!;
    this.levelFraction = document.getElementById('level-fraction')!;
    this.levelUpBanner = document.getElementById('level-up-banner')!;
    this.levelUpSub = document.getElementById('level-up-sub')!;

    this.missionCard = document.getElementById('mission-card')!;
    this.missionTitle = document.getElementById('mission-title')!;
    this.missionProgressBar = document.getElementById('mission-progress-bar')!;
    this.missionFraction = document.getElementById('mission-fraction')!;

    this.vehicleMeterContainer = document.getElementById('vehicle-meter-container')!;
    this.vehicleMeterName = document.getElementById('vehicle-meter-name')!;
    this.vehicleMeterAbility = document.getElementById('vehicle-meter-ability')!;
    this.vehicleMeterFill = document.getElementById('vehicle-meter-fill')!;
    this.vehicleTimerText = document.getElementById('vehicle-timer-text')!;

    this.actionPrompt = document.getElementById('action-prompt')!;
    this.menuBestDistance = document.getElementById('menu-best-distance')!;
    this.menuBestScore = document.getElementById('menu-best-score')!;
    this.btnHudBoost = document.getElementById('btn-hud-boost')!;
    this.hudBoostBadge = document.getElementById('hud-boost-badge')!;
  }

  private bindEvents(): void {
    // Sound Button
    this.btnSound.addEventListener('click', () => {
      const active = this.audioManager.toggleMute();
      this.btnSound.innerText = active ? '🔊' : '🔇';
    });

    // Pause Button
    this.btnPause.addEventListener('click', () => {
      this.showPauseModal();
    });

    // HUD Boost button (mobile tap or mouse click)
    this.btnHudBoost?.addEventListener('click', () => {
      this.onTriggerBoost();
    });

    // Main Menu: Play Endless
    document.getElementById('btn-play-endless')?.addEventListener('click', () => {
      this.onStartGame('endless');
    });

    // Main Menu: Stage Missions
    document.getElementById('btn-play-stages')?.addEventListener('click', () => {
      this.stageScreen.classList.remove('hidden');
    });

    // Stage select buttons
    document.querySelectorAll('.stage-item .btn-start-stage').forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.stageScreen.classList.add('hidden');
        this.onStartGame('stage', index);
      });
    });

    document.getElementById('btn-close-stages')?.addEventListener('click', () => {
      this.stageScreen.classList.add('hidden');
    });

    // Garage Screen
    document.getElementById('btn-open-garage')?.addEventListener('click', () => {
      this.openGarage();
    });

    document.getElementById('btn-close-garage')?.addEventListener('click', () => {
      this.closeGarage();
    });

    // Instructions
    document.getElementById('btn-how-to-play')?.addEventListener('click', () => {
      this.instructionsScreen.classList.remove('hidden');
    });

    document.getElementById('btn-close-instructions')?.addEventListener('click', () => {
      this.instructionsScreen.classList.add('hidden');
    });

    document.getElementById('btn-instructions-gotit')?.addEventListener('click', () => {
      this.instructionsScreen.classList.add('hidden');
    });

    // Main Menu: Quick Avatar Picker
    document.querySelectorAll('#quick-avatar-chips .quick-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        const char = btn.getAttribute('data-char') as 'nova' | 'leo' | 'skye';
        if (char && CHARACTER_DEFS[char]) {
          this.gameState.characterId = char;
          this.gameState.savePersistedData();
          this.player.setCustomization(char, this.gameState.vehicleId, this.gameState.paletteId);
          this.player.setShowcasePreview(false);
          this.audioManager.playCoinSound();
          this.updateMenuStats();
        }
      });
    });

    // Main Menu: Quick Vehicle Picker
    document.querySelectorAll('#quick-vehicle-chips .quick-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        const veh = btn.getAttribute('data-veh') as 'van' | 'buggy' | 'scooter';
        if (veh && VEHICLE_DEFS[veh]) {
          this.gameState.vehicleId = veh;
          this.gameState.savePersistedData();
          this.player.setCustomization(this.gameState.characterId, veh, this.gameState.paletteId);
          this.player.setShowcasePreview(true);
          this.audioManager.playCoinSound();
          this.updateMenuStats();
        }
      });
    });

    // Pause Modal Buttons
    document.getElementById('btn-resume')?.addEventListener('click', () => {
      this.pauseScreen.classList.add('hidden');
      this.onResumeGame();
    });

    document.getElementById('btn-restart')?.addEventListener('click', () => {
      this.pauseScreen.classList.add('hidden');
      this.onRestartGame();
    });

    document.getElementById('btn-quit')?.addEventListener('click', () => {
      this.pauseScreen.classList.add('hidden');
      this.onQuitToMenu();
    });

    // Game Over Buttons
    document.getElementById('btn-retry')?.addEventListener('click', () => {
      this.gameOverScreen.classList.add('hidden');
      this.onRestartGame();
    });

    document.getElementById('btn-back-hub')?.addEventListener('click', () => {
      this.gameOverScreen.classList.add('hidden');
      this.onQuitToMenu();
    });

    document.getElementById('btn-go-garage')?.addEventListener('click', () => {
      this.gameOverScreen.classList.add('hidden');
      this.onQuitToMenu();
      this.openGarage();
    });
  }

  public openGarage(): void {
    this.mainMenu.classList.add('hidden');
    this.garageScreen.classList.remove('hidden');
    this.garageView.open();
  }

  public closeGarage(): void {
    this.garageScreen.classList.add('hidden');
    this.mainMenu.classList.remove('hidden');
    this.updateMenuStats();
  }

  public showMainMenu(): void {
    this.hudScreen.classList.add('hidden');
    this.gameOverScreen.classList.add('hidden');
    this.pauseScreen.classList.add('hidden');
    this.stageScreen.classList.add('hidden');
    this.instructionsScreen.classList.add('hidden');
    this.garageScreen.classList.add('hidden');
    this.mainMenu.classList.remove('hidden');
    this.btnPause.classList.add('hidden');
    this.updateMenuStats();
  }

  public showInGameHUD(): void {
    this.mainMenu.classList.add('hidden');
    this.gameOverScreen.classList.add('hidden');
    this.pauseScreen.classList.add('hidden');
    this.garageScreen.classList.add('hidden');
    this.hudScreen.classList.remove('hidden');
    this.btnPause.classList.remove('hidden');
  }

  public showPauseModal(): void {
    this.pauseScreen.classList.remove('hidden');
    this.onPauseGame();
  }

  public resumeGame(): void {
    this.pauseScreen.classList.add('hidden');
    this.onResumeGame();
  }

  public showGameOverModal(stats: RunStats): void {
    this.hudScreen.classList.add('hidden');
    this.gameOverScreen.classList.remove('hidden');

    const badge = document.getElementById('game-over-badge');
    const title = document.getElementById('game-over-title');
    const newRecordTag = document.getElementById('new-high-score-banner');

    if (stats.stageCompleted) {
      if (badge) badge.innerText = 'STAGE COMPLETE!';
      if (title) title.innerText = 'VICTORY!';
    } else {
      if (badge) badge.innerText = 'CRASHED!';
      if (title) title.innerText = 'RUN FINISHED';
    }

    document.getElementById('final-distance')!.innerText = `${stats.distance}m`;
    document.getElementById('final-coins')!.innerText = `${stats.starCoins}`;
    document.getElementById('final-smash')!.innerText = `${stats.smashes}`;
    document.getElementById('final-total-score')!.innerText = `${stats.score}`;

    if (newRecordTag) {
      if (stats.isNewHighScore || stats.isNewHighDistance) {
        newRecordTag.classList.remove('hidden');
      } else {
        newRecordTag.classList.add('hidden');
      }
    }
  }

  public updateHUD(biomeName: string): void {
    this.biomeBanner.innerText = biomeName;
    this.starCount.innerText = `${this.gameState.starCoins}`;
    this.gemCount.innerText = `${this.gameState.diamondGems}`;
    this.distanceVal.innerHTML = `${Math.floor(this.gameState.distance)} <small>m</small>`;
    this.speedMeter.innerText = `${Math.floor(this.gameState.speed)} m/s`;
    this.multiplierBadge.innerText = `${this.gameState.multiplier}x`;

    // Level HUD Progress
    const currentDef = this.gameState.getCurrentLevelDef();
    if (this.hudLevelBadge) this.hudLevelBadge.innerText = `LVL ${this.gameState.currentLevel}`;
    if (this.hudLevelName) this.hudLevelName.innerText = currentDef.name;
    const levelPct = Math.min(100, Math.max(0, (this.gameState.levelDistance / currentDef.targetDistance) * 100));
    if (this.levelProgressBar) this.levelProgressBar.style.width = `${levelPct}%`;
    if (this.levelFraction) this.levelFraction.innerText = `${Math.floor(this.gameState.levelDistance)} / ${currentDef.targetDistance}m`;

    // Boost Button in HUD
    if (this.btnHudBoost && this.hudBoostBadge) {
      if (this.player.boostCharges > 0) {
        this.btnHudBoost.classList.remove('hidden');
        this.hudBoostBadge.innerText = `x${this.player.boostCharges}`;
      } else {
        this.btnHudBoost.classList.add('hidden');
      }
    }

    // Vehicle Meter
    if (this.player.mode === 'in_vehicle') {
      this.vehicleMeterContainer.classList.remove('hidden');
      const vehDef = VEHICLE_DEFS[this.player.vehicleId];
      this.vehicleMeterName.innerText = vehDef.name.toUpperCase();
      this.vehicleMeterAbility.innerText = vehDef.ability.toUpperCase();

      const pct = Math.max(0, Math.min(100, (this.player.vehicleDuration / this.player.maxVehicleDuration) * 100));
      this.vehicleMeterFill.style.width = `${pct}%`;
      this.vehicleTimerText.innerText = `${Math.max(0, this.player.vehicleDuration).toFixed(1)}s`;
    } else {
      this.vehicleMeterContainer.classList.add('hidden');
    }

    // Mission status
    if (this.gameState.mode === 'stage') {
      this.missionCard.classList.remove('hidden');
      const stage = this.gameState.getActiveStage();
      if (stage) {
        this.missionTitle.innerText = stage.name;
        const progress = Math.min(
          1,
          (this.gameState.distance / stage.targetDistance +
            this.gameState.starCoins / stage.targetCoins +
            (stage.targetSmashes > 0 ? this.gameState.smashes / stage.targetSmashes : 1)) /
            (stage.targetSmashes > 0 ? 3 : 2)
        );
        this.missionProgressBar.style.width = `${progress * 100}%`;
        this.missionFraction.innerText = `${Math.floor(this.gameState.distance)}m / ${stage.targetDistance}m`;
      }
    } else {
      this.missionCard.classList.add('hidden');
    }
  }

  public showLevelUpAnnouncement(levelNumber: number, name: string, subtitle: string, rewardCoins: number): void {
    if (!this.levelUpBanner) return;
    const titleEl = this.levelUpBanner.querySelector('.level-up-title');
    if (titleEl) titleEl.textContent = `🎉 LEVEL ${levelNumber}: ${name.toUpperCase()}! 🎉`;
    if (this.levelUpSub) this.levelUpSub.textContent = `${subtitle} (+${rewardCoins}⭐ Bonus)`;

    this.levelUpBanner.classList.remove('hidden');
    setTimeout(() => {
      this.levelUpBanner.classList.add('hidden');
    }, 2400);
  }

  public showActionPrompt(text: string): void {
    this.actionPrompt.innerText = text;
    this.actionPrompt.classList.remove('hidden');
    setTimeout(() => {
      this.actionPrompt.classList.add('hidden');
    }, 1200);
  }

  public updateMenuStats(): void {
    this.menuBestDistance.innerText = `${Math.floor(this.gameState.bestDistance)}m`;
    this.menuBestScore.innerText = `${this.gameState.bestScore}`;

    const charTag = document.getElementById('menu-selected-avatar');
    if (charTag) charTag.innerText = `Avatar: ${CHARACTER_DEFS[this.gameState.characterId].name}`;

    const vehTag = document.getElementById('menu-selected-vehicle');
    if (vehTag) vehTag.innerText = `Ride: ${VEHICLE_DEFS[this.gameState.vehicleId].name}`;

    // Highlight active quick chips
    document.querySelectorAll('#quick-avatar-chips .quick-chip').forEach((btn) => {
      if (btn.getAttribute('data-char') === this.gameState.characterId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.querySelectorAll('#quick-vehicle-chips .quick-chip').forEach((btn) => {
      if (btn.getAttribute('data-veh') === this.gameState.vehicleId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}
