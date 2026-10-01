import * as THREE from 'three';

export class SceneRenderer {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public dirLight: THREE.DirectionalLight;
  public hemiLight: THREE.HemisphereLight;
  public ambientLight: THREE.AmbientLight;

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x70C5FF); // Sunny sky blue
    // Gentle linear-like fog starting far out at 75m to keep the track sharp, clear, and never blurry
    this.scene.fog = new THREE.Fog(0x70C5FF, 75, 230);

    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 300);
    this.camera.position.set(0, 5, 8);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25; // Slightly brighter exposure
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lighting setup for bright, vibrant glossy toy aesthetic
    this.hemiLight = new THREE.HemisphereLight(0xFFFFFF, 0xA5D6A7, 0.95); // Crisp sun & luminous ground bounce
    this.hemiLight.position.set(0, 50, 0);
    this.scene.add(this.hemiLight);

    this.ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.55); // High ambient illumination (no dark shadows)
    this.scene.add(this.ambientLight);

    this.dirLight = new THREE.DirectionalLight(0xFFFFFF, 1.6);
    this.dirLight.position.set(20, 35, 15);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 120;
    const shadowD = 22;
    this.dirLight.shadow.camera.left = -shadowD;
    this.dirLight.shadow.camera.right = shadowD;
    this.dirLight.shadow.camera.top = shadowD;
    this.dirLight.shadow.camera.bottom = -shadowD;
    this.dirLight.shadow.bias = -0.0005;
    this.scene.add(this.dirLight);
    this.scene.add(this.dirLight.target);

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  public setSkyColor(skyHex: number, groundHex: number, fogHex: number): void {
    this.scene.background = new THREE.Color(skyHex);
    if (this.scene.fog) {
      this.scene.fog.color.setHex(fogHex);
    }
    this.hemiLight.color.setHex(skyHex);
    this.hemiLight.groundColor.setHex(groundHex);
  }

  public onWindowResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  public updateLightTarget(targetPosition: THREE.Vector3): void {
    this.dirLight.position.set(
      targetPosition.x + 20,
      targetPosition.y + 35,
      targetPosition.z + 15
    );
    this.dirLight.target.position.copy(targetPosition);
    this.dirLight.target.updateMatrixWorld();
  }

  public render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}
