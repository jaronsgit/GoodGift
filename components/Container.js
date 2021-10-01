import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Link,
  Box,
  Flex,
  Container as ChakraContainer,
} from "@chakra-ui/react";

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const router = useRouter();
  const pathname = router.pathname;

  const { children, ...customMeta } = props;
  const meta = {
    title: "Beneflora",
    description: ``,
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <Flex direction="column">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Beneflora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Box
        as="main"
        key={router.pathname}
        position="relative"
        top={["50px", "70px"]}
      >
        <ChakraContainer maxW="container.md">{children}</ChakraContainer>
      </Box>
    </Flex>
  );
}
