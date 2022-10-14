import * as THREE from "three";
export const setWireFrameMaterial = (model) => {
  if (!model) return;
  model.traverse((object) => {
    var material = new THREE.MeshNormalMaterial({
      wireframe: true,
      opacity:.02,
      transparent:true 
    });
    if (!object["isMesh"]) return;
    if (object["material"].isMaterial) {
      object["material"] = material;
    }
  });
};
