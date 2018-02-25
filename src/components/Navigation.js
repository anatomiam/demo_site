import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => (
  <div className="navigation">
    <Link to="/" className="">
      <h3>etd</h3>
    </Link>
    <Link to="/about" className="">
      <h3>About</h3>
    </Link>
    <Link to="/contact" className="">
      <h3>Contact</h3>
    </Link>
    <Link to="/projects" className="">
      <h3>Projects</h3>
    </Link>
    <Link to="/work" className="">
      <h3>Resume</h3>
    </Link>
  </div>
);

export default Navigation;
