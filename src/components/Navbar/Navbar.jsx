import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="header__menu">
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
          <a href data-link className="header-bottom-menu__link">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
