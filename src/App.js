import React from "react";
import "./App.css";
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Button,
  useColorMode,
  Tag,
  TagLabel,
  useDisclosure,
  Fade,
} from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode("dark");
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div class="app">
      {" "}
      <div class="mode">
        <Button className="app__mode" onClick={toggleColorMode}>
          {colorMode === "light" ? "🌙" : "⚡"}
        </Button>
      </div>
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
      <div className="skills poppins">
        <div>
          <h3> Skills </h3>{" "}
        </div>
        <div>
          <Tag
            marginTop="6"
            marginLeft="4"
            size="lg"
            colorScheme="blue"
            borderRadius="full"
          >
            <Avatar
              src="./images/react.webp"
              size="xs"
              name="Segun Adebayo"
              ml={-1}
              mr={2}
            />
            <TagLabel>React</TagLabel>
          </Tag>
          <Tag
            marginTop="6"
            marginLeft="4"
            size="lg"
            colorScheme="blue"
            borderRadius="full"
          >
            <Avatar
              src="./images/node.png"
              size="xs"
              name="Segun Adebayo"
              ml={-1}
              mr={2}
            />
            <TagLabel>Node</TagLabel>
          </Tag>

          <Tag
            marginTop="6"
            marginLeft="4"
            size="lg"
            colorScheme="blue"
            borderRadius="full"
          >
            <Avatar
              src="./images/typescript.png"
              size="xs"
              name="Segun Adebayo"
              ml={-1}
              mr={2}
            />
            <TagLabel>TypeScript</TagLabel>
          </Tag>

          <Tag
            marginTop="6"
            marginLeft="4"
            size="lg"
            colorScheme="blue"
            borderRadius="full"
          >
            <Avatar
              src="./images/graphql.png"
              size="xs"
              name="Segun Adebayo"
              ml={-1}
              mr={2}
            />
            <TagLabel>GraphQL</TagLabel>
          </Tag>

          <Tag
            marginTop="6"
            marginLeft="4"
            size="lg"
            colorScheme="blue"
            borderRadius="full"
          >
            <Avatar
              src="./images/firebase.jpg"
              size="xs"
              name="Segun Adebayo"
              ml={-1}
              mr={2}
            />
            <TagLabel>Firebase</TagLabel>
          </Tag>
          <Tag
            marginTop="6"
            marginLeft="4"
            size="lg"
            colorScheme="blue"
            borderRadius="full"
          >
            <Avatar
              src="./images/figma.jpeg"
              size="xs"
              name="Segun Adebayo"
              ml={-1}
              mr={2}
            />
            <TagLabel>Figma</TagLabel>
          </Tag>
        </div>
        <Button className="poppins" marginTop="65" onClick={onToggle}>
          Who Am I ?
        </Button>
        <Fade in={isOpen}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            I'm a Moroccan based JavaScript Developer who work on both Client &
            Server Side.
            <br /> I love watching startups & companies being more interrested
            in the UX of their apps, and i love making part of that ! <br /> See
            my work & projects <br />
            <Button marginTop="8px">👉</Button>
          </Box>
        </Fade>
      </div>
    </div>
  );
}

export default App;
