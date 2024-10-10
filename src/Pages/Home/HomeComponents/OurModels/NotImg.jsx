import { FormattedMessage } from "react-intl";
import Icon from "./our-models-assetss/Group 8.svg?react";

function NotImg({ wrapperClass, titleClass, descriptionClass, iconClass }) {
  return (
    <div className={wrapperClass}>
      <p className={titleClass}>
        <FormattedMessage
          id="Want to be here?"
          defaultMessage="Want to be here?"
        />
      </p>
      <p className={descriptionClass}>
        <FormattedMessage
          id="ModelKos is seeking for new talent, so join the largest modeling agency in Kosovo and show off your skills. Be a model!"
          defaultMessage="ModelKos is seeking for new talent, so join the largest modeling agency in Kosovo and show off your skills. Be a model!"
        />
      </p>
      <Icon className={iconClass} />
    </div>
  );
}

export default NotImg;
