/* eslint-disable react/style-prop-object */
import React from "react";
import "./About.css";
import separator from "../../assets/img/About/separator/separator.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__anchor">
        <h1 className="sc-title gracia about__header">ABOUT ME</h1>
        <p className="sc-subtitle subgracia about__paragraph">
          My name is Yukhlin Roman, I'm a twenty eight year. Applied Computer
          Science. I have been learning Front-End technologies for a year now
          and this time was just enough to make sure that this is my place in
          the industry. I completed a large number of courses and I am learning
          something new every day. Ready to implement excellent projects with
          wonderful people.
        </p>
        <img
          src={separator}
          className="about__separator"
          alt="aboutSeparator"
        />
      </div>
    </div>
  );
};

export default About;
