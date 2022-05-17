/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import logo from "../../assets/img/Hero/logo/logo.svg";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="header__menu">
        <a href="#">
          <img className="nav-bar__logo" src={logo} alt="logo" />
        </a>
        <ul className="header-bottom-menu">
          <li className="header-body-menu_links">
            <a href data-link className="header-bottom-menu__link">
              About me
            </a>
          </li>
          <li className="header-body-menu_links">
            <a href data-link className="header-bottom-menu__link">
              Skills
            </a>
          </li>
          <li className="header-body-menu_links">
            <a href data-link className="header-bottom-menu__link">
              Portfolio
            </a>
          </li>
          <li className="header-body-menu_links">
            <a href data-link className="header-bottom-menu__button">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
