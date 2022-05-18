import React from "react";
import "./Home.css";
import separator from "../../assets/img/Home/separator/separatorWhite.png";
import mail from "../../assets/img/Home/contacts/mail.svg";
import github from "../../assets/img/Home/contacts/github.svg";
import telegram from "../../assets/img/Home/contacts/telegram.svg";

const Home = () => {
  return (
    <div className="hero container">
      <div className="hero__header">
        <h1 className="hero__main">Roman Yukhlin</h1>
        <h3 className="hero__submain">Front-end Developer</h3>
        <img src={separator} className="hero__separator" alt="separator" />
        <div className="hero__social-media">
          <a href="malito:spiceandwolfroma@gmail.com">
            <img
              className="hero__social-media-unit"
              src={mail}
              alt="mail-svg"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kybikchidori1"
          >
            <img
              className="hero__social-media-unit"
              src={github}
              alt="git-svg"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/Kybikchidori1"
          >
            <img
              className="hero__social-media-unit-tg"
              src={telegram}
              alt="telegram-svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
