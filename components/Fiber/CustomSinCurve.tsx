import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";
const CustomSinCurve = () => {
  const vertexShader = `
    uniform float time;
    varying vec3 pos;
    void main()	{
      pos = position;
      vec3 p = position;
      //p.y = sin(p.x * .1 - time) * cos(p.z * .1 - time) * 5.;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0);
    }
  `;
  const fragmentShader = `
    /* based on http://madebyevan.com/shaders/grid/ */
  
    varying vec3 pos;
    uniform float time;
    
    float line(float width, vec3 step){
      vec3 tempCoord = pos / step;
      
      vec2 coord = tempCoord.xz;

      vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord * width);
      float line = min(grid.x, grid.y);
      
      return 1. - min(line, 1.0);
    }
    
    void main() {
      float v = line(1., vec3(1.)) + line(1.5, vec3(10.));      
      vec3 c = v * vec3(0., 1., 1.) * (sin(time * 5. - length(pos.xz) * .5) * .5 + .5);
      c = mix(vec3(0.0), c, v);
      
      gl_FragColor = vec4(c, 1.0);
    }
  `;
  const [curve] = useState(() => {
    // Create an empty array to stores the points
    let points = [];
    // Define points along Z axis
    for (let i = 0; i < 5; i += 1) {
      const t = i * 0.1;
      const tx = t * 3 - 1.5;
      const ty = Math.sin(2 * Math.PI * t);
      const tz = 0;

      points.push(new THREE.Vector3(tx, ty, tz));
    }
    return new THREE.CatmullRomCurve3(points);
  });

  var tubeGeometry = new THREE.TubeGeometry(curve, 128, 1.12, 32, false);
  const red = new THREE.MeshLambertMaterial({
    color: "red",
    side: THREE.DoubleSide,
  });
  var material = new THREE.ShaderMaterial({
    uniforms: {
      time: {
        value: 0,
      },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    extensions: { derivatives: true },
  });
  const clock = new THREE.Clock();
  let time = 0;
  let delta = 0;
  useFrame((state) => {
    delta = clock.getDelta();
    time += delta;
    material.uniforms.time.value = time;
  });
  const sphere = new THREE.SphereGeometry(1, 28, 28);
  return <mesh geometry={tubeGeometry} material={material} />;
};
export default CustomSinCurve;
