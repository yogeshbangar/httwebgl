import React from "react";
import * as THREE from "three";

const _VS = `
    varying vec3 vPosition;
    void main()	{
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
`;
const _FS = `
    varying vec3 vPosition;
    uniform float time;
    void main()	{
        vec4 color = vec4( vPosition,1.0 );
        color.b += cos( vPosition.z * time );
        color.r += sin( vPosition.x * time ) * 0.5;
        gl_FragColor = color;
    }
`;
const CommonAnimation = () => {
  let sphere;
  let counter = 1;
  const canvasRef = React.useRef();
  let camera = undefined,
    renderer = undefined,
    scene = undefined;
  const animate = () => {
    counter++;
    if (renderer == undefined || scene == undefined) {
      return;
    }
    renderer.render(scene, camera);
    sphere.material.uniforms.time.value = (1 + Math.sin(counter * 0.01)) * 20;
    sphere.rotation.set(counter * 0.01, counter * 0.01, counter * 0.01);
    requestAnimationFrame(animate);
  };
  const cleanMaterial = (material) => {
    for (const key of Object.keys(material)) {
      const value = material[key];
      if (value && typeof value === "object" && "minFilter" in value) {
        value.dispose();
      }
    }
    material.dispose();
    material = undefined;
  };
  const cleanUp = () => {
    if (scene != undefined) {
      scene.traverse((object) => {
        if (!object["isMesh"]) return;
        object["geometry"].dispose();
        if (object["material"].isMaterial) {
          cleanMaterial(object["material"]);
        } else {
          for (const material of object["material"]) cleanMaterial(material);
        }
        object["geometry"] = undefined;
        object = undefined;
      });
      scene.children.forEach((model) => {
        scene.remove(model);
      });
    }
    if (renderer != undefined) {
      renderer.dispose();
      renderer && renderer.renderLists.dispose();
    }
  };

  React.useEffect(() => {
    const canvas = document.querySelector("#c") as HTMLCanvasElement;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      30
    );
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x660000, 1);
    renderer.outputEncoding = THREE.sRGBEncoding;

    camera.position.set(0, 0, 12);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const geometry = new THREE.SphereGeometry(1, 32, 16);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.5 },
      },
      vertexShader: _VS,
      fragmentShader: _FS,
      side: THREE.DoubleSide,
      transparent: true,
    });

    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    animate();
    return () => {
      cleanUp();
    };
  }, []);
  return (
    <div>
      <canvas id="c" ref={canvasRef}></canvas>
      <style jsx>
        {`
          #c {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};
export default CommonAnimation;
