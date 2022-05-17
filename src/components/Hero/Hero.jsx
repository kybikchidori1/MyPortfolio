/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <header className="header">
        <Navbar />
      </header>
      <div className="hero__who-i-am">
        <div className="hero__name">
          <h5>Hi, I am</h5>
          <h1>Roman Yukhlin</h1>
          <h5>Front-end Developer</h5>
        </div>
        <div className="hero__about"></div>
      </div>
    </div>
  );
};

export default Hero;
