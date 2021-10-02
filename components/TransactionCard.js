import {
  useColorMode,
  Box,
  Badge,
  Text,
  Flex,
  Stack,
  Avatar,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import NextLink from "next/link";

const TransactionCard = ({
  gift_id,
  message,
  receiver,
  receiver_email,
  sender,
  sender_email,
  type,
  transactionID,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      //   borderWidth="1px"
      w="600px"
      borderRadius={8}
      p={2}
      //   mb={2}
      backgroundColor="gray.50"
      //   border="1px"
      //   borderColor="gray.50"
      //   backgroundColor={colorMode === "light" ? "white" : "gray.800"}
    >
      <Flex>
        <Avatar name="gift picture" src="/rose.png" />
        <Box ml="3">
          <Text fontWeight="bold">
            {type == "sent" ? "Delivered to" : "Received from"}
            <Badge ml="1">{type == "sent" ? sender : receiver}</Badge>
          </Text>
          <Text fontSize="sm">Gift id: {gift_id}</Text>
        </Box>
        <Spacer />
        <NextLink href={`/receive/${transactionID}`}>
          <Button rightIcon={<ArrowForwardIcon />} variant="outline">
            View Gift
          </Button>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default TransactionCard;
