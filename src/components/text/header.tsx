/** @jsx jsx */
import { jsx } from "theme-ui";
import { css } from "./modifiers";
import { Text } from "rebass";
import { TextProps } from "./index";

export const HeaderText: React.FC<TextProps> = ({
  as,
  variant,
  modifiers,
  children,
  sx,
  type = "header",
  ...props
}) => {
  const overrides = css({ as, variant, modifiers, type, ...props });

  return (
    <Text
      as={as}
      css={overrides}
      sx={sx}
      variant={`text.header.${variant}`}
      {...props}
    >
      {children}
    </Text>
  );
};

HeaderText.defaultProps = {
  as: "span",
  type: "header",
  variant: "default",
  modifiers: []
};
