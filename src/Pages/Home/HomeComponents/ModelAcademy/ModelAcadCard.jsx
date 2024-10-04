import "./modelAcadCard.scss";
import banner from "./model-academy-assets/banner-3.webp";
import MIcon from "./model-academy-assets/Subtraction 6.svg?react";
import AcadamyIcon from "./model-academy-assets/Path 24.svg?react";
import { FormattedMessage } from "react-intl";
function ModelAcadCard() {
  return (
    <div className="modelAcadCardWrapper">
      <img src={banner} className="bannerImg" />
      <div className="linearGrad"></div>
      <div className="logoWrapper">
        <MIcon className="mIcon" />
        <AcadamyIcon className="academyIcon" />
        <p className="logoText">
          <FormattedMessage
            id="MODELKOS Academy"
            defaultMessage="MODELKOS Academy"
          />
        </p>
      </div>
      <p className="description">
        <FormattedMessage
          id="If you want to be a model then we are here to offer advice and create a platform for new aspiring models. We endeavor to work across a diverse range of talent and champion every individual regardless of their background or ability. We are a female-led team of accomplished, diverse women."
          defaultMessage="If you want to be a model then we are here to offer advice and create a platform for new aspiring models. We endeavor to work across a diverse range of talent and champion every individual regardless of their background or ability. We are a female-led team of accomplished, diverse women."
        />
      </p>
      <div className="btnWrapper" style={{cursor:"pointer"}}>
        <FormattedMessage id="Join academy" defaultMessage="Join academy" />
      </div>
    </div>
  );
}

export default ModelAcadCard;
