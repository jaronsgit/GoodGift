import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import NavBar from "@/components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar key={"navbar"} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
