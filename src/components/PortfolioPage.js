import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap/Button";
import MyModal from "./PortfolioModal";

const PortfolioPage = () => (
  <section id="portfolioPage">
    <h1 className="title">Portfolio</h1>
    <div className="projects">
      <div className="item">
        <img src="/images/indecision_thumbnail.png" alt="Project" />
        <MyModal />
        <div className="desc">Indecision App</div>
      </div>

      <div className="item">
        <img src="/images/atm_thumbnail.png" alt="Project" />
        <Link to="/portfolio/ACTION ATM">
          <button id="viewBtn">View</button>
        </Link>
        <div className="desc">Action ATM</div>
      </div>

      <div className="item">
        <img src="/images/fire_thumbnail.png" alt="Project" />
        <Link to="/portfolio/Fire Tracker">
          <button id="viewBtn">View</button>
        </Link>
        <div className="desc">Fire Tracker</div>
      </div>
    </div>
  </section>
);

export default PortfolioPage;
