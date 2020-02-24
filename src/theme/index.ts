import { Theme as StyledSystemTheme } from "styled-system";
import { ScreenConfig } from "../providers/config";
import { createThemeVariants } from "./variants";
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  colors,
  space
} from "./tokens";

type CreateThemeArgs = {
  existingTheme: StyledSystemTheme;
  screen: ScreenConfig;
};

export function createTheme({
  existingTheme,
  screen
}: CreateThemeArgs): StyledSystemTheme {
  const theme = isMobile(screen.width)
    ? createMobileTheme({
        existingTheme,
        screen
      })
    : createDesktopTheme({
        existingTheme,
        screen
      });
  return theme;
}

function createAgnosticTheme({ existingTheme, screen }: CreateThemeArgs) {
  return {
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    colors,
    space,
    ...createThemeVariants()
  };
}

function createMobileTheme({ existingTheme, screen }: CreateThemeArgs) {
  // console.log("creating mobile theme...");
  return {
    ...createAgnosticTheme({ existingTheme, screen })
  };
}

function createDesktopTheme({ existingTheme, screen }: CreateThemeArgs) {
  // console.log("creating desktop theme...");
  return {
    ...createAgnosticTheme({ existingTheme, screen })
  };
}

function isMobile(width: number) {
  return width < 500;
}
