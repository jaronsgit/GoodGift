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

export default function NavBar(props) {
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
      <Box p="2"
          borderRadius={2}>
        <Text> You are <b>{false ? 'currently' : 'not'}</b> logged in.</Text>
      </Box>
      <Spacer/>
     
      <Box>
      <NextLink href="/signup">
        <Button colorScheme="teal" mr="4">
          Sign Up
        </Button>
        </NextLink>
        <NextLink href="/signin">
        <Button colorScheme="teal">Log in</Button>
        </NextLink>
      </Box>
    </Flex>
  );
}
