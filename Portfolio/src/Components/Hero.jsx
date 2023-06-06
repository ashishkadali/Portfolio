import React, { Component } from "react";
import "../styling/Hero.css";
import Navbar from "./Navbar.jsx";

export default class Hero extends Component {
  render() {
    return (
      <div className="HeroSection">
        <Navbar />

        <div className="HeroLeftRight">
          <div className="HeroLeft">
            <div className="LeftHeading">
              <h1>Think. Make. Solve.</h1>
            </div>
            <div className="LeftSubHeading">
              <hr style={{ width: "5%" }} />
              <p style={{ color: "#da4ea2" }}>What we Do</p>
            </div>
            <div className="LeftDescription">
              <p>
                {" "}
                Passionate MERN developer to creating delightful and
                human-centered digital experiences through the creation of
                robust and scalable web applications.{" "}
              </p>
            </div>
          </div>
          <div className="HeroRight">
            <img className="RightImage" src=""></img>
          </div>
        </div>
      </div>
    );
  }
}
