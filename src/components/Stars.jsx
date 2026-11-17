import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

// Star Component
const Star = ({ position, size }) => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01)); // Rotation animation
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial emissive="#ffffff" emissiveIntensity={Math.random() * 0.9} />
    </mesh>
  );
};

// Create Random Stars
const RandomStars = () => {
  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 200; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      const size = Math.random() * 0.5 + 0.1;
      starArray.push(<Star key={i} position={[x, y, z]} size={size} />);
    }
    return starArray;
  }, []);
  return <>{stars}</>;
};

// Asteroid Belt Component
const Asteroid = ({ position, size }) => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh} position={position}>
      <dodecahedronGeometry args={[size, 1]} />
      <meshStandardMaterial color="#888888" metalness={0.6} roughness={0.8} />
    </mesh>
  );
};

// Generate random asteroids
const Asteroids = () => {
  const asteroids = useMemo(() => {
    const asteroidArray = [];
    for (let i = 0; i < 100; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      const size = Math.random() * 2 + 0.5;
      asteroidArray.push(<Asteroid key={i} position={[x, y, z]} size={size} />);
    }
    return asteroidArray;
  }, []);
  return <>{asteroids}</>;
};

// Planet Component
const Planet = ({ texturePath, position, size }) => {
  const texture = useLoader(TextureLoader, texturePath);
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.002)); // Slow rotation for planets
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const StarfieldEffect = () => {
  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Background Stars */}
      <Stars radius={300} depth={60} count={10000} factor={10} saturation={0} fade speed={2} />

      {/* Random Stars */}
      <RandomStars />

      {/* Asteroids */}
      <Asteroids />

      {/* Planet Example */}
      <Planet texturePath="/public/imgs/pexels-pixabay-41953.jpg" position={[50, 50, -500]} size={50} />
    </Canvas>
  );
};

export default StarfieldEffect;
