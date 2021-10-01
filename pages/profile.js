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
} from "@chakra-ui/react";

import TransactionCard from "@/components/TransactionCard";

export default function Profile() {
  return (
    <Center py={6}>
      <Flex w="100%" flexDirection="column" alignItems="center">
        <Center w="100%">
          <Box
            maxW={"80%"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            // boxShadow={"2xl"}
            // rounded={"lg"}
            p={6}
            textAlign={"center"}
            border="1px"
            borderColor="gray.50"
          >
            <Avatar
              size={"xl"}
              src={
                "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              }
              alt={"Avatar Alt"}
              mb={4}
              pos={"relative"}
              //   _after={{
              //     content: '""',
              //     w: 4,
              //     h: 4,
              //     bg: "green.300",
              //     border: "2px solid white",
              //     rounded: "full",
              //     pos: "absolute",
              //     bottom: 0,
              //     right: 3,
              //   }}
            />
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              User Name
            </Heading>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              User Email
            </Text>
          </Box>
        </Center>
        <Stack
          w="80%"
          border="1px"
          borderColor="gray.50"
          p={2}
          spacing={2}
          mt={4}
        >
          <Heading>Sent</Heading>
          <TransactionCard type={"sent"} />
          <TransactionCard type={"sent"} />
          <TransactionCard type={"sent"} />
          <TransactionCard type={"sent"} />
        </Stack>
        <Stack
          w="80%"
          border="1px"
          borderColor="gray.50"
          p={2}
          spacing={2}
          mt={4}
        >
          <Heading>Received</Heading>
          <TransactionCard type={"received"} />
          <TransactionCard type={"received"} />
          <TransactionCard type={"received"} />
          <TransactionCard type={"received"} />
        </Stack>
      </Flex>
    </Center>
  );
}
