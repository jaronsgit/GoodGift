import React, { useState } from "react";
import {
  Flex,
  Spacer,
  Heading,
  Button,
  Box,
  Text,
  Link,
  Center,
  Stack,
  LinkBox,
  Grid,
  Divider,
  StackDivider,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../firebase/auth";

export default function NavBar(props) {
  const auth = useAuth();
  const router = useRouter();

  return (
    <Flex
      paddingRight={8}
      paddingLeft={8}
      paddingTop={4}
      paddingBottom={4}
      backgroundColor={"gray.50"}
    >
      <NextLink href="/">
        <Box
          p="2"
          _hover={{
            bg: "gray.100",
            cursor: "pointer",
          }}
          borderRadius={2}
        >
          <Heading size="md">Beneflora</Heading>
          {/* <Button>Beneflora</Button> */}
        </Box>
      </NextLink>
      <Spacer />
      <Box>
        {!auth.userId && (
          <NextLink href="/signup">
            <Button colorScheme="teal" mr="4">
              Sign Up
            </Button>
          </NextLink>
        )}
        {auth.userId ? (
          router.pathname == "/profile/[userID]" ? (
            <NextLink href={`/`}>
              <Button colorScheme="teal" onClick={() => auth.signout()}>
                Logout
              </Button>
            </NextLink>
          ) : (
            <NextLink href={`/profile/${auth.userId}`}>
              <Button colorScheme="teal">View Profile</Button>
            </NextLink>
          )
        ) : (
          <NextLink href="/signin">
            <Button colorScheme="teal">Log in</Button>
          </NextLink>
        )}
      </Box>
    </Flex>
  );
}
