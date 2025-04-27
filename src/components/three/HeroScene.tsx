
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Sparkles, Environment, CameraShake, PerspectiveCamera } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { Group } from "three";
import * as THREE from "three";

// A floating sphere mesh
const AnimatedSphere = ({ position, radius, color, speed, offset }: any) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    ref.current.position.y = position[1] + Math.sin(t) * 0.1;
    ref.current.rotation.x = Math.sin(t / 2) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
  });

  return (
    <mesh ref={ref} position={position} castShadow>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.1} 
        metalness={0.8}
        envMapIntensity={1}
      />
    </mesh>
  );
};

// Animated grid
const AnimatedGrid = () => {
  const gridRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    gridRef.current.rotation.x = Math.sin(t / 10) / 20;
    gridRef.current.rotation.z = Math.sin(t / 20) / 30;
  });
  
  return (
    <group ref={gridRef} position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[30, 30, "#ffffff", "#333333"]} />
    </group>
  );
};

const Scene = () => {
  const groupRef = useRef<Group>(null!);

  useEffect(() => {
    if (!groupRef.current) return;
    
    // Initial positioning
    groupRef.current.rotation.x = -0.1;
    groupRef.current.position.y = -0.5;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      // Subtle rotation animation
      groupRef.current.rotation.y = Math.sin(t / 10) / 10;
    }
  });

  const spheres = [
    { position: [-2, 0, 1], radius: 0.4, color: "#ffffff", speed: 0.5, offset: 0 },
    { position: [2, -0.3, 0], radius: 0.6, color: "#cccccc", speed: 0.7, offset: 2 },
    { position: [0, 0.5, -1], radius: 0.3, color: "#888888", speed: 0.6, offset: 4 },
    { position: [-1.5, -0.5, -2], radius: 0.25, color: "#555555", speed: 0.4, offset: 1 },
    { position: [1.5, 0.2, -1.5], radius: 0.35, color: "#aaaaaa", speed: 0.3, offset: 3 },
  ];

  return (
    <>
      {/* Main scene content */}
      <group ref={groupRef}>
        {spheres.map((sphere, index) => (
          <AnimatedSphere key={index} {...sphere} />
        ))}
      </group>
      
      <AnimatedGrid />
      
      {/* Environment effects */}
      <Sparkles 
        count={100}
        scale={12}
        size={1}
        speed={0.3}
        color={"#ffffff"}
        opacity={0.1}
      />
      
      {/* Camera and lighting */}
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} color="#0066FF" />
      <Environment preset="night" />
      
      {/* Subtle camera shake for more dynamic feel */}
      <CameraShake 
        yawFrequency={0.1} 
        pitchFrequency={0.1} 
        rollFrequency={0.1} 
        intensity={0.1} 
      />
    </>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas shadows>
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroScene;
