import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import NavBar from "@/components/NavBar";
import { ProvideAuth } from "../firebase/auth";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <ChakraProvider theme={theme}>
        <NavBar key={"navbar"} />
        <Component {...pageProps} />
      </ChakraProvider>
    </ProvideAuth>
  );
}

export default MyApp;
