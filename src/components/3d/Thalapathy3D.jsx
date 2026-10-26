import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function MonolithScene({ hovered }) {
  const groupRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const coreRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const speed = hovered ? 1.8 : 0.8;
    groupRef.current.rotation.y += delta * 0.4 * speed;

    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * 0.5 * speed;
      ringRef1.current.rotation.z += delta * 0.3 * speed;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y -= delta * 0.6 * speed;
      ringRef2.current.rotation.x -= delta * 0.2 * speed;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.6 * speed;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Golden Monolith Pillar */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.7, 2.6, 6]} />
        <meshStandardMaterial
          color={hovered ? "#f59e0b" : "#d97706"}
          metalness={0.9}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Outer Wireframe Cage */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.65, 0.85, 2.8, 6]} />
        <meshBasicMaterial
          color="#fbbf24"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Orbiting Golden Ring 1 */}
      <mesh ref={ringRef1} position={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.03, 16, 64]} />
        <meshStandardMaterial
          color="#fef08a"
          metalness={0.95}
          roughness={0.1}
          emissive="#b45309"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Orbiting Crimson / Tamil Nadu Ring 2 */}
      <mesh ref={ringRef2} position={[0, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#dc2626"
          metalness={0.8}
          roughness={0.3}
          wireframe
        />
      </mesh>

      {/* Embers / Particles */}
      <points>
        <sphereGeometry args={[2.2, 24, 24]} />
        <pointsMaterial
          size={0.03}
          color="#fde047"
          transparent
          opacity={0.6}
        />
      </points>
    </group>
  );
}

export default function Thalapathy3D({ hovered = false, className = "h-64 w-full" }) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={2.5} color="#fffbeb" />
        <pointLight position={[-4, -3, 2]} intensity={2} color="#dc2626" />
        <pointLight position={[3, 2, -2]} intensity={2} color="#f59e0b" />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <MonolithScene hovered={hovered} />
        </Float>
      </Canvas>
    </div>
  );
}

