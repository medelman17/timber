/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "rebass";

export const Main: React.FC<{}> = props => {
  return (
    <Flex sx={{ variant: "site.main" }} className="layout">
      {props.children}
    </Flex>
  );
};
