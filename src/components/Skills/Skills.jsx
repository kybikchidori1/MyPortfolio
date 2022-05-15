import React from "react";
import "./Skills.css";
import react from "../../assets/img/Skills/React.png";
import bem from "../../assets/img/Skills/BEM.png";
import git from "../../assets/img/Skills/Git.png";
import figma from "../../assets/img/Skills/Figma.png";
import css from "../../assets/img/Skills/CSS.png";
import github from "../../assets/img/Skills/GitHub.png";
import html from "../../assets/img/Skills/HTML.png";
import javascript from "../../assets/img/Skills/JavaScript.png";
import redux from "../../assets/img/Skills/Redux.png";
import sass from "../../assets/img/Skills/Sass.png";
import vscode from "../../assets/img/Skills/vscode.png";

const Skills = () => {
  return (
    <div className="container__skills">
      <div className="border__title_skills">
        <div className="title__skills">skills</div>
      </div>
      <div className="subtitle__usingnow">using now:</div>
      <div className="skills__area">
        {" "}
        <div className="skills__container">
          <div className="skills__box">
            <div className="skills__logo">
              <img src={react} className="skills__png" alt="" />
            </div>
            <div className="skills__name">
              <div className="skills__png">react</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__logo">
              <img src={redux} className="skills__png" alt="" />
            </div>
            <div className="skills__name">
              <div className="skills__png">redux</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__logo">
              <img src={bem} className="skills__png" alt="" />
            </div>
            <div className="skills__name">
              <div className="skills__png">bem</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__logo">
              <img src={git} className="skills__png" alt="" />
            </div>
            <div className="skills__name">
              <div className="skills__png">git</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__logo">
              <img src={figma} className="skills__png" alt="" />
            </div>
            <div className="skills__name">
              <div className="skills__png">figma</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__logo">
              <img src={css} className="skills__png" alt="" />
            </div>
            <div className="skills__name">
              <div className="skills__png">css</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__logo">
              <img src={github} className="skills__png" alt="" />
            </div>
            <div className="skills__name">
              <div className="skills__png">github</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__logo">
              <img src={html} className="skills__png" alt="" />
            </div>
            <div className="skills__name">
              <div className="skills__png">html</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__logo">
              <img src={javascript} className="skills__png" alt="" />
            </div>
            <div className="skills__name">
              <div className="skills__png">javascript</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__logo">
              <img src={sass} className="skills__png" alt="" />
            </div>
            <div className="skills__name">
              <div className="skills__png">sass</div>
            </div>
          </div>

          <div className="skills__box">
            <div className="skills__logo">
              <img src={vscode} className="skills__png" alt="" />
            </div>
            <div className="skills__name">
              <div className="skills__png">vscode</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
