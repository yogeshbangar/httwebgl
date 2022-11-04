import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { flamingoGLBPath } from "../Assets";
import { updateMaterial } from "../util";
import { actionDeposited } from "../../redux/action";
import { useDispatch } from "react-redux";
const AnimationModel = (props: any) => {
  const dispatch = useDispatch();
  const watchGlb = useGLTF(flamingoGLBPath);
  const ref = useRef();
  let mixer: THREE.AnimationMixer;
  const clock = new THREE.Clock();
  React.useEffect(() => {
    if (watchGlb) {
      updateMaterial(watchGlb.scene);
      dispatch(actionDeposited(true));
      const mesh = watchGlb.scene.children[0];
      mixer = new THREE.AnimationMixer(mesh);
      mixer.clipAction(watchGlb.animations[0]).setDuration(1).play();
      console.log(watchGlb);
    }
  }, [watchGlb]);
  useFrame((state) => {
    const refCurrent: any = ref?.current;
    const t = state.clock.getElapsedTime();
    const delta = clock.getDelta();
    if (refCurrent) {
      refCurrent.rotation.x = 0.3 + Math.cos(t / 4) / 8;
      refCurrent.rotation.y = Math.sin(t / 4) ;
      refCurrent.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
      refCurrent.position.y = (1 + Math.sin(t / 1.5)) / 10;
      refCurrent.position.x = (1 + Math.sin(t / 1.5)) / 10;
      // refCurrent.position.z = -200+(t*10)%250;
    }
    mixer?.update(delta);
  });
  return (
    <group {...props} dispose={null}>
      <primitive
        ref={ref}
        scale={[0.03, 0.03, 0.03]}
        object={watchGlb.scene}
        dispose={null}
      />
    </group>
  );
};
export default AnimationModel;
useGLTF.preload(flamingoGLBPath);
