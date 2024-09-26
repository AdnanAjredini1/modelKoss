import "./card-w.scss";
import arrow from "./whatweoffer-assets/arrow-left(3).svg";
import Arrow from "./whatweoffer-assets/arrow-left(3).svg?react";

function CardW({ icon:Icon, title, description }) {
  return (
    <div className="cardWwrapper">
      <Icon className="icon" />
      <p className="title">{title}</p>
      <p className="hoverTitle">{title}</p>
      <p className="description">{description}</p>
      <p className="learnMore">Learn more</p>
      <Arrow className="arrow" />
    </div>
  );
}

export default CardW;
