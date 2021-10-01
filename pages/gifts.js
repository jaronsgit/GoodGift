import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Html,
  useProgress,
  Center,
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
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
          </Suspense>
          <OrbitControls ref={ref} autoRotate />
        </Canvas>
      </div>
    </Container>
  );
}
