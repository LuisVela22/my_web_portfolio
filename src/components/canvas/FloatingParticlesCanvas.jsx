import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingParticles = () => {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 6;
    }
    return positions;
  }, []);

  const color = new THREE.Color();

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const t = clock.getElapsedTime();
      pointsRef.current.rotation.y = t * 0.05;
      pointsRef.current.material.color.setHSL((t * 0.05) % 1, 0.6, 0.6);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        sizeAttenuation
        transparent
        depthWrite={false}
        // color={color}
      />
    </points>
  );
};

const FloatingParticlesCanvas = () => {
  return (
    <div className="w-full h-screen fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Suspense fallback={null}>
          <FloatingParticles />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingParticlesCanvas;
