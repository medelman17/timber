/** @jsx jsx */
import { jsx } from "theme-ui";

import { css } from "./modifiers";
import { Text as RebassText } from "rebass";
import { TextProps } from "./index";

export const BodyText: React.FC<TextProps> = ({
  as,
  variant,
  modifiers,
  children,
  sx,
  type = "body",
  ...props
}) => {
  const overrides = css({ as, variant, modifiers, type, ...props });
  return (
    <RebassText
      as={as}
      sx={sx}
      css={overrides}
      variant={`text.body.${variant}`}
      {...props}
    >
      {children}
    </RebassText>
  );
};

BodyText.defaultProps = {
  as: "span",
  type: "body",
  variant: "default",
  modifiers: []
};
