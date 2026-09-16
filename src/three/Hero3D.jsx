import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Smooth camera rig with gentle pointer inertia
const RigCamera = ({ enabled }) => {
  const { camera, pointer } = useThree();
  useFrame(() => {
    if (!enabled) return;
    camera.position.x += (pointer.x * 0.45 - camera.position.x) * 0.025;
    camera.position.y += (pointer.y * 0.3 - camera.position.y) * 0.025;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

// Elegant floating cyber ring placed far off in peripheral space (never blocks text)
const AmbientFloatingOrb = ({ position, color, size, speed }) => {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * speed * 0.15;
    meshRef.current.rotation.y += delta * speed * 0.2;
  });

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 24, 24]} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>
    </Float>
  );
};

// Subtle ambient particle dust field with gentle organic drift
const SoftParticleField = ({ count = 90, enabled }) => {
  const pointsRef = useRef();
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#d946ef'), // Soft Magenta
      new THREE.Color('#a855f7'), // Soft Violet
      new THREE.Color('#00f0ff'), // Cyber Cyan
      new THREE.Color('#38bdf8'), // Sky
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!enabled || !pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.012;
    pointsRef.current.rotation.x += delta * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Clean, sophisticated 3D Scene (No heavy wireframes colliding with text!)
const CleanCyberScene = ({ enabled }) => {
  return (
    <>
      <RigCamera enabled={enabled} />
      {/* Deep, crisp starry backdrop */}
      <Stars
        radius={80}
        depth={40}
        count={enabled ? 1600 : 600}
        factor={1.8}
        saturation={0.3}
        fade
        speed={enabled ? 0.4 : 0}
      />
      {/* Subtle organic ambient particles */}
      <SoftParticleField count={enabled ? 80 : 30} enabled={enabled} />

      {/* Gentle floating ambient elements pushed to the far sides */}
      {enabled && (
        <>
          <AmbientFloatingOrb position={[6.5, 2.2, -4]} color="#d946ef" size={1.2} speed={0.8} />
          <AmbientFloatingOrb position={[-6.8, -2.5, -4]} color="#00f0ff" size={1.0} speed={0.6} />
        </>
      )}
    </>
  );
};

const Hero3D = ({ reducedMotion }) => {
  return (
    <Canvas
      className="hero-3d-canvas"
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 5.5], fov: 50 }}
      frameloop={reducedMotion ? 'demand' : 'always'}
    >
      <Suspense fallback={null}>
        <CleanCyberScene enabled={!reducedMotion} />
      </Suspense>
    </Canvas>
  );
};

export default Hero3D;
