/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Flex, Button } from "rebass";
import { Icon, Text, Image, Card } from "./index";

type WelcomeProps = {
  togglePlaying: (e: any) => void;
};

export const Welcome: React.FC<WelcomeProps> = props => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        height: "100%",
        width: "100%",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <Flex
        sx={{
          px: ["2rem", "3rem"],
          py: ["2rem", "4rem"],
          boxShadow: theme =>
            `5px 5px 15px ${theme.colors.darkShadow}, -5px -5px 15px  ${theme.colors.lightShadow}`,
          borderRadius: "50px",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "500px",
          "& > svg": {
            stroke: "text"
          },
          textAlign: "center"
        }}
      >
        <Icon type="tree" />

        <Text as="h1" type="body" variant="h1" modifiers={["hero"]}>
          Timber
        </Text>
        <Text type="body" as="span" variant="p" modifiers={["bigger"]}>
          A tinder-like experience ... <br />
          but for trees
        </Text>
      </Flex>

      <Button
        onClick={props.togglePlaying}
        sx={{
          bg: "background",
          borderRadius: "50px",
          color: "text",
          boxShadow: theme =>
            `5px 5px 15px ${theme.colors.darkShadow}, -5px -5px 15px  ${theme.colors.lightShadow}`
        }}
      >
        <Text
          type="body"
          variant="span"
          as="span"
          sx={{ fontFamily: "heading" }}
        >
          Start Playing
        </Text>
      </Button>
    </Flex>
  );
};
