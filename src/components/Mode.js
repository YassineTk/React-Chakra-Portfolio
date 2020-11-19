import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Mode() {
  const { colorMode, toggleColorMode } = useColorMode("dark");

  return (
    <div className="mode">
      <Button marginRight="2">
        <Link className="mode__link" to="/contact">
          <FontAwesomeIcon icon="envelope" />{" "}
        </Link>
      </Button>{" "}
      <Button className="app__mode" onClick={toggleColorMode}>
        {colorMode === "light" ? "🌙" : "⚡"}
      </Button>{" "}
    </div>
  );
}

export default Mode;
