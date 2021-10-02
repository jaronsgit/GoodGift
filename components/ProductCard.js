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
  Spacer,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

import { withAuthModal, withSignInRedirect } from "@/components/Auth";
import { useAuth } from "../firebase/auth";

const ProductCard = ({ product, openAuthModal, onSignIn }) => {
  const router = useRouter();
  const auth = useAuth();
  const handleClick = (e) => {
    if (auth.user) {
      e.preventDefault();
      router.push(`/shop/${product.productID}`);
    } else {
      //   openAuthModal();
      onSignIn();
    }
  };

  return (
    <Box
      _hover={{
        bg: "gray.100",
        cursor: "pointer",
      }}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={handleClick}
    >
      <Image src={product.imageUrl} alt={product.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          ></Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.title}
        </Box>

        <Box>
          {product.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <b>{product.charity}</b>
        </Box>
        <Box>{product.desc}</Box>
      </Box>
    </Box>
  );
};

export default withSignInRedirect(ProductCard);
