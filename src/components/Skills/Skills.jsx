import React from "react";
import "./Skills.css";
import react from "../../assets/img/Skills/React.svg";
import bem from "../../assets/img/Skills/BEM.svg";
import git from "../../assets/img/Skills/Git.svg";
import figma from "../../assets/img/Skills/Figma.svg";
import css from "../../assets/img/Skills/CSS.svg";
import github from "../../assets/img/Skills/GitHub.svg";
import html from "../../assets/img/Skills/HTML.svg";
import javascript from "../../assets/img/Skills/JavaScript.svg";
import redux from "../../assets/img/Skills/Redux.svg";
import sass from "../../assets/img/Skills/Sass.svg";
import vccode from "../../assets/img/Skills/vscode.svg";

const Skills = () => {
  return (
    <div className="container__skills">
      <div className="border__title_skills">
        <div className="title__skills">skills</div>
      </div>
      <div className="subtitle__usingnow">using now:</div>
      <img src={react} className="img__html" alt="" height="100px" />
      <img src={bem} className="img__css" alt="" height="100px" />
      <img src={git} className="img__sass" alt="" height="100px" />
      <img src={figma} className="img__js" alt="" height="100px" />
      <img src={css} className="img__react" alt="" height="100px" />
      <img src={github} className="img__git" alt="" height="100px" />
      <img src={html} className="img__figma" alt="" height="100px" />
      <img src={javascript} className="img__nodejs" alt="" height="100px" />
      <img src={redux} className="img__redux" alt="" height="100px" />
      <img src={sass} className="img__github" alt="" height="100px" />
      <img src={vccode} className="img__vscode" alt="" height="100px" />
    </div>
  );
};
export default Skills;
