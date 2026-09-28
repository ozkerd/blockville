import { CharacterId, VehicleId, ColorPaletteId } from '../types/game';
import { GameState, CHARACTER_DEFS, VEHICLE_DEFS } from '../core/GameState';
import { PlayerController } from '../entities/PlayerController';

export class GarageView {
  private gameState: GameState;
  private player: PlayerController;
  private onConfirmCallback: () => void;

  private selectedCharacter: CharacterId;
  private selectedVehicle: VehicleId;
  private selectedPalette: ColorPaletteId;

  constructor(gameState: GameState, player: PlayerController, onConfirm: () => void) {
    this.gameState = gameState;
    this.player = player;
    this.onConfirmCallback = onConfirm;

    this.selectedCharacter = gameState.characterId;
    this.selectedVehicle = gameState.vehicleId;
    this.selectedPalette = gameState.paletteId;

    this.initEventListeners();
  }

  private activeTab: 'characters' | 'vehicles' = 'characters';

  private initEventListeners(): void {
    // Tab switching (Avatars vs Vehicles)
    const tabChars = document.getElementById('tab-characters');
    const tabVehs = document.getElementById('tab-vehicles');
    const rosterChars = document.getElementById('roster-characters');
    const rosterVehs = document.getElementById('roster-vehicles');

    tabChars?.addEventListener('click', () => {
      this.activeTab = 'characters';
      tabChars.classList.add('active');
      tabVehs?.classList.remove('active');
      rosterChars?.classList.remove('hidden');
      rosterVehs?.classList.add('hidden');
      this.syncShowcase();
    });

    tabVehs?.addEventListener('click', () => {
      this.activeTab = 'vehicles';
      tabVehs.classList.add('active');
      tabChars?.classList.remove('active');
      rosterVehs?.classList.remove('hidden');
      rosterChars?.classList.add('hidden');
      this.syncShowcase();
    });

    // Character Card selections
    const charCards = document.querySelectorAll('#roster-characters .roster-card');
    charCards.forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id') as CharacterId;
        if (id && CHARACTER_DEFS[id]) {
          this.selectedCharacter = id;
          charCards.forEach((c) => c.classList.remove('active'));
          card.classList.add('active');
          this.syncShowcase();
        }
      });
    });

    // Vehicle Card selections
    const vehCards = document.querySelectorAll('#roster-vehicles .roster-card');
    vehCards.forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id') as VehicleId;
        if (id && VEHICLE_DEFS[id]) {
          this.selectedVehicle = id;
          vehCards.forEach((c) => c.classList.remove('active'));
          card.classList.add('active');
          this.syncShowcase();
        }
      });
    });

    // Palette Swatches
    const swatches = document.querySelectorAll('.swatch-btn');
    swatches.forEach((swatch) => {
      swatch.addEventListener('click', () => {
        const pal = swatch.getAttribute('data-palette') as ColorPaletteId;
        if (pal) {
          this.selectedPalette = pal;
          swatches.forEach((s) => s.classList.remove('active'));
          swatch.classList.add('active');
          this.syncShowcase();
        }
      });
    });

    // Confirm button
    const confirmBtn = document.getElementById('btn-select-confirm');
    confirmBtn?.addEventListener('click', () => {
      this.confirmLoadout();
    });
  }

  public open(): void {
    this.selectedCharacter = this.gameState.characterId;
    this.selectedVehicle = this.gameState.vehicleId;
    this.selectedPalette = this.gameState.paletteId;

    // Refresh active classes in DOM
    document.querySelectorAll('#roster-characters .roster-card').forEach((card) => {
      if (card.getAttribute('data-id') === this.selectedCharacter) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    document.querySelectorAll('#roster-vehicles .roster-card').forEach((card) => {
      if (card.getAttribute('data-id') === this.selectedVehicle) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    document.querySelectorAll('.swatch-btn').forEach((btn) => {
      if (btn.getAttribute('data-palette') === this.selectedPalette) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    this.syncShowcase();
  }

  private syncShowcase(): void {
    this.player.setCustomization(this.selectedCharacter, this.selectedVehicle, this.selectedPalette);
    this.player.setShowcasePreview(this.activeTab === 'vehicles');
  }

  public confirmLoadout(): void {
    this.player.setShowcasePreview(false);
    this.gameState.characterId = this.selectedCharacter;
    this.gameState.vehicleId = this.selectedVehicle;
    this.gameState.paletteId = this.selectedPalette;
    this.gameState.savePersistedData();

    // Update main menu tags
    const charTag = document.getElementById('menu-selected-avatar');
    if (charTag) charTag.innerText = `Avatar: ${CHARACTER_DEFS[this.selectedCharacter].name}`;

    const vehTag = document.getElementById('menu-selected-vehicle');
    if (vehTag) vehTag.innerText = `Ride: ${VEHICLE_DEFS[this.selectedVehicle].name}`;

    this.onConfirmCallback();
  }
}
