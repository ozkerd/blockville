export type InputAction = 'left' | 'right' | 'jump' | 'slide' | 'boost';

export class InputManager {
  private queuedActions: InputAction[] = [];
  private touchStartX = 0;
  private touchStartY = 0;
  private touchStartTime = 0;
  private longPressTimer: ReturnType<typeof setTimeout> | null = null;
  private hasTriggeredLongPress = false;
  private isEnabled = true;

  constructor() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
    window.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
    window.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
    window.addEventListener('touchcancel', this.handleTouchCancel.bind(this), { passive: true });
  }

  public setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
    if (!enabled) {
      this.clearHoldTimer();
      this.queuedActions = [];
    }
  }

  public onPauseToggle?: () => void;

  public triggerBoost(): void {
    if (!this.isEnabled) return;
    this.queuedActions.push('boost');
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') {
      this.onPauseToggle?.();
      return;
    }

    if (!this.isEnabled) return;

    if (e.code === 'Space' || e.key === ' ') {
      // Space activates Nitro Boost if collected (or fallback jump if none, handled in game loop)
      this.queuedActions.push('boost');
    } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      this.queuedActions.push('left');
    } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      this.queuedActions.push('right');
    } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
      this.queuedActions.push('jump');
    } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
      this.queuedActions.push('slide');
    }
  }

  private handleTouchStart(e: TouchEvent): void {
    if (!this.isEnabled || e.touches.length === 0) return;
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
    this.touchStartTime = performance.now();
    this.hasTriggeredLongPress = false;

    this.clearHoldTimer();
    // Long-press detection: holding finger still for 320ms triggers Nitro Boost!
    this.longPressTimer = setTimeout(() => {
      if (this.isEnabled && !this.hasTriggeredLongPress) {
        this.hasTriggeredLongPress = true;
        this.queuedActions.push('boost');
      }
    }, 320);
  }

  private handleTouchMove(e: TouchEvent): void {
    if (e.touches.length === 0) return;
    const curX = e.touches[0].clientX;
    const curY = e.touches[0].clientY;
    const distSq = (curX - this.touchStartX) ** 2 + (curY - this.touchStartY) ** 2;
    // If moved more than 20px, cancel stationary long-press
    if (distSq > 400) {
      this.clearHoldTimer();
    }
  }

  private handleTouchEnd(e: TouchEvent): void {
    this.clearHoldTimer();
    if (!this.isEnabled || e.changedTouches.length === 0) return;

    // If long-press already activated boost, do not also register a swipe
    if (this.hasTriggeredLongPress) {
      this.hasTriggeredLongPress = false;
      return;
    }

    const deltaX = e.changedTouches[0].clientX - this.touchStartX;
    const deltaY = e.changedTouches[0].clientY - this.touchStartY;
    const duration = performance.now() - this.touchStartTime;
    if (duration > 650) return;

    // Minimum swipe distance threshold
    const minDistance = 25;
    if (Math.abs(deltaX) < minDistance && Math.abs(deltaY) < minDistance) {
      return;
    }

    // Determine primary swipe direction
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        this.queuedActions.push('right');
      } else {
        this.queuedActions.push('left');
      }
    } else {
      if (deltaY < 0) {
        this.queuedActions.push('jump');
      } else {
        this.queuedActions.push('slide');
      }
    }
  }

  private handleTouchCancel(): void {
    this.clearHoldTimer();
  }

  private clearHoldTimer(): void {
    if (this.longPressTimer !== null) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }
  }

  public popAction(): InputAction | null {
    if (this.queuedActions.length > 0) {
      return this.queuedActions.shift()!;
    }
    return null;
  }

  public clear(): void {
    this.clearHoldTimer();
    this.queuedActions = [];
  }
}

