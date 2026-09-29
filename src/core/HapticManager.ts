import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';
import { StatusBar } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

export class HapticManager {
  private static isAvailable = Capacitor.isNativePlatform();

  /**
   * Hide status bar for edge-to-edge game immersion on iOS
   */
  public static async hideStatusBar(): Promise<void> {
    if (!this.isAvailable) return;
    try {
      await StatusBar.hide();
    } catch {
      // Ignore if not supported on hardware
    }
  }

  /**
   * Light Taptic impact - Star coins, button taps, subtle feedback
   */
  public static async lightImpact(): Promise<void> {
    if (!this.isAvailable) return;
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch {
      // Ignore if not supported on hardware
    }
  }

  /**
   * Medium Taptic impact - Gems, lane dash, jump takeoff, ducking slide
   */
  public static async mediumImpact(): Promise<void> {
    if (!this.isAvailable) return;
    try {
      await Haptics.impact({ style: ImpactStyle.Medium });
    } catch {
      // Ignore if not supported on hardware
    }
  }

  /**
   * Heavy Taptic impact - Vehicle mounting, roadblock crash, crash eject
   */
  public static async heavyImpact(): Promise<void> {
    if (!this.isAvailable) return;
    try {
      await Haptics.impact({ style: ImpactStyle.Heavy });
    } catch {
      // Ignore if not supported on hardware
    }
  }

  /**
   * Triumphant notification pattern - Level-up and Stage victory!
   */
  public static async celebration(): Promise<void> {
    if (!this.isAvailable) return;
    try {
      await Haptics.notification({ type: NotificationType.Success });
    } catch {
      // Ignore if not supported on hardware
    }
  }

  /**
   * Warning vibration pattern - Life lost / game over
   */
  public static async warning(): Promise<void> {
    if (!this.isAvailable) return;
    try {
      await Haptics.notification({ type: NotificationType.Warning });
    } catch {
      // Ignore if not supported on hardware
    }
  }
}
