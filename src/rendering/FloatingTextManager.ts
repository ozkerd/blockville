import * as THREE from 'three';

interface FloatingItem {
  element: HTMLElement;
  worldPos: THREE.Vector3;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
}

export class FloatingTextManager {
  private container: HTMLElement;
  private camera: THREE.PerspectiveCamera;
  private items: FloatingItem[] = [];

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    
    // Create or locate the overlay container for floating numbers
    let el = document.getElementById('floating-scores-container');
    if (!el) {
      el = document.createElement('div');
      el.id = 'floating-scores-container';
      el.className = 'floating-scores-container';
      const uiContainer = document.getElementById('ui-container');
      if (uiContainer) {
        uiContainer.appendChild(el);
      } else {
        document.body.appendChild(el);
      }
    }
    this.container = el;
  }

  /**
   * Spawns a juicy floating arcade score number at a 3D world position
   */
  public spawn(
    worldPos: THREE.Vector3,
    text: string,
    color = '#FFD700',
    icon = '',
    isMajor = false
  ): void {
    const el = document.createElement('div');
    el.className = `floating-score ${isMajor ? 'major-score' : ''}`;
    el.style.color = color;

    if (icon) {
      el.innerHTML = `<span class="score-icon">${icon}</span> <span class="score-txt">${text}</span>`;
    } else {
      el.innerText = text;
    }

    this.container.appendChild(el);

    this.items.push({
      element: el,
      worldPos: worldPos.clone().add(new THREE.Vector3(0, 0.8, 0)),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.8,
        3.2 + Math.random() * 1.2,
        0
      ),
      life: 0,
      maxLife: isMajor ? 1.4 : 0.9
    });
  }

  public update(deltaTime: number): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const tempVec = new THREE.Vector3();

    for (let i = this.items.length - 1; i >= 0; i--) {
      const item = this.items[i];
      item.life += deltaTime;

      if (item.life >= item.maxLife) {
        item.element.remove();
        this.items.splice(i, 1);
        continue;
      }

      // Physics: rise upward and decelerate
      item.worldPos.addScaledVector(item.velocity, deltaTime);
      item.velocity.y *= 0.94;

      // Project 3D world position to 2D screen coordinates
      tempVec.copy(item.worldPos).project(this.camera);

      // Check if behind camera
      if (tempVec.z > 1.0) {
        item.element.style.display = 'none';
        continue;
      }

      item.element.style.display = 'flex';
      const screenX = (tempVec.x * 0.5 + 0.5) * width;
      const screenY = (-(tempVec.y * 0.5) + 0.5) * height;

      // Calculate progress and opacity / scale pop
      const progress = item.life / item.maxLife;
      const scale = progress < 0.2 ? 0.4 + (progress / 0.2) * 0.85 : Math.max(0.6, 1.25 - progress * 0.6);
      const opacity = progress > 0.6 ? 1.0 - (progress - 0.6) / 0.4 : 1.0;

      item.element.style.transform = `translate(-50%, -50%) translate3d(${screenX}px, ${screenY}px, 0) scale(${scale})`;
      item.element.style.opacity = `${opacity}`;
    }
  }

  public clear(): void {
    for (const item of this.items) {
      item.element.remove();
    }
    this.items = [];
  }
}
