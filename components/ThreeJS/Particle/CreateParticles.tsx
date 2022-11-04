/* eslint @typescript-eslint/no-var-requires: "off" */
import * as THREE from "three";
import { Font } from "three/examples/jsm/loaders/FontLoader";
const vertexShader = `
attribute float size;
  attribute vec3 customColor;
  varying vec3 vColor;
  void main() {
    vColor = customColor;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = size * ( 300.0 / -mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;

  }
`;
const fragmentShader = `
    uniform vec3 color;
    varying vec3 vColor;
    void main() {
      gl_FragColor = vec4( color * vColor, 1.0 );
    }
`;
export class CreateParticles {
  scene: THREE.Scene;
  font: Font;
  camera: THREE.Camera;
  renderer: THREE.Renderer;
  raycaster: THREE.Raycaster;
  mouse: THREE.Vector2;
  colorChange: THREE.Color;
  buttom: boolean;
  data: {
    text: string;
    amount: number;
    particleSize: number;
    particleColor: number;
    textSize: number;
    area: number;
    ease: number;
  };
  planeArea: THREE.Mesh | undefined;
  currenPosition: THREE.Vector3 | undefined;
  particles: THREE.Points | undefined;
  geometryCopy: THREE.BufferGeometry | undefined;
  constructor({
    scene,
    font,
    camera,
    renderer,
  }: {
    scene: THREE.Scene;
    font: Font;
    camera: THREE.Camera;
    renderer: THREE.Renderer;
  }) {
    this.scene = scene;
    this.font = font;
    this.camera = camera;
    this.renderer = renderer;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-200, 200);

    this.colorChange = new THREE.Color();

    this.buttom = false;

    this.data = {
      text: "CLICK\n  ME\nHERE",
      amount: 1500,
      particleSize: 1,
      particleColor: 0xffffff,
      textSize: 10,
      area: 150,
      ease: 0.05,
    };

    this.setup();
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.bindEvents();
  }

  setup() {
    const geometry = new THREE.PlaneGeometry(
      this.visibleWidthAtZDepth(100, this.camera as THREE.PerspectiveCamera),
      this.visibleHeightAtZDepth(100, this.camera as THREE.PerspectiveCamera)
    );
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      transparent: true,
    });
    this.planeArea = new THREE.Mesh(geometry, material);
    this.planeArea.visible = false;
    this.createText();
  }

  bindEvents() {
    document.addEventListener("mousedown", this.onMouseDown);
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
  }
  unbindEvents() {
    document.removeEventListener("mousedown", this.onMouseDown);
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
  }
  onMouseDown(event: MouseEvent) {
    this.mouse.x = (event?.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event?.clientY / window.innerHeight) * 2 + 1;

    const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
    vector.unproject(this.camera);
    const dir = vector.sub(this.camera.position).normalize();
    const distance = -this.camera.position.z / dir.z;
    this.currenPosition = this.camera.position
      .clone()
      .add(dir.multiplyScalar(distance));

    // const pos = this.particles.geometry.attributes.position;
    this.buttom = true;
    this.data.ease = 0.01;
  }

  onMouseUp() {
    this.buttom = false;
    this.data.ease = 0.05;
  }

  onMouseMove(event: MouseEvent) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  render() {
    const time = ((0.001 * performance.now()) % 12) / 12;
    const zigzagTime = (1 + Math.sin(time * 2 * Math.PI)) / 6;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.planeArea
      ? this.raycaster.intersectObject(this.planeArea)
      : [];

    if (intersects.length > 0 && this.particles && this.geometryCopy) {
      const pos = this.particles.geometry.attributes.position;
      const copy = this.geometryCopy.attributes.position;
      const coulors = this.particles.geometry.attributes.customColor;
      const size: any = this.particles.geometry.attributes.size;

      const mx = intersects[0].point.x;
      const my = intersects[0].point.y;
      // const mz = intersects[0].point.z;

      for (let i = 0, l = pos.count; i < l; i++) {
        const initX = copy.getX(i);
        const initY = copy.getY(i);
        const initZ = copy.getZ(i);

        let px = pos.getX(i);
        let py = pos.getY(i);
        let pz = pos.getZ(i);

        this.colorChange.setHSL(0.5, 1, 1);
        coulors.setXYZ(
          i,
          this.colorChange.r,
          this.colorChange.g,
          this.colorChange.b
        );
        coulors.needsUpdate = true;
        size.array[i] = this.data.particleSize;
        size.needsUpdate = true;

        let dx = mx - px;
        let dy = my - py;

        const mouseDistance = this.distance(mx, my, px, py);
        const d = (dx = mx - px) * dx + (dy = my - py) * dy;
        const f = -this.data.area / d;

        if (this.buttom) {
          const t = Math.atan2(dy, dx);
          px -= f * Math.cos(t);
          py -= f * Math.sin(t);

          this.colorChange.setHSL(0.5 + zigzagTime, 1.0, 0.5);
          coulors.setXYZ(
            i,
            this.colorChange.r,
            this.colorChange.g,
            this.colorChange.b
          );
          coulors.needsUpdate = true;

          if (
            px > initX + 70 ||
            px < initX - 70 ||
            py > initY + 70 ||
            py < initY - 70
          ) {
            this.colorChange.setHSL(0.15, 1.0, 0.5);
            coulors.setXYZ(
              i,
              this.colorChange.r,
              this.colorChange.g,
              this.colorChange.b
            );
            coulors.needsUpdate = true;
          }
        } else {
          if (mouseDistance < this.data.area) {
            if (i % 5 == 0) {
              const t = Math.atan2(dy, dx);
              px -= 0.03 * Math.cos(t);
              py -= 0.03 * Math.sin(t);

              this.colorChange.setHSL(0.15, 1.0, 0.5);
              coulors.setXYZ(
                i,
                this.colorChange.r,
                this.colorChange.g,
                this.colorChange.b
              );
              coulors.needsUpdate = true;

              size.array[i] = this.data.particleSize / 1.2;
              size.needsUpdate = true;
            } else {
              const t = Math.atan2(dy, dx);
              px += f * Math.cos(t);
              py += f * Math.sin(t);

              pos.setXYZ(i, px, py, pz);
              pos.needsUpdate = true;

              size.array[i] = this.data.particleSize * 1.3;
              size.needsUpdate = true;
            }

            if (
              px > initX + 10 ||
              px < initX - 10 ||
              py > initY + 10 ||
              py < initY - 10
            ) {
              this.colorChange.setHSL(0.15, 1.0, 0.5);
              coulors.setXYZ(
                i,
                this.colorChange.r,
                this.colorChange.g,
                this.colorChange.b
              );
              coulors.needsUpdate = true;

              size.array[i] = this.data.particleSize / 1.8;
              size.needsUpdate = true;
            }
          }
        }

        px += (initX - px) * this.data.ease;
        py += (initY - py) * this.data.ease;
        pz += (initZ - pz) * this.data.ease;

        pos.setXYZ(i, px, py, pz);
        pos.needsUpdate = true;
      }
    }
  }

  createText = () => {
    const thePoints: THREE.Vector3[] = [];

    const shapes = this.font?.generateShapes(
      this.data.text,
      this.data.textSize
    );
    const geometry = new THREE.ShapeGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid = geometry?.boundingBox?.max
      ? -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
      : 0;
    const yMid = geometry?.boundingBox?.max
      ? (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85
      : 0;

    geometry.center();

    const holeShapes: any[] = [];

    for (let q = 0; shapes && q < shapes.length; q++) {
      const shape = shapes[q];

      if (shape.holes && shape.holes.length > 0) {
        for (let j = 0; j < shape.holes.length; j++) {
          const hole = shape.holes[j];
          holeShapes.push(hole);
        }
      }
    }
    /*eslint prefer-spread: "off"*/
    shapes?.push.apply(shapes, holeShapes);

    const colors: number[] = [];
    const sizes: number[] = [];

    for (let x = 0; shapes && x < shapes.length; x++) {
      const shape = shapes[x];

      const amountPoints =
        shape.type == "Path" ? this.data.amount / 2 : this.data.amount;

      const points = shape.getSpacedPoints(amountPoints);

      points.forEach(
        (element: { x: number | undefined; y: number | undefined }) => {
          const a = new THREE.Vector3(element.x, element.y, 0);
          thePoints.push(a);
          colors.push(
            this.colorChange.r,
            this.colorChange.g,
            this.colorChange.b
          );
          sizes.push(1);
        }
      );
    }

    const geoParticles = new THREE.BufferGeometry().setFromPoints(thePoints);
    geoParticles.translate(xMid, yMid, 0);

    geoParticles.setAttribute(
      "customColor",
      new THREE.Float32BufferAttribute(colors, 3)
    );
    geoParticles.setAttribute(
      "size",
      new THREE.Float32BufferAttribute(sizes, 1)
    );

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0x00ffff) },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,

      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });
    // const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    this.particles = new THREE.Points(geoParticles, material);
    this.scene.add(this.particles);

    this.geometryCopy = new THREE.BufferGeometry();
    this.geometryCopy.copy(this.particles.geometry);
  };

  visibleHeightAtZDepth(depth: number, camera: THREE.PerspectiveCamera) {
    const cameraOffset = camera.position.z;
    if (depth < cameraOffset) depth -= cameraOffset;
    else depth += cameraOffset;

    const vFOV = (camera?.fov * Math.PI) / 180;

    return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
  }

  visibleWidthAtZDepth(depth: number, camera: THREE.PerspectiveCamera) {
    const height = this.visibleHeightAtZDepth(depth, camera);
    return height * camera?.aspect;
  }

  distance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }
}
