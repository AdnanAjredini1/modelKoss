import "./free-education.scss";
import { freeEducationData } from "./freeEducationData";
import LeftArrow from "./free-education-assets/arrow-left(6).svg?react";
import KosGirlsIcon from "./free-education-assets/Group 1.svg?react";
import { FormattedMessage } from "react-intl";
function FreeEducation() {
  return (
    <div className="freeEduactionWrapper">
      <div className="leftPart">
        {freeEducationData.map((item) => (
          <div key={item.name} className="cardWrapper">
            <p className="title">{item.name}</p>
            <div style={{content:`url(${item.img})`}}  className="imgBg" />
            <div className="linearGrad"></div>
            <LeftArrow className="leftArrow" />
          </div>
        ))}
      </div>
      <div className="rightPart">
        <div className="logoWrapper">
          <KosGirlsIcon className="kosGirlsIcon" />
          <p className="logoText">KosovaGirls</p>
        </div>
        <p className="bigText">
          <FormattedMessage
            id="Free education for EVERYONE"
            defaultMessage="Free education for EVERYONE"
          />
        </p>
        <p className="description">
          <FormattedMessage
            id="ModelKos, in collaboration with KosovaGirls, provides women with support and free training in fashion, design, hair styling, photography, video shooting, modeling, acting and other areas."
            defaultMessage="ModelKos, in collaboration with KosovaGirls, provides women with support and free training in fashion, design, hair styling, photography, video shooting, modeling, acting and other areas."
          />
        </p>
        <div className="btnWrapper">
          <p className="learnmore">
            <FormattedMessage id="Learn more" defaultMessage="Learn more" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default FreeEducation;
