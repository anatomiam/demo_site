import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => (
  <div className="navigation">
    <Link to="/about" className="">
      About
    </Link>
    <Link to="/contact" className="">
      Contact
    </Link>
    <Link to="/work" className="">
      Work
    </Link>
    <Link to="/projects" className="">
      Projects
    </Link>
  </div>
);

export default Navigation;
