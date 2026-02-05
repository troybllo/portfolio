/* Handles the theme and components from Chakra UI */

import { extendTheme } from "@chakra-ui/react";
import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const styles = {
  global: () => ({
    "html, body": {
      scrollBehavior: "smooth",
      backgroundColor: "#0a0a0a",
    },
    body: {
      color: "#ffffff",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "4px",
    },
    "::-webkit-scrollbar": {
      backgroundColor: "#0a0a0a",
      height: "8px",
      width: "8px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "#0a0a0a",
    },
  }),
};

const baseStyle = definePartsStyle({
  container: {
    padding: "10px",
    borderRadius: "9999px",
    bg: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#a1a1a1",
    _hover: {
      bg: "rgba(255, 255, 255, 0.08)",
      color: "#ffffff",
    },
  },
  label: defineStyle({
    color: "inherit",
  }),
});

const tagTheme = defineMultiStyleConfig({ baseStyle });

const components = {
  Heading: {
    variants: {
      "page-title-secondary": {
        color: "#a1a1a1",
      },
      "page-title-main": {
        color: "#ffffff",
        lineHeight: "1.0em",
      },
      "page-title": {
        color: "#ffffff",
      },
      "page-title-mini": {
        color: "#a1a1a1",
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
        color: "#ffffff",
      },
      "date-heading": {
        fontWeight: "bold",
        color: "#3b82f6",
        textUnderlineOffset: "3px",
        lineHeight: "1.5",
      },
      "outline-s": {
        fontFamily: "Plus Jakarta Sans",
        color: "#ffffff",
      },
      "outline-p": {
        fontSize: 20,
        color: "#a1a1a1",
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
    baseStyle: {
      color: "#a1a1a1",
      transition: "all 0.2s ease",
      _hover: {
        color: "#ffffff",
        textDecoration: "none",
      },
    },
  },
  Tag: tagTheme,
  Button: {
    variants: {
      "submit-button": {
        backgroundColor: "#3b82f6",
        color: "white",
        borderWidth: "0",
        borderRadius: "9999px",
        _hover: {
          backgroundColor: "#2563eb",
          transform: "translateY(-2px)",
        },
      },
      "glass-button": {
        bg: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "9999px",
        color: "#ffffff",
        _hover: {
          bg: "rgba(255, 255, 255, 0.08)",
          borderColor: "rgba(255, 255, 255, 0.15)",
          transform: "translateY(-2px)",
        },
      },
    },
  },
};

const colors = {
  // Primary backgrounds
  bgPrimary: "#0a0a0a",
  bgSecondary: "#161616",

  // Glass effects
  glassBg: "rgba(255, 255, 255, 0.05)",
  glassBgHover: "rgba(255, 255, 255, 0.08)",
  glassBorder: "rgba(255, 255, 255, 0.1)",

  // Text colors
  textPrimary: "#ffffff",
  textSecondary: "#a1a1a1",
  textMuted: "#6b7280",

  // Accent colors
  accentBlue: "#3b82f6",
  accentPurple: "#8b5cf6",
  accentGreen: "#10b981",
  accentCyan: "#06b6d4",
  accentOrange: "#f97316",
  accentPink: "#ec4899",
  accentRed: "#ef4444",
  accentTeal: "#14b8a6",

  // Legacy colors (kept for compatibility)
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

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  components,
  config,
  styles,
  colors,
});

export default theme;
