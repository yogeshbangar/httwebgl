import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Environment, Loader } from "@react-three/drei";
import Model from "./Model";
import { environmentImagePath } from "../Assets";
import { SpaceDust } from "./SpaceDust";
import SkullPlan from "./SkulPlane";
import Globe from "./Globe";
const FiberCanvas = () => {
  return (
    <>
      <React.Suspense fallback={null}>
        <Canvas
          style={{ position: "fixed", zIndex: "-1" }}
          gl={{ antialias: true }}
        >
          <color attach="background" args={[0, 0, 0]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <SkullPlan />
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <React.Suspense>
              <Model />
            </React.Suspense>
          </PresentationControls>
          <Environment files={environmentImagePath} />
          <SpaceDust count={1000} />
        </Canvas>
      </React.Suspense>
    </>
  );
};
export default FiberCanvas;
