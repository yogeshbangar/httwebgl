import { WebGLRenderTarget, Vector2 } from "three";
import { useEffect, useMemo } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { extend, useFrame, useThree } from "@react-three/fiber";
extend({ EffectComposer, UnrealBloomPass, RenderPass });

function SkullPlan() {
  const { gl, scene, camera, size } = useThree();

  const [base, final] = useMemo(() => {
    const renderScene = new RenderPass(scene, camera);
    const offscreenTarget = new WebGLRenderTarget(size.width, size.height);

    const comp = new EffectComposer(gl, offscreenTarget);
    comp.renderToScreen = false;
    comp.addPass(renderScene);

    const finalComposer = new EffectComposer(gl);
    const bloomPass = new UnrealBloomPass(
      new Vector2(1301, window.innerHeight),
      0.7,
      0.4,
      0.85
    );
    finalComposer.addPass(renderScene);
    finalComposer.addPass(bloomPass);
    return [comp, finalComposer];
  }, []);

  useEffect(() => {
    base.setSize(size.width, size.height);
    final.setSize(size.width, size.height);
  }, [base, final, size]);

  useFrame(() => {
    base.render();
    final.render();
  }, 1);

  return null;
}

export default SkullPlan;
