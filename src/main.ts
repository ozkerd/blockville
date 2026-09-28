import * as THREE from 'three';
import { SceneRenderer } from './rendering/SceneRenderer';
import { AudioManager } from './core/AudioManager';
import { InputManager } from './core/InputManager';
import { GameState } from './core/GameState';
import { ParticleSystem } from './rendering/ParticleSystem';
import { CameraController } from './core/CameraController';
import { PlayerController } from './entities/PlayerController';
import { TrackManager } from './world/TrackManager';
import { UIManager } from './ui/UIManager';
import { GameMode } from './types/game';

import { FloatingTextManager } from './rendering/FloatingTextManager';

type AppFlowState = 'menu' | 'playing' | 'paused' | 'game_over' | 'victory';

class BlockvilleApp {
  private canvas: HTMLCanvasElement;
  private sceneRenderer: SceneRenderer;
  private audioManager: AudioManager;
  private inputManager: InputManager;
  private gameState: GameState;
  private particleSystem: ParticleSystem;
  private cameraController: CameraController;
  private player: PlayerController;
  private trackManager: TrackManager;
  private uiManager: UIManager;
  private floatingText: FloatingTextManager;

  private appState: AppFlowState = 'menu';
  private lastTime = 0;
  private crashTimer = 0;
  private isCrashing = false;

  constructor() {
    this.canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
    this.sceneRenderer = new SceneRenderer(this.canvas);
    this.audioManager = new AudioManager();
    this.inputManager = new InputManager();
    this.gameState = new GameState();
    this.particleSystem = new ParticleSystem();
    this.cameraController = new CameraController(this.sceneRenderer.camera);
    this.floatingText = new FloatingTextManager(this.sceneRenderer.camera);

    // Player & Track
    this.player = new PlayerController(
      this.gameState.characterId,
      this.gameState.vehicleId,
      this.gameState.paletteId,
      this.particleSystem,
      this.audioManager
    );

    this.trackManager = new TrackManager(
      this.sceneRenderer,
      this.particleSystem,
      this.audioManager,
      this.gameState,
      this.floatingText
    );

    // Add to Three.js scene
    this.sceneRenderer.scene.add(this.trackManager.group);
    this.sceneRenderer.scene.add(this.player.group);
    this.sceneRenderer.scene.add(this.particleSystem.group);

    // UI Manager
    this.uiManager = new UIManager(this.gameState, this.player, this.audioManager);
    this.setupUIHandlers();

    // Reset track to starting layout
    this.trackManager.reset('boardwalk');

    // Start render loop
    this.lastTime = performance.now();
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  private setupUIHandlers(): void {
    this.uiManager.onStartGame = (mode: GameMode, stageIdx?: number) => {
      this.gameState.mode = mode;
      if (typeof stageIdx === 'number') {
        this.gameState.currentStageIndex = stageIdx;
      }
      this.startRun();
    };

    this.uiManager.onResumeGame = () => {
      this.appState = 'playing';
      this.inputManager.setEnabled(true);
    };

    this.uiManager.onRestartGame = () => {
      this.startRun();
    };

    this.uiManager.onQuitToMenu = () => {
      this.appState = 'menu';
      this.inputManager.setEnabled(false);
      this.audioManager.stopMusic();
      this.audioManager.stopVehicleEngine();
      this.player.reset();
      this.trackManager.reset('boardwalk');
      this.floatingText.clear();
      this.uiManager.showMainMenu();
    };
  }

  private startRun(): void {
    this.gameState.resetRun();
    this.player.setCustomization(
      this.gameState.characterId,
      this.gameState.vehicleId,
      this.gameState.paletteId
    );
    this.player.reset();

    const startBiome = this.gameState.mode === 'stage' 
      ? this.gameState.getActiveStage()?.biome || 'boardwalk'
      : 'boardwalk';

    this.trackManager.reset(startBiome);
    this.particleSystem.clear();
    this.floatingText.clear();
    this.inputManager.clear();
    this.inputManager.setEnabled(true);

    this.appState = 'playing';
    this.isCrashing = false;
    this.crashTimer = 0;

    this.uiManager.showInGameHUD();
    this.audioManager.startMusic();
  }

  private gameLoop(time: number): void {
    requestAnimationFrame(this.gameLoop.bind(this));

    const deltaTime = Math.min((time - this.lastTime) * 0.001, 0.05);
    this.lastTime = time;

    if (this.appState === 'menu') {
      // 3D Showcase turntable in sunny plaza
      const showcaseCenter = new THREE.Vector3(0, 0, 0);
      this.player.group.position.set(0, 0, 0);
      this.cameraController.updateShowcase(showcaseCenter, deltaTime);
      this.particleSystem.update(deltaTime);
      this.sceneRenderer.render();
      return;
    }

    if (this.appState === 'paused') {
      this.sceneRenderer.render();
      return;
    }

    if (this.appState === 'playing') {
      // Handle user input
      let action = this.inputManager.popAction();
      while (action) {
        if (action === 'left') this.player.moveLeft();
        else if (action === 'right') this.player.moveRight();
        else if (action === 'jump') this.player.jump();
        else if (action === 'slide') this.player.slide();
        action = this.inputManager.popAction();
      }

      // Progression update
      this.gameState.updateDistanceAndSpeed(deltaTime, this.player.turboTimer > 0 ? 1.4 : 1.0);

      // Check dynamic Level Up progression (every ~1.5 minutes!)
      const levelUpDef = this.gameState.checkLevelUp();
      if (levelUpDef) {
        this.audioManager.playLevelUpSound();
        this.particleSystem.emitSmashDebris(this.player.group.position, [0xFFD700, 0x00E5FF, 0xFF4081, 0x76FF03]);
        this.floatingText.spawn(
          this.player.group.position,
          `+${levelUpDef.rewardCoins} LEVEL UP!`,
          '#76FF03',
          '🏆',
          true
        );
        this.uiManager.showLevelUpAnnouncement(
          levelUpDef.levelNumber,
          levelUpDef.name,
          levelUpDef.subtitle,
          levelUpDef.rewardCoins
        );
      }

      // Player & Track updates
      this.player.update(deltaTime, this.gameState.speed);
      const { crashed, stageWon } = this.trackManager.update(this.player, deltaTime);

      // Camera trailing & light following
      const isVehicle = this.player.mode === 'in_vehicle';
      const isBoosting = this.player.turboTimer > 0;
      this.cameraController.updateFollow(this.player.group.position, isVehicle, isBoosting, deltaTime);
      this.sceneRenderer.updateLightTarget(this.player.group.position);

      // Particles & Floating Scores
      this.particleSystem.update(deltaTime);
      this.floatingText.update(deltaTime);

      // HUD update
      this.uiManager.updateHUD(this.trackManager.getCurrentBiomeName());

      // Crash handling
      if (crashed && !this.isCrashing) {
        this.isCrashing = true;
        this.crashTimer = 0.85;
        this.cameraController.addTrauma(0.9);
        this.audioManager.stopMusic();
        this.audioManager.stopVehicleEngine();
      }

      if (this.isCrashing) {
        this.crashTimer -= deltaTime;
        if (this.crashTimer <= 0) {
          this.appState = 'game_over';
          this.inputManager.setEnabled(false);
          const stats = this.gameState.finalizeRun(false);
          this.uiManager.showGameOverModal(stats);
        }
      }

      // Stage Victory handling: Celebrate and advance seamlessly without stopping gameplay!
      if (this.gameState.mode === 'stage' && stageWon) {
        const stageProgress = this.gameState.advanceStage();
        this.audioManager.playLevelUpSound();
        this.particleSystem.emitSmashDebris(this.player.group.position, [0xFFD700, 0x00E5FF, 0xFF4081, 0x76FF03]);

        if (stageProgress.nextStage) {
          this.floatingText.spawn(
            this.player.group.position,
            `+${stageProgress.rewardCoins} STAGE CLEAR!`,
            '#00E5FF',
            '🏆',
            true
          );
          this.uiManager.showLevelUpAnnouncement(
            this.gameState.currentStageIndex + 1,
            stageProgress.nextStage.name,
            `Stage Goal Cleared! Entering ${stageProgress.nextStage.name}`,
            stageProgress.rewardCoins
          );
        } else {
          this.floatingText.spawn(
            this.player.group.position,
            `+${stageProgress.rewardCoins} ALL STAGES CLEARED!`,
            '#76FF03',
            '👑',
            true
          );
          this.uiManager.showLevelUpAnnouncement(
            this.gameState.currentLevel,
            'ALL STAGES CLEARED!',
            'Entering Endless Master Gauntlet! Keep Going!',
            stageProgress.rewardCoins
          );
        }
      }
    }

    if (this.appState === 'game_over' || this.appState === 'victory') {
      this.particleSystem.update(deltaTime);
      this.floatingText.update(deltaTime);
    }

    // Render 3D Frame
    this.sceneRenderer.render();
  }
}

// Initialize when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  new BlockvilleApp();
});
