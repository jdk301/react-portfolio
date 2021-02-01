import React from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "react-bootstrap";
import Projects from "./Projects";
import { projectData } from "../data";

const ProjectsPage = () => (
  <section className="project-page" id="portfolio">
    <h1 className="section-header">Projects</h1>

    <div className="project-page__container">
      <article className="project-page__project" id="expensify-app">
        <Projects
          image={projectData[0].image}
          name={projectData[0].name}
          description={projectData[0].description}
          tech={projectData[0].tech}
          url={projectData[0].url}
          github={projectData[0].github}
        />
      </article>

      <article className="project-page__project" id="indecision-app">
        <Projects
          image={projectData[1].image}
          name={projectData[1].name}
          description={projectData[1].description}
          tech={projectData[1].tech}
          url={projectData[1].url}
          github={projectData[1].github}
        />
      </article>

      <article className="project-page__project" id="action-atm">
        <Projects
          image={projectData[2].image}
          name={projectData[2].name}
          description={projectData[2].description}
          tech={projectData[2].tech}
          github={projectData[2].github}
        />
      </article>

      <article className="project-page__project" id="fire-tracker">
        <Projects
          image={projectData[3].image}
          name={projectData[3].name}
          description={projectData[3].description}
          tech={projectData[3].tech}
          github={projectData[3].github}
        />
      </article>
    </div>
  </section>
);

export default ProjectsPage;
