import "./being-classy.scss";
import icon from "./being-classy-assets/Subtraction 2.svg";
import bigIcon from "./being-classy-assets/Group 12.svg";
import { FormattedMessage } from "react-intl";
function BeingClassy() {
  return (
    <div className="beingClassyWrapper">
      <img src={icon} className="iconImg" />
      <p className="text1">
        <FormattedMessage
          id="BEING CLASSY IS BENEFICIAL"
          defaultMessage="BEING CLASSY IS BENEFICIAL"
        />
      </p>
      <p className="text2">
        <FormattedMessage
          id="BEING PROFFESIONAL IS INVALUABLE"
          defaultMessage="BEING PROFFESIONAL IS INVALUABLE"
        />
      </p>
      <img src={bigIcon} className="bigIcon" />
    </div>
  );
}

export default BeingClassy;
