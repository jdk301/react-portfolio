import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

export default function Projects(props) {
  return (
    <article className="project">
      <div className="img-container">
        <img className="img" src={props.image}></img>
      </div>

      <div className="about-container">
        <h2 className="title">{props.name}</h2>
        <h3 className="desc">{props.description}</h3>
        <p className="tech">
          <strong>Tech: </strong>
          {props.tech}
        </p>
      </div>
      <ButtonGroup>
        <Button variant="light" disabled>
          inspect
        </Button>
        <Button variant="light" disabled>
          visit
        </Button>
        <Button variant="light" target="_blank" href={props.github}>
          source
        </Button>
      </ButtonGroup>
    </article>
  );
}
