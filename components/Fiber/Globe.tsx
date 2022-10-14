import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Globe = (props) => {
  const mesh: THREE.Mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));

  const texture = useTexture({
    map: "https://hututusoftwares.com/3D/earth.jpg",
    normalMap: "https://hututusoftwares.com/3D/earthNormal.jpg",
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 32, 16]} />
      <meshStandardMaterial {...texture} roughness={1} />
    </mesh>
  );
};
export default Globe;
