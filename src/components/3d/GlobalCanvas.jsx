import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function StarField({ count = 800, mouseRef }) {
  const pointsRef = useRef();

  // Generate random positions and colors for background particles
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;

      // Subtle editorial monochrome + gold/cyan dust
      const r = 0.5 + Math.random() * 0.5;
      const g = 0.5 + Math.random() * 0.5;
      const b = 0.7 + Math.random() * 0.3;
      col[i * 3] = r;
      col[i * 3 + 1] = g;
      col[i * 3 + 2] = b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    // Slow ambient rotation
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.x += delta * 0.015;

    // React to mouse if available
    if (mouseRef && mouseRef.current) {
      const targetX = mouseRef.current.x * 0.3;
      const targetY = mouseRef.current.y * 0.3;
      pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.05;
      pointsRef.current.position.y += (-targetY - pointsRef.current.position.y) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.45}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AmbientGeometry() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group position={[0, 0, -8]}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[4, 0.4, 64, 16]} />
        <meshBasicMaterial
          color="#222230"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}

export default function GlobalCanvas({ mouseRef }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#060608']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <StarField count={700} mouseRef={mouseRef} />
        <AmbientGeometry />
      </Canvas>
    </div>
  );
}

