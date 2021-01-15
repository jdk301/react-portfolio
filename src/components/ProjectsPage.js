import React from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "react-bootstrap/Button";
import Projects from "./Projects";
import { projectData } from "../data";

const ProjectsPage = () => (
  <section className="projects-page" id="portfolioPage">
    <h1 className="section-header">Projects</h1>

    <article className="new-project-container">
      <Projects
        image={projectData[1].image}
        name={projectData[1].name}
        description={projectData[1].description}
        tech={projectData[1].tech}
        github={projectData[1].github}
      />
    </article>

    <article className="new-project-container">
      <Projects
        image={projectData[2].image}
        name={projectData[2].name}
        description={projectData[2].description}
        tech={projectData[2].tech}
        github={projectData[2].github}
      />
    </article>

    <article className="new-project-container">
      <Projects
        image={projectData[3].image}
        name={projectData[3].name}
        description={projectData[3].description}
        tech={projectData[3].tech}
        github={projectData[3].github}
      />
    </article>
  </section>
);

export default ProjectsPage;
