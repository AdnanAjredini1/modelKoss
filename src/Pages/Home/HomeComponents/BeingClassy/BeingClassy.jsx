import "./being-classy.scss";
import Micon from "./being-classy-assets/Subtraction 2.svg?react";
import BigIcon from "./being-classy-assets/Group 12.svg?react";
import { FormattedMessage } from "react-intl";
function BeingClassy() {
  return (
    <div className="beingClassyWrapper">
      <Micon className="iconImg" />
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
      <BigIcon className="bigIcon" />
    </div>
  );
}

export default BeingClassy;
