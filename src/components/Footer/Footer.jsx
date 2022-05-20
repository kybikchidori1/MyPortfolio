/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import arrow from "../../assets/img/Footer/arrow/double-arrow-up.svg";
import mail from "../../assets/img/Home/contacts/mail.svg";
import github from "../../assets/img/Home/contacts/github.svg";
import telegram from "../../assets/img/Footer/telegram/telegram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__toTop">
        <a href="#" title="back-to-top">
          <img src={arrow} alt="double-arrow-back" />
          <p>BACK TO TOP</p>
        </a>
      </div>

      <div className="footer__social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="malito:spiceandwolfroma@gmail.com"
        >
          <img
            className="footer__social-media-unit"
            src={mail}
            alt="m-footer-svg"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kybikchidori1"
        >
          <img
            className="footer__social-media-unit"
            src={github}
            alt="g-footer-svg"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/Kybikchidori1"
        >
          <img
            className="footer__social-media-unit-tg"
            src={telegram}
            alt="t-footer-svg"
          />
        </a>
      </div>

      <div className="footer__rights">
        <p>@2022 Yukhlin Roman All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
