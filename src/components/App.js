import React from "react";
import "./App.css";
import {
  Avatar,
  Box,
  Button,
  Tag,
  TagLabel,
  useDisclosure,
  Fade,
} from "@chakra-ui/react";

import Actor from "./Actor";
import Mode from "./Mode";

function App() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div class="app">
      {" "}
      <Mode />
      <Actor />
      <div className="skills poppins">
        <div>
          <h3> Skills </h3>{" "}
        </div>
        <div className="skills__container">
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
            <TagLabel>React </TagLabel>
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
              src="./images/javascript.png"
              size="xs"
              name="Segun Adebayo"
              ml={-1}
              mr={2}
            />
            <TagLabel>JavaScript</TagLabel>
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
              src="./images/gatsby.png"
              size="xs"
              name="Segun Adebayo"
              ml={-1}
              mr={2}
            />
            <TagLabel>Gatsby</TagLabel>
          </Tag>
          <Tag
            marginTop="6"
            marginLeft="4"
            size="lg"
            colorScheme="blue"
            borderRadius="full"
          >
            <Avatar
              src="./images/sass.png"
              size="xs"
              name="Segun Adebayo"
              ml={-1}
              mr={2}
            />
            <TagLabel>Sass</TagLabel>
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
            I'm a Morocco based JavaScript Developer who works on both Front &
            Back End.
            <br /> I love watching startups & companies getting their App's UX
            to the next level, and i would like beign part of it ! <br /> See my
            work & projects <br />
            <Button marginTop="8px">👉</Button>
          </Box>
        </Fade>
      </div>
    </div>
  );
}

export default App;
