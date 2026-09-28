import * as THREE from 'three';

export class CameraController {
  private camera: THREE.PerspectiveCamera;
  private currentLookAt: THREE.Vector3 = new THREE.Vector3();
  private shakeTrauma = 0;
  private targetFov = 60;

  // Turntable showcase angle for Main Menu
  private showcaseAngle = 0;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
  }

  public setFov(fov: number): void {
    this.targetFov = fov;
  }

  public addTrauma(amount: number): void {
    this.shakeTrauma = Math.min(1.0, this.shakeTrauma + amount);
  }

  public updateFollow(targetPos: THREE.Vector3, isVehicle: boolean, isBoosting: boolean, deltaTime: number): void {
    // Dynamic FOV adjustment: wider for vehicle & turbo
    let desiredFov = 60;
    if (isVehicle) desiredFov = 72;
    if (isBoosting) desiredFov = 80;

    this.targetFov = desiredFov;
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, this.targetFov, deltaTime * 5);
    this.camera.updateProjectionMatrix();

    // Desired camera position
    const followDistance = isVehicle ? 9.2 : 7.6;
    const followHeight = isVehicle ? 4.8 : 4.2;

    const desiredX = targetPos.x * 0.75;
    const desiredY = targetPos.y * 0.35 + followHeight;
    const desiredZ = targetPos.z + followDistance;

    // Smooth lerping
    this.camera.position.x = THREE.MathUtils.lerp(this.camera.position.x, desiredX, deltaTime * 12);
    this.camera.position.y = THREE.MathUtils.lerp(this.camera.position.y, desiredY, deltaTime * 8);
    this.camera.position.z = THREE.MathUtils.lerp(this.camera.position.z, desiredZ, deltaTime * 16);

    // Camera shake calculation
    if (this.shakeTrauma > 0) {
      const shakeX = (Math.random() - 0.5) * 0.7 * this.shakeTrauma;
      const shakeY = (Math.random() - 0.5) * 0.7 * this.shakeTrauma;
      this.camera.position.x += shakeX;
      this.camera.position.y += shakeY;
      this.shakeTrauma = Math.max(0, this.shakeTrauma - deltaTime * 2.2);
    }

    const desiredLookAtY = targetPos.y * 0.5 + (isVehicle ? 1.4 : 1.2);
    const desiredLookAt = new THREE.Vector3(targetPos.x * 0.6, desiredLookAtY, targetPos.z - 6.0);
    this.currentLookAt.lerp(desiredLookAt, deltaTime * 14);

    this.camera.lookAt(this.currentLookAt);
  }

  public updateShowcase(centerPos: THREE.Vector3, deltaTime: number): void {
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, 50, deltaTime * 4);
    this.camera.updateProjectionMatrix();

    this.showcaseAngle += deltaTime * 0.6;
    const distance = 8.5;
    const height = 3.6;

    this.camera.position.set(
      centerPos.x + Math.sin(this.showcaseAngle) * distance,
      centerPos.y + height,
      centerPos.z + Math.cos(this.showcaseAngle) * distance
    );
    this.camera.lookAt(centerPos.x, centerPos.y + 1.2, centerPos.z);
  }
}
