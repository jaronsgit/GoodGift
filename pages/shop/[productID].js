import React, { useState, useEffect, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";
import {
  OrbitControls,
  Stage,
  Html,
  useProgress,
  Center as DreiCenter,
  Sky,
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

import { withAuthModal, withSignInRedirect } from "@/components/Auth";

import LinenFlower from "@/components/LinenFlower";

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

export default function ProductPage(props) {
  const ref = useRef();
  const router = useRouter();
  const auth = useAuth();
  const { productID } = router.query;

  return (
    <Center py={6} w="100%">
      <Box
        h="500px"
        w="80%"
        boxShadow="dark-lg"
        rounded="md"
        position="relative"
      >
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
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <NextLink href="/shop">
            <Button
              colorScheme={"teal"}
              bg={"teal.400"}
              // rounded={"full"}
              px={6}
              _hover={{
                bg: "teal.500",
              }}
            >
              Send Gift
            </Button>
          </NextLink>
        </Box>
      </Box>
      {/* <p>{productID}</p> */}
    </Center>
  );
}
