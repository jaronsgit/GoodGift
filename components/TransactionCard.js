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

const TransactionCard = ({ id, userId }) => {
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
            Delivered to:
            <Badge ml="1">roy.cohen@gmail.com</Badge>
          </Text>
          <Text fontSize="sm">Delivery Date: 20/01/2021</Text>
        </Box>
        <Spacer />
        <Button rightIcon={<ArrowForwardIcon />} variant="outline">
          View Gift
        </Button>
      </Flex>
    </Box>
  );
};

export default TransactionCard;
