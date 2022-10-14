import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { basePath } from "../Assets";

const Globe = (props) => {
  const mesh: THREE.Mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  const texture = useTexture({
    map: `${basePath}3D/earth.jpg`,
    normalMap: `${basePath}3D/earthNormal.jpg`,
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 32, 16]} />
      <meshStandardMaterial {...texture} roughness={1} />
    </mesh>
  );
};
export default Globe;
