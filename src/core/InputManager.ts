export type InputAction = 'left' | 'right' | 'jump' | 'slide';

export class InputManager {
  private queuedActions: InputAction[] = [];
  private touchStartX = 0;
  private touchStartY = 0;
  private touchStartTime = 0;
  private isEnabled = true;

  constructor() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
    window.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
  }

  public setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
    if (!enabled) {
      this.queuedActions = [];
    }
  }

  public onPauseToggle?: () => void;

  private handleKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') {
      this.onPauseToggle?.();
      return;
    }

    if (!this.isEnabled) return;

    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      this.queuedActions.push('left');
    } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      this.queuedActions.push('right');
    } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W' || e.key === ' ') {
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
  }

  private handleTouchEnd(e: TouchEvent): void {
    if (!this.isEnabled || e.changedTouches.length === 0) return;
    const deltaX = e.changedTouches[0].clientX - this.touchStartX;
    const deltaY = e.changedTouches[0].clientY - this.touchStartY;
    const duration = performance.now() - this.touchStartTime;
    if (duration > 600) return;

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

  public popAction(): InputAction | null {
    if (this.queuedActions.length > 0) {
      return this.queuedActions.shift()!;
    }
    return null;
  }

  public clear(): void {
    this.queuedActions = [];
  }
}
