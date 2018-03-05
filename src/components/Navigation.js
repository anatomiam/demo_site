import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => (
  <div className="navigation-container">
    <Link to="/" className="navigation-items">
      <h3>Main</h3>
    </Link>
    <Link to="/about" className="navigation-items">
      <h3>About</h3>
    </Link>
    <Link to="/projects" className="navigation-items">
      <h3>Projects</h3>
    </Link>
    <Link to="/contact" className="navigation-items">
      <h3>Contact</h3>
    </Link>
    {/* <a href="/s/Eric_Dulcet_Resume.pdf" className="navigation-items">
      <h3>Resume</h3>
    </a> */}
  </div>
);

export default Navigation;
