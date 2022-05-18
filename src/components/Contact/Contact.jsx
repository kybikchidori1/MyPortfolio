import React from "react";
import "./Contact.css";
import linkedin from "../../assets/img/Contacts/linkedin.svg";
import telegram from "../../assets/img/Contacts/telegram.svg";
import instagram from "../../assets/img/Contacts/instagram.svg";
import vk from "../../assets/img/Contacts/vk.svg";

const Contact = () => {
  return (
    <footer>
      <div className="contacts-block activation" id="contact">
        <div className="contacts__text">
          <div className="contacts__title"> Contacts </div>
          <p>"Want to know more or just chat?" "You are welcome!"</p>
        </div>
        <div className="contacts__messengers">
          <a href="https://www.linkedin.com/">
            <img className="contacts__icon" src={linkedin} alt="" />
          </a>
          <a href="https://t.me/Kybikchidori1">
            <img className="contacts__icon" src={telegram} alt="" />
          </a>
          <a href="https://instagramishe.ru/">
            <img className="contacts__icon" src={instagram} alt="" />
          </a>
          <a href="https://vk.com/id617282226">
            <img className="contacts__icon" src={vk} alt="" />
          </a>
        </div>
        <div className="contacts__link-cv">
          <v href="./src" download="Resume">
            Download CV
          </v>
        </div>
        <div className="contacts__bottom">
          <p>"Like me on" "LinkedIn, telegram, instagram, Vkontakte"</p>
        </div>
      </div>
    </footer>
  );
};
export default Contact;
