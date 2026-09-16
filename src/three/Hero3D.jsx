import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const RigCamera = ({ enabled }) => {
  const { camera, pointer } = useThree();
  useFrame(() => {
    if (!enabled) return;
    camera.position.x += (pointer.x * 0.75 - camera.position.x) * 0.035;
    camera.position.y += (pointer.y * 0.45 - camera.position.y) * 0.035;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

const RotatingCyberShape = ({ enabled, position, geometry, color, wireframe = true, speed = 1, rotationAxis = [1, 1, 0] }) => {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (!enabled || !meshRef.current) return;
    meshRef.current.rotation.x += delta * speed * 0.25 * rotationAxis[0];
    meshRef.current.rotation.y += delta * speed * 0.35 * rotationAxis[1];
    meshRef.current.rotation.z += delta * speed * 0.2 * (rotationAxis[2] || 0);
  });

  return (
    <Float
      speed={enabled ? 1.6 * speed : 0}
      rotationIntensity={enabled ? 0.8 : 0}
      floatIntensity={enabled ? 1.2 : 0}
    >
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshBasicMaterial
          color={color}
          wireframe={wireframe}
          transparent
          opacity={0.65}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
};

// Subtle ambient particle dust field
const AmbientParticleField = ({ count = 120, enabled }) => {
  const pointsRef = useRef();
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#d946ef'), // Magenta
      new THREE.Color('#a855f7'), // Violet
      new THREE.Color('#00f0ff'), // Cyan
      new THREE.Color('#60a5fa'), // Sky Blue
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!enabled || !pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.02;
    pointsRef.current.rotation.x += delta * 0.01;
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
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const CyberHeroScene = ({ enabled }) => {
  const shapes = useMemo(
    () => [
      {
        position: [4.2, 1.8, -2.5],
        geometry: <torusKnotGeometry args={[0.9, 0.24, 100, 16]} />,
        color: '#d946ef', // Electric Magenta
        speed: 0.9,
        rotationAxis: [1, 0.8, 0.4],
      },
      {
        position: [-4.4, -1.2, -3.2],
        geometry: <icosahedronGeometry args={[1.3, 1]} />,
        color: '#00f0ff', // Cyber Cyan
        speed: 0.7,
        rotationAxis: [0.6, 1, 0.3],
      },
      {
        position: [2.5, -2.4, -3],
        geometry: <octahedronGeometry args={[0.7, 0]} />,
        color: '#a855f7', // Electric Violet
        speed: 1.1,
        rotationAxis: [1, 0.5, 0.8],
      },
      {
        position: [-2.2, 2.6, -4],
        geometry: <ringGeometry args={[0.6, 0.85, 32]} />,
        color: '#38bdf8', // Neon Sky
        speed: 0.8,
        rotationAxis: [0.3, 0.8, 1],
      },
    ],
    []
  );

  return (
    <>
      <RigCamera enabled={enabled} />
      <Stars
        radius={70}
        depth={35}
        count={enabled ? 2800 : 800}
        factor={2.4}
        saturation={0.5}
        fade
        speed={enabled ? 0.7 : 0}
      />
      <AmbientParticleField count={enabled ? 160 : 50} enabled={enabled} />
      {shapes.map((shape, i) => (
        <RotatingCyberShape key={i} enabled={enabled} {...shape} />
      ))}
    </>
  );
};

const Hero3D = ({ reducedMotion }) => {
  return (
    <Canvas
      className="hero-3d-canvas"
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 6], fov: 55 }}
      frameloop={reducedMotion ? 'demand' : 'always'}
    >
      <Suspense fallback={null}>
        <CyberHeroScene enabled={!reducedMotion} />
      </Suspense>
    </Canvas>
  );
};

export default Hero3D;
