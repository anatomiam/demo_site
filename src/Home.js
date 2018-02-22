import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="box body">
          <h1>Eric Dulcet</h1>
          <h3>Developer & Designer</h3>
        </div>
        <div className="box upper-left-corner">About</div>
        <div className="box upper-right-corner">Contact</div>
        <div className="box lower-left-corner">Work</div>
        <div className="box lower-right-corner"><a href="http://haiku.edulcet.local" >Projects</a></div>
      </div>
    );
  }
}

export default Home;
