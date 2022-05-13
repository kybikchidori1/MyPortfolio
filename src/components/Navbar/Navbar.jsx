import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container__nav">
      <b href="#aboutme" className="btn">
        About Me
      </b>
      <b href="#skills" className="btn">
        Skills
      </b>
      <b href="#portfolio" className="btn">
        Portfolio
      </b>
      <b href="#contact" className="btn">
        Contact me
      </b>
    </div>
  );
};

export default Navbar;
