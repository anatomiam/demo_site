import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Main.css";

const Main = () => (
  <div className="body-container">
    <Header />
    <Body />
    <Footer />
  </div>
);

export default Main;
