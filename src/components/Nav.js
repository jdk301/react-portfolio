import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -50;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li>
        <a className="nav-link" href="#top">
          Home
        </a>
      </li>

      <li>
        <a className="nav-link" href="#portfolio">
          Portfolio
        </a>
      </li>

      <li>
        <a className="nav-link" href="#gallery">
          Gallery
        </a>
      </li>

      <li>
        <a className="nav-link" href="#about">
          About
        </a>
      </li>

      <li>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
