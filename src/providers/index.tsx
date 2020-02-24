import * as React from "react";
import { ConfigProvider } from "./config";
import { ErrorBoundary } from "./error";
import { AppThemeProvider } from "./theme";
import { TreeProvider } from "./tree";

export const AppProvider: React.FC<{}> = props => {
  return (
    <ConfigProvider>
      <AppThemeProvider>
        <ErrorBoundary>
          <TreeProvider>{props.children}</TreeProvider>
        </ErrorBoundary>
      </AppThemeProvider>
    </ConfigProvider>
  );
};
