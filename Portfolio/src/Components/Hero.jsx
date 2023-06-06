import React, { Component } from "react";
import "../styling/Hero.css";
import Navbar from "./Navbar.jsx";

export default class Hero extends Component {
  render() {
    return (
      <div className="HeroSection">
        <div>
          <Navbar />
        </div>
        <div>
          <p>Hero</p>
        </div>
      </div>
    );
  }
}
