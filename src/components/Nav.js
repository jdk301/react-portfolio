import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -40;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Nav = () => (
  <nav className="sticky">
    <NavHashLink to="/home#top" style={{ color: "black" }}>
      Home
    </NavHashLink>

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
    <div className="links">
      <i href="https://github.com/jdk301" target="_blank">
        <img className="img-desc" src="/images/github.png" />
      </i>

      <i href="https://www.linkedin.com/in/justin-kim-dc/" target="_blank">
        <img className="img-desc" src="/images/linkedin.png" />
      </i>
    </div>
  </nav>
);

export default Nav;
