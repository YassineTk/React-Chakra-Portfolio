import React from "react";
import { Flex, Avatar, Box, Badge, Text } from "@chakra-ui/react";

function actor() {
  return (
    <div class="app__actor">
      <Flex>
        <Avatar src="./images/yassine.jpg" />
        <Box ml="3">
          <Text fontWeight="bold">
            Yassine TAKEDDINE
            <Badge className="badge" ml="1" colorScheme="green">
              MA
            </Badge>
          </Text>
          <Text fontSize="sm">
            {" "}
            Full Stack JavaScript Developer | Astronomie enthusiast
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default actor;
