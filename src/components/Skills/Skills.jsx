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
import vscode from "../../assets/img/Skills/vscode.png";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="sc-title gracia skills__header">SKILLS</h1>
      <div className="skills__all">
        <h1 className="skills__h1">USING NOW:</h1>
        <div className="skills__container">
          <div className="skill">
            <img src={react} className="skill__image" alt="react" />
            <h3 className="skill__h3">React</h3>
          </div>

          <div className="skill">
            <img src={redux} className="skill__image" alt="redux" />
            <h3 className="skill__h3">Redux</h3>
          </div>

          <div className="skill">
            <img src={bem} className="skill__image" alt="bem" />
            <h3 className="skill__h3">BEM</h3>
          </div>

          <div className="skill">
            <img src={git} className="skill__image" alt="git" />
            <h3 className="skill__h3">Git</h3>
          </div>

          <div className="skill">
            <img src={figma} className="skill__image" alt="figma" />
            <h3 className="skill__h3">Figma</h3>
          </div>

          <div className="skill">
            <img src={css} className="skill__image" alt="css" />
            <h3 className="skill__h3">CSS3</h3>
          </div>

          <div className="skill">
            <img src={html} className="skill__image" alt="html5" />
            <h3 className="skill__h3">HTML5</h3>
          </div>

          <div className="skill">
            <img src={github} className="skill__image" alt="github" />
            <h3 className="skill__h3">GitHub</h3>
          </div>

          <div className="skill">
            <img src={javascript} className="skill__image" alt="javascript" />
            <h3 className="skill__h3">Javascript</h3>
          </div>

          <div className="skill">
            <img src={vscode} className="skills__png" alt="vscode" />
            <h3 className="skill__h3">VS Code</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
