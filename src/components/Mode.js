import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Mode() {
  const { colorMode, toggleColorMode } = useColorMode("dark");

  return (
    <div class="mode">
      <Button marginRight="2">
        <FontAwesomeIcon icon="envelope" />
      </Button>
      <Button className="app__mode" onClick={toggleColorMode}>
        {colorMode === "light" ? "🌙" : "⚡"}
      </Button>{" "}
    </div>
  );
}

export default Mode;
