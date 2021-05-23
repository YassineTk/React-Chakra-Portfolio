import React from "react";

import {
  Avatar,
  Box,
  Button,
  Tag,
  TagLabel,
  useDisclosure,
  Fade,
} from "@chakra-ui/react";

import Actor from "../components/Actor";
import Mode from "../components/Mode";
import { Link } from "react-router-dom";
import Skills from "../data/skills.json";

function Home() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className="app">
      <Mode />
      <Actor />

      <div className="skills poppins">
        <div className="skills__title">
          <h3> SKILL SET </h3>{" "}
        </div>
        <div className="skills__container">
          {Skills.map((skill) => {
            return (
              <Tag
                key={skill.id}
                marginTop="6"
                marginLeft="4"
                size="lg"
                colorScheme="blue"
                borderRadius="full"
              >
                <Avatar src={skill.icon} size="xs" ml={-1} mr={2} />
                <TagLabel>{skill.label} </TagLabel>
              </Tag>
            );
          })}
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
            I'm a Morocco based Frontend developer.
            <br /> I love watching startups & companies getting their App's UX
            to the next level, and i love making part of it!
            <br />
            Check my Portfolio <br />
            <Link to="/portfolio">
              <Button marginTop="3">👉</Button>{" "}
            </Link>
          </Box>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
