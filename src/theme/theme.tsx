import { type DefaultTheme } from "styled-components";

export const themes: { [key in "light" | "dark"]: DefaultTheme } = {
  light: {
    colors: {
      primary: "#000000",
      secondary: "#555555",
      background: "#FFFFFF",
      destac: "#007AFF",
      border: "#DDDDDD",
    },
  },
  dark: {
    colors: {
      primary: "#FFFFFF",
      secondary: "#AAAAAA",
      background: "#1E1E1E",
      destac: "#0A84FF",
      border: "#333333",
    },
  },
};
