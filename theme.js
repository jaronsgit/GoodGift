import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "34em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const Button = {
  // Two variants: outline and solid
  baseStyle: (props) => ({
    bg: mode("black", "whiteAlpha.900")(props),
    color: mode("black", "whiteAlpha.900")(props),
    // textTransform: "uppercase",
    // fontWeight: "semibold",
    // letterSpacing: "0.02em",
    // padding: "4px",
    // borderRadius: "2px",
    // fontSize: "12px",
    borderRadius: 3,
  }),
  variants: {
    solid: (props) => ({
      bg: mode("gray.50", "gray.600")(props),
      color: mode("black", "whiteAlpha.900")(props),
      borderColor: mode("black", "whiteAlpha.900")(props),
    }),
  },
};

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("black", "whiteAlpha.900")(props),
        bg: mode("white", "gray.1000")(props),
        lineHeight: "base",
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },
    }),
  },
  fonts: {
    body: "IBM Plex Sans, sans-serif",
    heading: "IBM Plex Sans, sans-serif",
    // body: "Quicksand, sans-serif",
    // heading: "Quicksand, sans-serif",
  },
  colors: {
    gray: {
      50: "#F2F2F2",
      100: "#DBDBDB",
      200: "#C4C4C4",
      300: "#ADADAD",
      400: "#969696",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
      900: "#1A1A1A",
      1000: "#141414",
    },
  },
  // components: {
  //   Button,
  // },
});

export default theme;
