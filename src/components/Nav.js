import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -40;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth'});
}

const Nav = () => (
  <nav className="sticky">

    <NavHashLink to="/home#top" style={{ color: "black" }}>Home</NavHashLink>

    <NavHashLink
      smooth to="/portfolio#portfolioPage"
      scroll={el => scrollWithOffset(el)}
      activeClassName="selected"
      exact={true}
      style={{ color: "black" }}
    >
      Portfolio
    </NavHashLink>

    <NavHashLink
      smooth to="/about#aboutPage"
      scroll={el => scrollWithOffset(el)}
      activeClassName="selected"
      exact={true}
      style={{ color: "black" }}
    >
      About
    </NavHashLink>

    <NavHashLink
      smooth to="/contact#contactPage"
      scroll={el => scrollWithOffset(el)}
      activeClassName="selected"
      exact={true}
      style={{ color: "black" }}
    >
      Contact
    </NavHashLink>
  </nav>
);

export default Nav;
