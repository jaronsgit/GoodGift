import React, { useState, useEffect, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Html,
  useProgress,
  Center as DreiCenter,
} from "@react-three/drei";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Flex,
  Image,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";

import NextLink from "next/link";

import { useAuth, getTransactionData } from "../../firebase/auth";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} %</Html>;
}

function BoxObject(props) {
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

export default function Receive(props) {
  const ref = useRef();
  const router = useRouter();
  const auth = useAuth();
  const { tid } = router.query;
  const [transactionData, setTransactionData] = useState(null);

  useEffect(() => {
    async function fetchTransactionData() {
      let transaction = await getTransactionData(tid);
      setTransactionData(transaction);
    }

    fetchTransactionData();
  }, []);

  console.log(transactionData);

  const transaction = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    message: "Hello this is a message",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
    sender_email: "test@email.com",
  };

  return (
    <Center py={6} w="100%">
      <Flex
        w="100%"
        flexDirection="column"
        alignItems="center"
        // style={{ border: "1px solid red" }}
      >
        <Box
          maxW="2xl"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          w="80%"
          //   style={{ border: "1px solid red" }}
        >
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
                <BoxObject position={[-1.2, 0, 0]} />
              </Suspense>
              <OrbitControls ref={ref} autoRotate />
            </Canvas>
          </div>

          <Box p="6">
            <Stack direction="row">
              <Box>Sender: </Box>
              {transactionData ? (
                <Badge ml={1}>{transactionData.sender}</Badge>
              ) : (
                <Spinner />
              )}
            </Stack>
            <Stack direction="row" mt={2}>
              <Box>Receiver: </Box>
              {transactionData ? (
                <Badge ml={1}>{transactionData.receiver}</Badge>
              ) : (
                <Spinner />
              )}
            </Stack>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {transactionData ? (
                <Badge ml={1}>{transactionData.message}</Badge>
              ) : (
                <Spinner />
              )}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Center>
  );
}
