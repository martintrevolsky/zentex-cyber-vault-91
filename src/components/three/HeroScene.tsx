
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  useGLTF, 
  Sparkles, 
  Environment, 
  CameraShake, 
  PerspectiveCamera,
  MeshDistortMaterial,
  Float
} from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { Group, Mesh, MeshBasicMaterial } from "three";
import * as THREE from "three";

// A floating sphere mesh with distortion
const AnimatedSphere = ({ position, radius, color, speed, offset }: any) => {
  const ref = useRef<THREE.Mesh>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    ref.current.position.y = position[1] + Math.sin(t) * 0.2;
    ref.current.rotation.x = Math.sin(t / 2) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    
    // Subtle pulse effect
    meshRef.current.scale.x = 1 + Math.sin(t) * 0.03;
    meshRef.current.scale.y = 1 + Math.sin(t + 0.3) * 0.03;
    meshRef.current.scale.z = 1 + Math.sin(t + 0.5) * 0.03;
  });

  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.5} 
      floatIntensity={0.3}
    >
      <mesh ref={ref} position={position} castShadow>
        <mesh ref={meshRef}>
          <sphereGeometry args={[radius, 64, 64]} />
          <MeshDistortMaterial
            color={color}
            roughness={0.1}
            metalness={0.8}
            envMapIntensity={1.5}
            distort={0.2}
            speed={0.5}
          />
        </mesh>
      </mesh>
    </Float>
  );
};

// Animated grid with glow effect
const AnimatedGrid = () => {
  const gridRef = useRef<THREE.Group>(null!);
  const gridMaterial = useRef<MeshBasicMaterial>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    gridRef.current.rotation.x = Math.sin(t / 10) / 20;
    gridRef.current.rotation.z = Math.sin(t / 20) / 30;
    
    if (gridMaterial.current) {
      gridMaterial.current.opacity = 0.3 + Math.sin(t / 2) * 0.1;
    }
  });
  
  return (
    <group ref={gridRef} position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[40, 40, "#3b82f6", "#1e293b"]} />
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshBasicMaterial 
          color="#0f172a"
          transparent={true}
          opacity={0.3}
          ref={gridMaterial}
        />
      </mesh>
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
      // Subtle breathing effect
      groupRef.current.position.y = -0.5 + Math.sin(t / 5) * 0.05;
    }
  });

  const spheres = [
    { position: [-2, 0, 1], radius: 0.4, color: "#ffffff", speed: 0.5, offset: 0 },
    { position: [2, -0.3, 0], radius: 0.6, color: "#efefef", speed: 0.7, offset: 2 },
    { position: [0, 0.5, -1], radius: 0.3, color: "#cccccc", speed: 0.6, offset: 4 },
    { position: [-1.5, -0.5, -2], radius: 0.25, color: "#999999", speed: 0.4, offset: 1 },
    { position: [1.5, 0.2, -1.5], radius: 0.35, color: "#aaaaaa", speed: 0.3, offset: 3 },
    { position: [0.8, -0.3, 0.5], radius: 0.2, color: "#0066FF", speed: 0.8, offset: 5 },
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
        count={200}
        scale={15}
        size={1.5}
        speed={0.2}
        color={"#ffffff"}
        opacity={0.1}
      />
      
      {/* Camera and lighting */}
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} castShadow />
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
