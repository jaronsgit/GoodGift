import Head from "next/head";
import { Image } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import NextLink from "next/link";
import { Flex, Spacer } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AspectRatio } from "@chakra-ui/react";
// import styles from '../styles/Home.module.css'

import {
  Box,
  Heading,
  Container as ChakraContainer,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";

import Container from "@/components/Container";

import { useAuth } from "../firebase/auth";

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

export default function Home() {
  const auth = useAuth();

  return (
    <Container>
      <ChakraContainer maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "7xl" }}
            lineHeight={"110%"}
          >
            Save the Planet <br />
            <Text as={"span"} color={"teal.400"}>
              one gift at a time
            </Text>
          </Heading>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <NextLink href="/shop">
              <Button
                colorScheme={"teal"}
                bg={"teal.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "teal.500",
                }}
              >
                Get Started
              </Button>
            </NextLink>
            <Button variant={"link"} colorScheme={"black"} size={"sm"}>
              Learn more
            </Button>
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue("gray.800", "gray.300")}
                w={71}
                position={"absolute"}
                right={-71}
                top={"10px"}
              />
              <Text
                fontSize={"lg"}
                // fontFamily={"Caveat"}
                position={"absolute"}
                right={"-145px"}
                top={"-25px"}
                transform={"rotate(10deg)"}
              >
                Starting at R20 per gift
              </Text>
            </Box>
          </Stack>
        </Stack>
        <Center h="100px" color="black">
          <Heading>Our Mission</Heading>
        </Center>
        <Stack direction={["column", "row"]} spacing="24px">
          <Box borderRadius="full" boxSize="150px">
            <AspectRatio maxW="150px" ratio={1 / 1}>
              <Image
                boxSize="150px"
                borderRadius="full"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1562089727-90aa996a6f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80"
              />
            </AspectRatio>
          </Box>
          <Spacer />
          <Box boxSize="150px">
            <AspectRatio maxW="150px" ratio={1 / 1}>
              <Image
                boxSize="150px"
                borderRadius="full"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2970&q=80"
              />
            </AspectRatio>
          </Box>
          <Spacer />
          <Box boxSize="150px">
            <AspectRatio maxW="150px" ratio={1 / 1}>
              <Image
                boxSize="150px"
                borderRadius="full"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1494807143020-e958f7a1cc66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3087&q=80"
              />
            </AspectRatio>
          </Box>
          <Spacer />
          <Box boxSize="150px">
            <AspectRatio maxW="150px" ratio={1 / 1}>
              <Image
                boxSize="150px"
                borderRadius="full"
                objectFit="cover"
                src=" https://images.unsplash.com/photo-1624324378932-68e20f332982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
              />
            </AspectRatio>
          </Box>
          <Spacer />
          <Box boxSize="150px">
            <AspectRatio maxW="150px" ratio={1 / 1}>
              <Image
                boxSize="150px"
                borderRadius="full"
                objectFit="cover"
                src=" https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              />
            </AspectRatio>
          </Box>
        </Stack>
        <Stack
          bg={"teal.400"}
          py={16}
          px={8}
          spacing={{ base: 8, md: 10 }}
          align={"center"}
          direction={"column"}
          borderRadius="xl"
        >
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign={"center"}
            maxW={"3xl"}
            color="white"
          >
            Our mission is to fight climate change by providing people with a
            clean, friendly and convenient way to fight. Using GoodGift, you can
            send virtual 3D interactive gifts with 100% of the proceeds going to
            various climate action causes! Each sendable gift is associated with
            a non-profit organization that is tirelessly climbing this uphill
            climate change battle, and they can use your help!
          </Text>
        </Stack>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "7xl" }}
            lineHeight={"110%"}
          >
            Do good. <br />
            <Text as={"span"} color={"teal.400"}>
              Send a gift.
            </Text>
          </Heading>
        </Stack>
      </ChakraContainer>
    </Container>
  );
}
