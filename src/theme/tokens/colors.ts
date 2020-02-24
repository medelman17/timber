import { darken, lighten, desaturate } from "polished";

const darkBackground = desaturate(0.9, "#01B636");

export const colors = {
  background: "#E3E3E3",
  text: "#01B636",
  lightShadow: lighten(0.05, "#E3E3E3"),
  darkShadow: darken(0.05, "#E3E3E3"),
  modes: {
    dark: {
      background: darkBackground,
      text: "#E3E3E3",
      lightShadow: lighten(0.15, darkBackground),
      darkShadow: darken(0.1, darkBackground)
    }
  }
};
