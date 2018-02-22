import React from "react";
import { Link } from "react-router-dom";
import Body from "./components/Body";
import "./Main.css";

const Main = () => (
  <div className="grid-container">
    <Link to="/about" className="box upper-left-corner">
      About
    </Link>
    <Link to="/contact" className="box upper-right-corner">
      Contact
    </Link>
    <Body />
    <Link to="/work" className="box lower-left-corner">
      Work
    </Link>
    <Link to="/projects" className="box lower-right-corner">
      Projects
    </Link>
  </div>
);

export default Main;
