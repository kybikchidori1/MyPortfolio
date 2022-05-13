import React from "react";
import "./ITberries.css";
import background from "../../assets/img/ITberries/background.png";

const ITberries = () => {
  return (
    <div className="container__itberries">
      <div className="tittle__itberries">it berries</div>
      <div className="subtext__itberries">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus,
        lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim
        erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget
        enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra.
        Ut ante justo, consequat vitae elementum tempor, accumsan nec eros.
      </div>
      <div className="btn__position">
        <div href="#readmore" className="btn__readmore">
          read more
        </div>
      </div>

      <img src={background} className="background" alt="" />
    </div>
  );
};

export default ITberries;
