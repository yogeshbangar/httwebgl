import React from "react";
import * as THREE from "three";
const CommonAnimation = () => {
  const canvasRef = React.useRef();
  const [state, setState] = React.useState({
    camera: undefined,
    renderer: undefined,
    scene: undefined,
  });
  const animate = () => {
    if (state.renderer == undefined || state.scene == undefined) {
      return;
    }
     state.renderer.render(state.scene, state.camera);
    requestAnimationFrame(animate);
  };
  const cleanUp = () => {
    console.log("~~~~~~~cleanUp~~~~~~~");
  };
  React.useEffect(() => {
    const canvas = document.querySelector("#c") as HTMLCanvasElement;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      30
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.outputEncoding = THREE.sRGBEncoding;

    camera.position.set(0, 5, 12);
    camera.lookAt(new THREE.Vector3(0, 0.5, 0));
    setState({ ...state, scene: scene, camera: camera, renderer: renderer });
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
