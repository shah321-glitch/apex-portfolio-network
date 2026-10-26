import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Procedural 3D Paper Plane Geometry
function PaperPlane({ hovered }) {
  const meshRef = useRef();

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    // Vertices of an origami paper plane
    const vertices = new Float32Array([
      // Main wing left
      0, 0, 1.2,     -1.0, 0.2, -0.8,    0, 0.4, -0.6,
      // Main wing right
      0, 0, 1.2,     0, 0.4, -0.6,       1.0, 0.2, -0.8,
      // Under keel left
      0, 0, 1.2,     0, -0.3, -0.7,      -0.2, 0, -0.7,
      // Under keel right
      0, 0, 1.2,     0.2, 0, -0.7,       0, -0.3, -0.7,
      // Back fold
      0, 0.4, -0.6,  -1.0, 0.2, -0.8,    -0.2, 0, -0.7,
      0, 0.4, -0.6,   0.2, 0, -0.7,       1.0, 0.2, -0.8,
    ]);
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geom.computeVertexNormals();
    return geom;
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const speed = hovered ? 2.5 : 1.0;
    meshRef.current.rotation.y += delta * 0.5 * speed;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.15;
  });

  return (
    <group ref={meshRef}>
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color="#22d3ee"
          metalness={0.9}
          roughness={0.15}
          side={THREE.DoubleSide}
          emissive="#0284c7"
          emissiveIntensity={hovered ? 0.6 : 0.25}
        />
      </mesh>
      {/* Wireframe overlay */}
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function DurovSphere({ hovered }) {
  const outerSphereRef = useRef();
  const innerSphereRef = useRef();

  useFrame((state, delta) => {
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.x += delta * 0.2;
      outerSphereRef.current.rotation.y += delta * 0.3;
    }
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y -= delta * 0.4;
      innerSphereRef.current.rotation.z -= delta * 0.2;
    }
  });

  return (
    <group>
      {/* Outer Cryptographic Wireframe Icosahedron */}
      <mesh ref={outerSphereRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={hovered ? 0.5 : 0.25}
        />
      </mesh>

      {/* Inner Node Sphere */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshBasicMaterial
          color="#0284c7"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Encrypted Data Particles */}
      <points>
        <sphereGeometry args={[2.0, 32, 32]} />
        <pointsMaterial
          size={0.025}
          color="#7dd3fc"
          transparent
          opacity={0.5}
        />
      </points>

      {/* Floating 3D Paper Plane */}
      <PaperPlane hovered={hovered} />
    </group>
  );
}

export default function Durov3D({ hovered = false, className = "h-64 w-full" }) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 4]} intensity={2.2} color="#e0f2fe" />
        <pointLight position={[-4, -2, 2]} intensity={2.5} color="#0284c7" />
        <pointLight position={[3, 3, -3]} intensity={1.8} color="#06b6d4" />
        <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
          <DurovSphere hovered={hovered} />
        </Float>
      </Canvas>
    </div>
  );
}

