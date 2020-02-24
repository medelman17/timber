import styled from "@emotion/styled";
import { HeaderText } from "./header";
import { BodyText } from "./body";

export type TextTypes = "header" | "body" | "default";

export type TextElements = "p" | "h1" | "h2" | "h3" | "h4" | "span";

export type TextVariants = TextElements | "nav" | "title" | "default";

export type TextProps = {
  type: TextTypes;
  as: TextElements;
  modifiers?: string | string[];
  variant?: TextVariants;
  sx?: any;
};

export const TextStrategy = {
  header: HeaderText,
  body: BodyText,
  default: BodyText
};

export const TextFactory = {
  strategy: TextStrategy,
  create(type: TextTypes): React.FC<TextProps> {
    return this.deliver(this.strategy[type]);
  },
  deliver(Component: React.FC<TextProps>) {
    const otherProps = {};
    return props => <Component {...props} {...otherProps} />;
  }
};

export const Text: React.FC<TextProps> = ({ type = "default", ...props }) => {
  const Component = TextFactory.create(type);
  return <Component {...props} type={type} />;
};

Text.defaultProps = {
  type: "default",
  as: "span",
  variant: "default"
};
