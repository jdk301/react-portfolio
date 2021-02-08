import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Nav = () => (
  <nav className="nav" id="navbar">
    <div className="nav-content">
      <ul className="nav-items">
        <Link
          className="nav-item"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-45}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-45}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="gallery"
          spy={true}
          smooth={true}
          offset={-45}
          duration={500}
        >
          Gallery
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-45}
          duration={500}
        >
          Connect
        </Link>
      </ul>
    </div>
    {/* <ul className="nav__list">
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
    </ul> */}
  </nav>
);

export default Nav;
