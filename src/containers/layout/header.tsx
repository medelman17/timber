/** @jsx jsx */
import { jsx, IconButton, useColorMode } from "theme-ui";
import { Flex } from "rebass";
import { Icon, Text } from "../../components";

export const Header: React.FC<{}> = props => {
  return (
    <Flex sx={{ variant: "site.header" }} as="header" className="layout">
      <Flex sx={{ flexGrow: 1 }}>
        <Text type="header" as="span" variant="title">
          Timber
        </Text>
      </Flex>
      <ColorModeToggler />
    </Flex>
  );
};

function ColorModeToggler() {
  const [colorMode, setColorMode] = useColorMode();
  function handleToggle(e: React.MouseEvent) {
    e.preventDefault();
    setColorMode(colorMode === "default" ? "dark" : "default");
  }
  return (
    <IconButton onClick={handleToggle}>
      <Icon type={colorMode === "default" ? "sun" : "moon"} />
    </IconButton>
  );
}
