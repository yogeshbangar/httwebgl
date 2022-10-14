import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { watchGLBPath } from "../Assets";
import { setWireFrameMaterial } from "../util";

const Model = (props) => {
  const watchGlb = useGLTF(watchGLBPath);
  console.log(watchGlb);
  const ref = useRef();
  React.useEffect(() => {
    if (watchGlb) {
      setWireFrameMaterial(watchGlb.scene);
    }
  }, [watchGlb]);
  useFrame((state) => {
    const refCurrent: THREE.Mesh = ref?.current;
    const t = state.clock.getElapsedTime();
    if (refCurrent) {
      refCurrent.rotation.x = 0.3 + Math.cos(t / 4) / 8;
      refCurrent.rotation.y = Math.sin(t / 4) / 8;
      refCurrent.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
      refCurrent.position.y = -1 + (1 + Math.sin(t / 1.5)) / 10;
    }
  });
  return (
    <group {...props} dispose={null}>
      <primitive
        ref={ref}
        scale={[30, 30, 30]}
        object={watchGlb.scene}
        dispose={null}
      />
    </group>
  );
};
export default Model;
useGLTF.preload(watchGLBPath);
