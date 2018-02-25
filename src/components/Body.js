import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./content/Landing";
import About from "./content/About";
import Contact from "./content/Contact";
import Work from "./content/Work";
import Projects from "./content/Projects";

const Body = () => (
  <div className="content-container">
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/work" component={Work} />
      <Route path="/projects" component={Projects} />
    </Switch>
  </div>
);

export default Body;
