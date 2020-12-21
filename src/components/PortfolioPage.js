import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap/Button";
import MyModal from "./PortfolioModal";
import { projectData } from "../data";

const PortfolioPage = () => (
  <section id="portfolioPage">
    <h1 className="title">Portfolio</h1>
    <div className="projects">
      <div className="project-container">
        <img src="/images/indecision_thumbnail.png" alt="Project" />
        <div>
          <MyModal
            name={projectData[1].name}
            description={projectData[1].description}
            image={projectData[1].image}
          />
        </div>
        <div className="desc">Indecision App</div>
      </div>

      <div className="project-container">
        <img src="/images/atm_thumbnail.png" alt="Project" />
        <div>
          <MyModal
            name={projectData[2].name}
            description={projectData[2].description}
            image={projectData[2].image}
          />
        </div>
        <div className="desc">Action ATM</div>
      </div>

      <div className="project-container">
        <img src="/images/fire_thumbnail.png" alt="Project" />
        <div>
          <MyModal
            name={projectData[3].name}
            description={projectData[3].description}
            image={projectData[3].image}
          />
        </div>
        <div className="desc">Fire Tracker</div>
      </div>
    </div>
  </section>
);

export default PortfolioPage;
