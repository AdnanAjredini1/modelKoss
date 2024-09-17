import "./hero.scss";
import Icon from "./Icon";
import img1 from "./hero-assets/285559266_1739637450.png";
import img2 from "./hero-assets/286480874_9724163867.png";
import icon from "./hero-assets/Path 20.svg";
import arrow from './hero-assets/Path 4.svg';
import mapIcon from "./hero-assets/2216335_location_map_map pin_marker_pin_icon.svg"

function Hero() {
  return (
    <div className="heroWrapper">
      <div className="leftPart">
        <div className="textWrapper">
          <p className="text1">Hire a model or </p>
          <p className="text2">become one</p>
        </div>
        <div className="findModelWrapper">
          <div className="modelGender">
            <div className="textP">
                <img src={icon} />
               <p>Female Models</p> 
            </div>
            <img src={arrow} />
          </div>
          <div className="findLocation">
          <div className="textP">
                <img src={mapIcon} />
               <p>Find location</p> 
            </div>
            <img src={arrow} />
          </div>
          <div className="findModelBtn">Find model</div>
        </div>
      </div>
      <div className="rightPart">
        <Icon
          wrapperClass="wrapperClass"
          width="185"
          height="185.1"
          fill="#fff"
          stroke="#fff"
          widthArrow="42.46"
          heightArrow="18"
          arrowSvgClass="arrowSvgClass"
        />

        <img className="img1" src={img1} />
        <img className="img2" src={img2} />
      </div>
    </div>
  );
}

export default Hero;
