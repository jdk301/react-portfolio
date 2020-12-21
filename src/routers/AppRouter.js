import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import HomePage from "../components/HomePage.js";
import AboutPage from "../components/AboutPage.js";
import PortfolioPage from "../components/PortfolioPage.js";
import PortfolioItemPage from "../components/PortfolioItemPage.js";
import ContactPage from "../components/ContactPage.js";
import NotFoundPage from "../components/NotFoundPage.js";
import Nav from "../components/Nav.js";
import MyModal from "../components/PortfolioModal.js";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <HomePage className="home" />
      <PortfolioPage className="portfolio" exact="true" />
      <Route exact path="/portfolio/:id" component={PortfolioItemPage} />

      <AboutPage className="about" />
      <ContactPage className="contact" />
    </div>
  </BrowserRouter>
);

export default AppRouter;
