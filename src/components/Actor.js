import React from "react";
import { Flex, Avatar, Box, Badge, Text } from "@chakra-ui/react";
import Actor from "../data/actor.json";

function actor() {
  return (
    <div className="app__actor">
      {Actor.map((actor) => {
        return (
          <Flex key={actor.id}>
            <Avatar src={actor.image} />
            <Box ml="3">
              <Text fontWeight="bold">
                {actor.name}
                <Badge className="badge" ml="1" colorScheme="green">
                  {actor.badge}
                </Badge>
              </Text>
              <Text fontSize="sm"> {actor.desc}</Text>
            </Box>
          </Flex>
        );
      })}
    </div>
  );
}

export default actor;
