import { Link } from "react-router-dom";
import "./about-megamenu.scss";
import aboutMData from "./aboutMegemenuData";
import img1 from "./aboutMegamenu-assets/286633495_4102350776.png";
import img2 from "./aboutMegamenu-assets/imageedit_1_97659730.png";

function AboutMegamenu() {
  return (
    <div className="aboutMegemenuWrapper">
      <div className="aboutMLeftPart">
        {aboutMData.map((category) => (
          <div className="linksWrapper" key={category.category}>
            <p  className="categoryName">
              {category.category}
            </p>
            <div className="linkList">
              {category.links.map((item) => (
                <Link key={item.link} to={item.to} className="aboutlink">
                  {item.link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="aboutMRightPart">
        <div className="imageWrapper">
          <img className="img1Class" src={img2} />
          <p className="imgText">MODELKOS 2024</p>
        </div>

        <img className="img2Class" src={img1} />
        <div className="aboutUsButton">
            About us
        </div>
      </div>
      .
    </div>
  );
}

export default AboutMegamenu;
