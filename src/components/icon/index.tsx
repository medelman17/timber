/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { SunIcon, MoonIcon, TreeIcon } from "./icons";

export type IconTypes = "sun" | "moon" | "tree";

export type IconProps = {
  type: IconTypes;
};

export const IconStrategy = {
  sun: SunIcon,
  moon: MoonIcon,
  tree: TreeIcon
};

export const IconFactory = {
  strategy: IconStrategy,
  create(type) {
    return this.strategy[type];
  }
};

export const Icon: React.FC<IconProps> = props => {
  const Component = IconFactory.create(props.type);
  return <Component {...props} />;
};
