import * as THREE from "three";
import { Font } from "three/examples/jsm/loaders/FontLoader";
import { CreateParticles } from "./CreateParticles";

export class Environment {
  font: Font;
  particle: THREE.Mesh;
  container: HTMLDivElement | null;
  scene: THREE.Scene | undefined;
  createParticles: CreateParticles | undefined;
  camera: THREE.PerspectiveCamera | undefined;
  renderer: THREE.Renderer | undefined | any;
  constructor(font: any, particle?: any) {
    this.font = font;
    this.particle = particle;
    this.container = document.querySelector("#magic");
    this.scene = new THREE.Scene();
    this.createCamera();
    this.createRenderer();
    this.setup();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  setup() {
    if (this.camera && this.renderer && this.scene) {
      this.createParticles = new CreateParticles({
        scene: this.scene,
        font: this.font,
        camera: this.camera,
        renderer: this.renderer,
      });
    }
  }

  render() {
    this.createParticles?.render();
    if (this.renderer && this.camera)
      this.renderer?.render(this.scene, this.camera);
  }

  createCamera() {
    if (!this.container) return;
    this.camera = new THREE.PerspectiveCamera(
      65,
      this.container.clientWidth / this.container.clientHeight,
      1,
      10000
    );
    this.camera.position.set(0, 0, 100);
  }

  createRenderer() {
    if (!this.container) return;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);

    this.renderer.setAnimationLoop(() => {
      this.render();
    });
  }

  onWindowResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
  }
  cleanTexture = (value: THREE.Texture | undefined) => {
    if (value && typeof value === "object" && "minFilter" in value) {
      value.dispose();
    }
    value = undefined;
    return undefined;
  };
  cleanMaterial(material: any) {
    for (const key of Object.keys(material)) {
      const value = material[key];
      if (value && typeof value === "object" && "minFilter" in value) {
        value.dispose();
      }
    }
    material.dispose();
    material = undefined;
  }

  cleanUp = () => {
    const scene: any = this.scene;
    if (scene != undefined) {
      scene.traverse((object: any) => {
        if (!object["isMesh"]) return;
        object["geometry"].dispose();
        if (object["material"].isMaterial) {
          this.cleanMaterial(object["material"]);
        } else {
          for (const material of object["material"])
            this.cleanMaterial(material);
        }
        object["geometry"] = undefined;
        object = undefined;
      });
      scene.children.forEach((model: any) => {
        scene.remove(model);
      });
    }
    if (this.renderer != undefined) {
      this.renderer.dispose();
      this.renderer && this.renderer.renderLists.dispose();
    }
    if (this.renderer) this.container?.removeChild(this.renderer.domElement);
    this.createParticles?.unbindEvents();
    this.scene = undefined;
    this.renderer = undefined;
    this.camera = undefined;
  };
}
