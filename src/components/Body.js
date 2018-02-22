import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";
import Projects from "./Projects";

const Body = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/work" component={Work} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Body;
