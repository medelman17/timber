import * as React from "react";
import { ThemeProvider } from "theme-ui";
import { createCtx } from "../utils";
import { createTheme } from "../theme";
import { useConfig } from "./config";
import { Theme as StyledSystemTheme } from "styled-system";

export type AppThemeContext = {
  theme: StyledSystemTheme;
  setTheme: React.Dispatch<React.SetStateAction<any>>;
};

const [useAppTheme, Provider] = createCtx<AppThemeContext>();

export const AppThemeProvider: React.FC<{}> = props => {
  const { screen } = useConfig();
  const [currentTheme, setTheme] = React.useState<
    (e: StyledSystemTheme) => StyledSystemTheme
  >(existingTheme => createTheme({ screen, existingTheme }));

  React.useMemo(() => {
    setTheme(e => createTheme({ screen, existingTheme: e }));
  }, [screen.width]);

  return (
    <Provider value={{ theme: currentTheme, setTheme }}>
      <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>
    </Provider>
  );
};

export { useAppTheme };
