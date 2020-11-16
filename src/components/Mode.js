import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";

function Mode() {
  const { colorMode, toggleColorMode } = useColorMode("dark");

  return (
    <div class="mode">
      <Button className="app__mode" onClick={toggleColorMode}>
        {colorMode === "light" ? "🌙" : "⚡"}
      </Button>
    </div>
  );
}

export default Mode;
