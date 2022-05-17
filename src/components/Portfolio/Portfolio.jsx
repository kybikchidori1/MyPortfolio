import React from "react";
import "./Portfolio.css";
import tournogami from "../../assets/img/Portfolio/tournogamisite.png";
import piedpiper from "../../assets/img/Portfolio/piedpiper.png";
import menu from "../../assets/img/Portfolio/menu.png";
import mars from "../../assets/img/Portfolio/mars.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__container bg activaiton">
        <div className="portfolio__heading">
          <div className="portfolio__title">portfolio</div>
        </div>
        <div className="portfolio__content container">
          <div className="portfolio__block">
            <div className="portfolio__img">
              <img src={tournogami} alt="rec" />
            </div>
            <div className="portfolio__link">
              <a href="">TourNogami - Homepage</a>
            </div>
          </div>
          <div className="portfolio__block">
            <div className="portfolio__img">
              <img src={piedpiper} alt="rec" />
            </div>
            <div className="portfolio__link">
              <a href="">PiedPiper - Homepage</a>
            </div>
          </div>
          <div className="portfolio__block">
            <div className="portfolio__img">
              <img src={menu} alt="rec" />
            </div>
            <div className="portfolio__link">
              <a href="">FoodDelivery - Homepage</a>
            </div>
          </div>
          <div className="portfolio__block">
            <div className="portfolio__img">
              <img src={mars} alt="rec" />
            </div>
            <div className="portfolio__link">
              <a href="">Movies - Homepage</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
