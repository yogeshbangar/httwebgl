import { useEffect, useRef } from "react";
import * as THREE from "three";

const CommonAnimation = () => {
  const mountRef: any = useRef(null);

  const bufferGeometry = (): THREE.Mesh => {
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,
      1.0, -1.0, -1.0, 1.0,
    ]);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    return new THREE.Mesh(geometry, material);
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef?.current?.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const buffered = bufferGeometry();
    buffered.position.z = -100;
    buffered.position.x = -50;
    scene.add(buffered);
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    const onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize, false);
    animate();
    return () => mountRef?.current?.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef}></div>;
};

export default CommonAnimation;
