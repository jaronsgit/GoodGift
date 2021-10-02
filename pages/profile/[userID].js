import React, { useState, useEffect } from "react";

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
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

import TransactionCard from "@/components/TransactionCard";
import { useRouter } from "next/router";

import { getSentReceived, useAuth } from "../../firebase/auth";

export default function Profile(props) {
  const router = useRouter();
  const auth = useAuth();
  const { userID } = router.query;
  const [sentReceived, setSentReceived] = useState(null);

  useEffect(() => {
    async function fetchSentReceived() {
      let sentReceived = await getSentReceived(auth.user.email);
      setSentReceived(sentReceived);
    }

    fetchSentReceived();
  }, []);

  console.log(sentReceived);

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
              Welcome, {auth.user ? auth.user.email : ""}
            </Heading>
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
          {sentReceived ? (
            sentReceived.sent.map((item) => (
              <TransactionCard
                key={item.transactionID}
                type={"sent"}
                gift_id={item.data.gift_id}
                receiver={item.data.receiver}
                sender={item.data.sender}
                transactionID={item.transactionID}
              />
            ))
          ) : (
            <Spinner size="xl" />
          )}
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
          {sentReceived ? (
            sentReceived.received.map((item, index) => (
              <TransactionCard
                key={item.transactionID}
                type={"received"}
                gift_id={item.data.gift_id}
                receiver={item.data.receiver}
                sender={item.data.sender}
                transactionID={item.transactionID}
              />
            ))
          ) : (
            <Spinner size="xl" />
          )}
        </Stack>
      </Flex>
    </Center>
  );
}
