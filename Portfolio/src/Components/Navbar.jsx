import React, { Component } from "react";
import "../styling/NavBar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="NavSection">
        <div className="NavContainer">
          <div className="ListContainer">
            <image src="" />
            <ul className="UnorderList">
              <li>Home</li>
              <li>Edcation</li>
              <li>Experince</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <button className="NavButton">Hire Me</button>
        </div>
      </div>
    );
  }
}
