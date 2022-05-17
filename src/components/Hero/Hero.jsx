/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="home container">
      <header className="header">
        <Navbar />
      </header>
      <div className="container__hero">
        <h5 className="hello">Hi, i am</h5>
        <h1 className="name">Roman Yukhlin</h1>
        <h5 className="sub_name">Front-end Developer</h5>
        <Services />
        <div className="img__rectangle_hero"></div>
      </div>
    </div>
  );
};

export default Hero;
