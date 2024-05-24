/* Handles the theme and components from Chakra UI */

import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const styles = {
  global: (props) => ({
    "html, body": {
      scrollBehavior: "smooth",
    },
    "::-webkit-scrollbar-thumb": {
      "--tw-border-opacity": "0.5",
      "background-color": mode("#37393F", "#757575")(props),
      "border-width": "1px",
      width: "0.1em",
    },
    "::-webkit-scrollbar": {
      "background-color": mode("#DBC8AC", "#161616")(props),
      height: "1rem",
      width: "0.5rem",
    },
    "::-webkit-scrollbar-track": {
      "background-color": "transparent",
      "border-radius": "9999px",
    },
  }),
};

const baseStyle = definePartsStyle({
  container: {
    padding: "10px",
    // width: 'fit-content',
    borderRadius: "6px",
    _dark: {
      backround: "transparent",
    },
  },
  label: defineStyle({
    _dark: {},
  }),
});

const tagTheme = defineMultiStyleConfig({ baseStyle });

const components = {
  Heading: {
    variants: {
      "page-title-secondary": {
        color: "#757575",
        _dark: { color: "#757575" },
      },
      "page-title-main": {
        color: "#37393F",

        lineHeight: "1.0em",
        // fontWeight: '800',
        // textShadow: '10px 4px 10px #5C5A52',
        _dark: { color: "#F3F3F3", textShadow: "none" },
      },
      "page-title": {
        color: "#37393F",
        _dark: { color: "#37393F" },
      },
      "page-title-mini": {
        color: "#37393F",
        _dark: { color: "#37393F" },
      },
    },
    sizes: {
      sm: {
        fontSize: "sm",
      },
      md: {
        fontSize: "2xl",
      },
      lg: {
        fontSize: "3xl",
      },
    },
  },
  Text: {
    variants: {
      "sub-heading": {
        fontWeight: "bold",
        textUnderlineOffset: "3px",
        lineHeight: "1.5",
      },
      "date-heading": {
        fontWeight: "bold",
        color: "#b98929",
        textUnderlineOffset: "3px",
        lineHeight: "1.5",
      },
      "outline-s": {
        fontFamily: "Inter",
        "outline-s": {
          fontFamily: "Inter",
          color: mode("#37393F", "#F3F3F3"),
        },
      },
      "outline-p": {
        fontSize: 20,
        color: mode("#37393F", "#5C5A52"),
      },
    },
    sizes: {
      sm: {
        fontSize: "lg",
      },
      md: {
        fontSize: "xl",
      },
      lg: {
        fontSize: "2xl",
      },
    },
  },

  Link: {
    baseStyle: (props) => ({
      color: mode("#37393F", "#757575")(props),
      // textUnderlineOffset: 3,
      _hover: {
        color: mode("#f3f3f3", "#f3f3f3")(props),
        textDecoration: "none",
      },
    }),
  },
  Tag: tagTheme,
  Button: {
    variants: {
      "submit-button": {
        backgroundColor: "#427b58",
        color: "white",
        borderWidth: "2px",
        _dark: {
          backgroundColor: "#7F9F93",
          color: "white",
        },
        _hover: {
          bg: "#ddcfb7",
          _dark: {
            bg: "#040404",
          },
        },
      },
    },
  },
};

const colors = {
  deepCarrotOrange: "#ED6C35",
  sonicSilver: "#757575",
  blackMarlin: "#37393F",
  athsSpecial: "#D8C9AF",
  teal: "#6D9886",
  bayLeave: "#7F9F93",
  blue: "#1C3879",
  grey: "#5C5A52",
  aqua: "#427b58",
};

const breakpoints = {
  // sm: '175px',
  // md: '584px',
  // lg: '1280px',
  // xl: '1200px',
  // '2xl': '1536px'
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  breakpoints,
  components,
  config,
  styles,
  colors,
});
export default theme;
