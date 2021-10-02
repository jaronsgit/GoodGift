import React from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Model = () => {
  const { scene } = useGLTF("/rose.glb");
  return <primitive object={scene} />;
};

export default function ThreeD() {
  return (
    <Canvas>
      <React.Suspense fallback={null}>
        <Model />
        {/* <mesh rotation={[2, 0, 2]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} /> */}
      </React.Suspense>
    </Canvas>
  );
}
