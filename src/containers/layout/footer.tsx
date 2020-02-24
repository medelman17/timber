/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex, Link } from "rebass";
import { Text } from "../../components/text";

export const Footer: React.FC<{}> = props => {
  return (
    <Flex sx={{ variant: "site.footer" }} as="footer" className="layout">
      <Link
        href="https://www.twitter.com/edelman215"
        sx={{ variant: "text.body.p", fontFamily: "heading" }}
      >
        @edelman215
      </Link>
    </Flex>
  );
};
