import "./hero.scss";
import Icon from "./Icon";
import MIcon from "./hero-assets/Path 20.svg?react";
import Arrow from "./hero-assets/Path 4.svg?react";
import MapIcon from "./hero-assets/2216335_location_map_map pin_marker_pin_icon.svg?react";
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
            />
          </p>
          <p className="text2">
            <FormattedMessage id="become one" defaultMessage="become one" />
          </p>
        </div>
        <div className="findModelWrapper">
          <div className="modelGender">
            <div className="textP">
              <MIcon width={14} height={14} />
              <p>
                <FormattedMessage
                  id="Female Models"
                  defaultMessage="Female Models"
                />
              </p>
            </div>
            <Arrow width={9} height={5} />
          </div>
          <div className="findLocation">
            <div className="textP">
              <MapIcon width={13} height={16} />

              <p>
                <FormattedMessage
                  id="Find location"
                  defaultMessage="Find location"
                />
              </p>
            </div>
            <Arrow width={9} height={5} />
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
      </div>
    </div>
  );
}

export default Hero;
