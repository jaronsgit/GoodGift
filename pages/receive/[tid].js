import React, { useState, useEffect, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Html,
  useProgress,
  Center as DreiCenter,
  Sky,
} from "@react-three/drei";
import { DoubleSide } from "three";
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

import LinenFlower from "@/components/LinenFlower";

import { useAuth, getTransactionData } from "../../firebase/auth";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} %</Html>;
}

function GreenSquare() {
  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[20, 20, 20]}
    >
      <planeBufferGeometry />
      <meshBasicMaterial color="green" side={DoubleSide} />
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
            <Canvas
              shadows
              camera={{ fov: 50, distance: 50, position: [50, 50, 50] }}
              style={{ borderRadius: "8px" }}
            >
              <Suspense fallback={<Loader />}>
                <ambientLight />
                <Sky
                  distance={150} // Camera distance (default=450000)
                  sunPosition={[0, 1, 0]} // Sun position normal (default=[0, 1, 0])
                />
                <LinenFlower />
                <GreenSquare />
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
