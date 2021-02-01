import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

export default function Projects(props) {
  return (
    <article className="project">
      <div className="project__img">
        <img className="img" src={props.image}></img>
      </div>

      <h2 className="project__title">{props.name}</h2>
      <h3 className="project__summary">{props.description}</h3>
      <p className="project__tech">
        <strong>Tech: </strong>
        {props.tech}
      </p>

      <ButtonGroup className="project__button-group">
        <Button variant="light" disabled>
          inspect
        </Button>
        <Button variant="light" target="_blank" href={props.url}>
          visit
        </Button>
        <Button variant="light" target="_blank" href={props.github}>
          source
        </Button>
      </ButtonGroup>
    </article>
  );
}
