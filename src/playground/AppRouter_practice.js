import React from "react";
import HomePage from "../components/HomePage.js";
//import scrollTo from "../components/ScrollTo.js";
// import {
//   ref,
//   headerRef,
//   portfolioRef,
//   contactRef,
//   selected,
//   visibleSection,
// } from "./AppFunction.js";

const AppRouter = () => (
  <div className="App">
    <div className="top-spacer" />
    <HomePage />
    <div className="content">
      <div className="sticky">
        <div className="header" ref={headerRef}>
          <button
            type="button"
            className={`header_link ${
              visibleSection === "Portfolio" ? "selected" : ""
            }`}
            onClick={() => {
              scrollTo(portfolioRef.current);
            }}
          >
            Portfolio
          </button>
          <button
            type="button"
            className={`header_link ${
              visibleSection === "Contact" ? "selected" : ""
            }`}
            onClick={() => {
              scrollTo(contactRef.current);
            }}
          >
            Contact
          </button>
        </div>
      </div>
      <div className="section" id="Portfolio" ref={portfolioRef} />
      <div className="section" id="Contact" ref={contactRef} />
    </div>

    <div className="bottom-spacer" />
  </div>
);

export default AppRouter;
