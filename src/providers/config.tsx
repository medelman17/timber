import * as React from "react";
import { createCtx, hasDOM } from "../utils";

export type ScreenConfig = {
  height: number;
  width: number;
};

export type ConfigContext = {
  screen: ScreenConfig;
};

const [useConfig, Provider] = createCtx<ConfigContext>();

export const ConfigProvider: React.FC<{}> = props => {
  const [thisConfig, setConfig] = React.useState<ConfigContext>(
    hasDOM
      ? {
          screen: { height: window.innerHeight, width: window.innerWidth }
        }
      : { screen: { width: 0, height: 0 } }
  );

  React.useEffect(() => {
    if (hasDOM) {
      return window.addEventListener("resize", () => {
        setConfig(prev => ({
          ...prev,
          screen: { width: window.innerWidth, height: window.innerHeight }
        }));
      });
    }
  }, []);

  return <Provider value={thisConfig}>{props.children}</Provider>;
};

export { useConfig };
