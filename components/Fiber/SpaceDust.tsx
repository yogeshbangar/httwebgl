import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import Random from "canvas-sketch-util/random";

export function SpaceDust({ count }) {
  const mesh: THREE.mesh = useRef();
  const light = useRef();

  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    const range = 5;
    for (let i = 0; i < count; i++) {
      const time = Random.range(0, 100);
      const factor = Random.range(2 * range, 12 * range);
      const speed = Random.range(0.01, 0.015) / 2;
      const x = Random.range(-5 * range, 5 * range);
      const y = Random.range(-5 * range, 5 * range);
      const z = Random.range(-5 * range, 5 * range);

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    particles.forEach((particle, index) => {
      let { factor, speed, x, y, z } = particle;
      const t = (particle.time += speed);
      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        -10 + z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      const s = Math.cos(t);
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(index, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronBufferGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="#101010" />
      </instancedMesh>
    </>
  );
}
