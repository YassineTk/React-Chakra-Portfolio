import React from "react";
import Mode from "./Mode";
import {
  Image,
  Button,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import Projects from "../data/projects.json";

function Portfolio() {
  return (
    <div class="portfolio">
      <Mode />

      <div class="portfolio__header skills__title">PROJECTS</div>
      <div class="portfolio__items">
        {Projects.map((project) => {
          return (
            <div id={project.id} className={project.class}>
              {" "}
              <div className="portfolio__item__image">
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={project.image}
                />
              </div>
              <h4 className="portfolio__item__title">{project.name}</h4>
              <div className="portfolio__item__buttons">
                <Link target="_blank" href={project["demo-link"]}>
                  <Button marginTop="8px">Live Demo</Button>
                </Link>{" "}
                <Popover>
                  <PopoverTrigger>
                    <Button>Description</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>{project.name}</PopoverHeader>
                    <PopoverBody>{project.description}</PopoverBody>
                    <PopoverBody>
                      {project.techs} <br />
                      {project.repo}
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
