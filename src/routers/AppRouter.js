import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ProjectsPage from "../components/ProjectsPage";
import GalleryPage from "../components/GalleryPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";

import Footer from "../components/Footer";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <HomePage className="home" />
      {/* <AboutPage className="about" /> */}
      <ProjectsPage className="portfolio" exact="true" />
      <GalleryPage className="gallery" />
      <ContactPage className="contact" />
      <Footer className="footer" />
    </div>
  </BrowserRouter>
);

export default AppRouter;
