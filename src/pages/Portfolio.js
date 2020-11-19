import React from "react";
import Mode from "../components/Mode";
import { Image, Button, Link, Text } from "@chakra-ui/react";
import Projects from "../data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Portfolio() {
  return (
    <div className="portfolio">
      <Mode />

      <div className="portfolio__header skills__title">
        <Text fontWeight="bold">PROJECTS </Text>{" "}
      </div>
      <div className="portfolio__items">
        {Projects.map((project) => {
          return (
            <div key={project.id} className="portfolio__item">
              {" "}
              <div className="portfolio__item__image">
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={project.image}
                />
              </div>
              <h4 className="portfolio__item__title">{project.name}</h4>
              <h6 className="portfolio__item__subtitle"> {project.tech}</h6>
              <div className="portfolio__item__buttons">
                <Link target="_blank" href={project["demo-link"]}>
                  <Button marginTop="8px">Live Demo</Button>
                </Link>{" "}
                <Link target="_blank" href={project.repo}>
                  {project.lock ? (
                    <Button disabled marginTop="8px">
                      Respository
                      <FontAwesomeIcon
                        style={{ marginLeft: "10px" }}
                        icon="lock"
                      />
                    </Button>
                  ) : (
                    <Button marginTop="8px">Respository</Button>
                  )}
                </Link>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
