import React from "react";
import "./About.css";
import Skills from "../Skills/Skills";
import separator from "../../assets/img/About/separator.png";

const About = () => {
  return (
    <div className="container__about">
      <div className="border__title">
        <div className="title__aboutme">about me</div>
      </div>
      <div className="subtext__aboutme">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
      </div>
      <div className="btn__position_explore">
        <div href="#explore" className="btn__explore">
          explore
        </div>
      </div>
      <img src={separator} className="separator__img1" alt="" />
      <div className="container__abilities">
        <div className="abilities__design_title">design</div>
        <div className="abilities__design_subtitle">
          I can design the site based on your needs and suggestions. I can also
          design the site from scratch and consult you during the job.
        </div>
        <div className="abilities__development_title">development</div>
        <div className="abilities__development_subtitle">
          I can design the site based on your needs and suggestions. I can also
          design the site from scratch and consult you during the job.
        </div>
        <div className="abilities__maintenance_title">maintenance</div>
        <div className="abilities__maintenance_subtitle">
          I can design the site based on your needs and suggestions. I can also
          design the site from scratch and consult you during the job.
        </div>
      </div>
      <img src={separator} className="separator__img2" alt="" />
      <Skills />
      <div className="background__about" alt="" />
    </div>
  );
};

export default About;
