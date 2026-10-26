import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function StarShield({ hovered }) {
  const starRef = useRef();
  const ringRef = useRef();
  const gemRef = useRef();

  useFrame((state, delta) => {
    const speed = hovered ? 2.0 : 0.8;
    if (starRef.current) {
      starRef.current.rotation.z += delta * 0.3 * speed;
      starRef.current.rotation.y += delta * 0.4 * speed;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x -= delta * 0.5 * speed;
      ringRef.current.rotation.y -= delta * 0.2 * speed;
    }
    if (gemRef.current) {
      gemRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group>
      {/* 3D Faceted Octahedron / Cinema Star Core */}
      <mesh ref={starRef}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#f8fafc"
          metalness={0.95}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>

      {/* Outer Wireframe facets */}
      <mesh>
        <octahedronGeometry args={[1.3, 0]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={hovered ? 0.6 : 0.3}
        />
      </mesh>

      {/* Signature Turquoise Nucleus (Salman's iconic turquoise stone) */}
      <mesh ref={gemRef}>
        <dodecahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#06b6d4"
          metalness={0.5}
          roughness={0.2}
          emissive="#0891b2"
          emissiveIntensity={hovered ? 0.9 : 0.4}
        />
      </mesh>

      {/* Orbiting Halo Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.7, 0.03, 16, 64]} />
        <meshStandardMaterial
          color="#fbbf24"
          metalness={0.9}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Celestial Dust Particles */}
      <points>
        <sphereGeometry args={[2.2, 28, 28]} />
        <pointsMaterial
          size={0.03}
          color="#67e8f9"
          transparent
          opacity={0.55}
        />
      </points>
    </group>
  );
}

export default function Salman3D({ hovered = false, className = "h-64 w-full" }) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[6, 8, 4]} intensity={2.4} color="#f0f9ff" />
        <pointLight position={[-4, -3, 2]} intensity={2.2} color="#06b6d4" />
        <pointLight position={[3, -2, -2]} intensity={1.5} color="#eab308" />
        <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1.1}>
          <StarShield hovered={hovered} />
        </Float>
      </Canvas>
    </div>
  );
}

