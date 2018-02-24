import React from "react";
import Body from "./components/Body";
import Navigation from "./components/Navigation";
import "./Main.css";

const Main = () => (
  <div className="grid-container">
    <Navigation />
    <Body />
  </div>
);

export default Main;
