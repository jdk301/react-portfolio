import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "../playground/Home.js";
import About from "../playground/About.js";
import Navbar from "../playground/Navbar.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
