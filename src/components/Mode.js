import React from "react";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Mode() {
  return (
    <div class="mode">
      <Button marginRight="2">
        <Link className="mode__link" to="/contact">
          <FontAwesomeIcon icon="envelope" />{" "}
        </Link>
      </Button>{" "}
    </div>
  );
}

export default Mode;
