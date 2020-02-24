/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "rebass";
import { Main } from "./main";
import { Header } from "./header";
import { Footer } from "./footer";
import emotionReset from "emotion-reset";

export const Layout: React.FC<{}> = props => {
  return (
    <Flex sx={{ variant: "site.root" }} className="layout">
      <Header />
      <Main>{props.children}</Main>
      <Footer />
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            font-size: "16px";
          }
          ${emotionReset}
        `}
      </style>
    </Flex>
  );
};
