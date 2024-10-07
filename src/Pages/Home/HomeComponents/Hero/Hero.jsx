import "./hero.scss";
import Icon from "./Icon";
import icon from "./hero-assets/Path 20.svg";
import arrow from "./hero-assets/Path 4.svg";
import mapIcon from "./hero-assets/2216335_location_map_map pin_marker_pin_icon.svg";
import { FormattedMessage } from "react-intl";

function Hero() {
  return (
    <div className="heroWrapper">
      <div className="leftPart">
        <div className="textWrapper">
          <p className="text1">
            <FormattedMessage
              id="Hire a model or "
              defaultMessage="Hire a model or "
            />{" "}
          </p>
          <p className="text2">
            <FormattedMessage id="become one" defaultMessage="become one" />
          </p>
        </div>
        <div className="findModelWrapper">
          <div className="modelGender">
            <div className="textP">
              <img src={icon} />
              <p>
                <FormattedMessage
                  id="Female Models"
                  defaultMessage="Female Models"
                />
              </p>
            </div>
            <img src={arrow} />
          </div>
          <div className="findLocation">
            <div className="textP">
              <img src={mapIcon} />
              <p>
                <FormattedMessage
                  id="Find location"
                  defaultMessage="Find location"
                />
              </p>
            </div>
            <img src={arrow} />
          </div>
          <div className="findModelBtn">
            <FormattedMessage id="Find model" defaultMessage="Find model" />
          </div>
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
        <div className="img1" />
        <div className="img2" />
        <div className="img22" />

        {/* <img className="img1" src={img1} /> */}
        {/* <img className="img2" src={img2} /> */}
        {/* <img className="img22" src={img22} /> */}
      </div>
    </div>
  );
}

export default Hero;
