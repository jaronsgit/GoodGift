import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import regeneratorRuntime from "regenerator-runtime";
import { DoubleSide } from "three";
import {
  OrbitControls,
  Stage,
  Html,
  useProgress,
  Center,
  Sky
} from "@react-three/drei";

import Container from "@/components/Container";
import Rose from "@/components/Rose";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} %</Html>;
}

function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function GreenSquare() {
  return (
    // The mesh is at the origin
    // Since it is inside a group, it is at the origin
    // of that group
    // It's rotated by 90 degrees along the X-axis
    // This is because, by default, planes are rendered
    // in the X-Y plane, where Y is the up direction
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
      {/*
        The thing that gives the mesh its shape
        In this case the shape is a flat plane
      */}
      <planeBufferGeometry />
      {/*
        The material gives a mesh its texture or look.
        In this case, it is just a uniform green
      */}
      <meshBasicMaterial color="green" side={DoubleSide} />
    </mesh>
  );
}


export default function Gifts() {
  const ref = useRef();
  return (
    <Container>
      <div style={{ border: "0px solid red ", height: "500px" }}>
        <Canvas shadows camera={{ fov: 50 }}>
          <Suspense fallback={<Loader />}>
            {/* <Stage
              controls={ref}
              //   preset="rembrandt"
              //   intensity={1}
              //   environment="city"
            >
              <Center>
                <Rose />
              </Center>
            </Stage> */}
            <ambientLight />
            <Sky
        distance={20} // Camera distance (default=450000)
        sunPosition={[0, 1, 0]} // Sun position normal (default=[0, 1, 0])
      />
            <pointLight position={[10, 10, 10]} />
            <GreenSquare />
            <Box position={[-15, 0, 0]} />
          </Suspense>
          <OrbitControls ref={ref} autoRotate />
        </Canvas>
      </div>
    </Container>
  );
}
