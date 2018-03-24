import React from "react";
import Landing from "./content/Landing";
import About from "./content/About";
import Contact from "./content/Contact";
import Projects from "./content/Projects";

const Body = () => (
  <div className="body">
    <Landing />
    <About />
    <Contact />
    <Projects />
  </div>
);

export default Body;
