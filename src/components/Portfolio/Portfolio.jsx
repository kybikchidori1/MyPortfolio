import React from "react";
import "./Portfolio.css";
import tournogami from "../../assets/img/Portfolio/tournogamisite.png";
import piedpiper from "../../assets/img/Portfolio/piedpiper.png";
import menu from "../../assets/img/Portfolio/menu.png";
import mars from "../../assets/img/Portfolio/mars.png";
import addUser from "../../assets/img/Portfolio/addUser.png";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio__header">
        <h1 className="sc-title gracia">PORTFOLIO</h1>
      </div>
      <div className="filter">
        <ul>
          <li className="active">Coded</li>
        </ul>
      </div>
      <div className="projects">
        <div className="project">
          <img className="project__image" src={tournogami} alt="tournogami" />
          <div className="project__container">
            <h2 className="project__tags">coded</h2>
            <h1 className="project__title">TourNogami Site</h1>
            <p className="project__description">Landing page TourNogami site</p>
            <div className="project__buttons">
              <form
                action="https://github.com/kybikchidori1/TourNogamiSite"
                target="_blank"
              >
                <button className="sc-button salut">GITHUB</button>
              </form>
              <form
                action="https://kybikchidori1.github.io/TourNogamiSite/"
                target="_blank"
              >
                <button className="sc-button salut">DEMO</button>
              </form>
            </div>
          </div>
        </div>

        <div className="project">
          <img className="project__image" src={piedpiper} alt="piedpiper" />
          <div className="project__container">
            <h2 className="project__tags">coded</h2>
            <h1 className="project__title">PiedPiper Site</h1>
            <p className="project__description">Landing page PiedPiper site</p>
            <div className="project__buttons">
              <form
                action="https://github.com/kybikchidori1/PiedPiperSite"
                target="_blank"
              >
                <button className="sc-button salut">GITHUB</button>
              </form>
              <form
                action="https://kybikchidori1.github.io/PiedPiperSite/"
                target="_blank"
              >
                <button className="sc-button salut">DEMO</button>
              </form>
            </div>
          </div>
        </div>

        <div className="project">
          <img className="project__image" src={menu} alt="fitnes" />
          <div className="project__container">
            <h2 className="project__tags">coded</h2>
            <h1 className="project__title">Fitnes</h1>
            <p className="project__description">
              demo JS app that allows you to count your calories
            </p>
            <div className="project__buttons">
              <form
                action="https://github.com/kybikchidori1/NewbieJavaScript"
                target="_blank"
              >
                <button className="sc-button salut">GITHUB</button>
              </form>
              <form
                action="https://kybikchidori1.github.io/NewbieJavaScript/"
                target="_blank"
              >
                <button className="sc-button salut">DEMO</button>
              </form>
            </div>
          </div>
        </div>

        <div className="project">
          <img className="project__image" src={addUser} alt="addUser" />
          <div className="project__container">
            <h2 className="project__tags">coded</h2>
            <h1 className="project__title">AddUser App</h1>
            <p className="project__description">
              JS app that add new user, edit and delete
            </p>
            <div className="project__buttons">
              <form
                action="https://github.com/kybikchidori1/mytest"
                target="_blank"
              >
                <button className="sc-button salut">GITHUB</button>
              </form>
              <form
                action="https://kybikchidori1.github.io/mytest/"
                target="_blank"
              >
                <button className="sc-button salut">DEMO</button>
              </form>
            </div>
          </div>
        </div>

        <div className="project">
          <img className="project__image" src={mars} alt="movie" />
          <div className="project__container">
            <h2 className="project__tags">coded</h2>
            <h1 className="project__title">KuboFilm Site</h1>
            <p className="project__description">Demo search Movie site</p>
            <div className="project__buttons">
              <form
                action="https://github.com/kybikchidori1/KuboFilm1"
                target="_blank"
              >
                <button className="sc-button salut">GITHUB</button>
              </form>
              <form
                action="https://kybikchidori1.github.io/KuboFilm1/"
                target="_blank"
              >
                <button className="sc-button salut">DEMO</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <span className="portfolio__footer">And many more to come!</span>
    </div>
  );
};

export default Portfolio;
