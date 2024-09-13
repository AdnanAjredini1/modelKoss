import { Link } from "react-router-dom";
import "./ourwork-megamenu.scss";
import ourWorkData from "./ourworkData";
import Card from "./Carousel/Card/Card";
import img1 from "./ourWork-assets/imgCarousel1.png";
import cardData from "./Carousel/Card/cardData";
import Carousel from "./Carousel/Carousel";

function OurWorkMegamenu() {
  return (
    <div className="ourWorkWrapper">
      <div className="ourWorkLeftPart">
        {ourWorkData.map((item) => (
          <div className="ourWorkList" key={item.category}>
            <p className="ourWorkListTitle">{item.category}</p>
            <div className="ourWorkLink">
              {item.links.map((link) => (
                <Link className="link" to={link.to} key={link.link}>
                  {link.link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="ourWorkRightPart">
      <p className="text">Models &nbsp;&nbsp;  <span className="textSpan"> View all &gt; </span></p>
      <Carousel />
   

      </div>
    </div>
  );
}

export default OurWorkMegamenu;
