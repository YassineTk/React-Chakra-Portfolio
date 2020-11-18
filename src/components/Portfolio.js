import React from "react";
import Mode from "./Mode";
import { Image, Button, Link } from "@chakra-ui/react";

function Portfolio() {
  return (
    <div class="portfolio">
      <Mode />

      <div class="portfolio__header skills__title">PROJECTS</div>
      <div class="portfolio__items">
        <div className="portfolio__item__1">
          {" "}
          <div className="portfolio__item__image">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="./images/chatapp.png"
              alt="Segun Adebayo"
            />
          </div>
          <h4 className="portfolio__item__title">HxH Chat</h4>
          <div className="portfolio__item__buttons">
            <Link target="_blank" href="http://meetthemeteo.netlify.app/">
              <Button marginTop="8px">Live Demo</Button>
            </Link>{" "}
            <Button marginTop="8px">Description</Button>{" "}
          </div>
        </div>
        <div className="portfolio__item__2">
          {" "}
          <div className="portfolio__item__image">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="./images/react.webp"
              alt="Segun Adebayo"
            />
          </div>
          <h4 className="portfolio__item__title">Meet The Meteo</h4>
          <div className="portfolio__item__buttons">
            <Link target="_blank" href="http://meetthemeteo.netlify.app/">
              <Button marginTop="8px">Live Demo</Button>
            </Link>{" "}
            <Button marginTop="8px">Description</Button>{" "}
          </div>
        </div>

        <div className="portfolio__item__3">
          {" "}
          <div className="portfolio__item__image">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="./images/anisfitness.png"
              alt="Segun Adebayo"
            />
          </div>
          <h4 className="portfolio__item__title">Anis Fitness</h4>
          <div className="portfolio__item__buttons">
            <Link target="_blank" href="http://anisfitness.herokuapp.com/">
              {" "}
              <Button marginTop="8px">Live Demo</Button>{" "}
            </Link>
            <Button marginTop="8px">Description</Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
