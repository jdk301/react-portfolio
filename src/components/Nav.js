import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -65;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Nav = () => (
  <nav className="nav">
    <a className="nav-link">
      <NavHashLink to="/home#top" style={{ color: "black" }}>
        Home
      </NavHashLink>
    </a>

    <a className="nav-link">
      <NavHashLink
        smooth
        to="/portfolio#portfolioPage"
        scroll={(el) => scrollWithOffset(el)}
        activeClassName="selected"
        exact={true}
        style={{ color: "black" }}
      >
        Portfolio
      </NavHashLink>
    </a>

    <a className="nav-link">
      <NavHashLink
        smooth
        to="/gallery#galleryPage"
        scroll={(el) => scrollWithOffset(el)}
        activeClassName="selected"
        exact={true}
        style={{ color: "black" }}
      >
        Gallery
      </NavHashLink>
    </a>

    <a className="nav-link">
      <NavHashLink
        smooth
        to="/about#aboutPage"
        scroll={(el) => scrollWithOffset(el)}
        activeClassName="selected"
        exact={true}
        style={{ color: "black" }}
      >
        About
      </NavHashLink>
    </a>

    <a className="nav-link">
      <NavHashLink
        smooth
        to="/contact#contactPage"
        scroll={(el) => scrollWithOffset(el)}
        activeClassName="selected"
        exact={true}
        style={{ color: "black" }}
      >
        Contact
      </NavHashLink>
    </a>

    <div className="social-links">
      <a href="https://github.com/jdk301" target="_blank">
        <img className="img-desc" src="/images/github.png" />
      </a>

      <a href="https://www.linkedin.com/in/justin-kim-dc/" target="_blank">
        <img className="img-desc" src="/images/linkedin.png" />
      </a>
    </div>
  </nav>
);

export default Nav;
