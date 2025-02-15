import "./our-partnerships.scss";
import MediaKosIcon from "./our-partnerships-assets/Group 13100.svg?react";
import { FormattedMessage } from "react-intl";
function OurPartnerships() {
  return (
    <div className="ourPartnershipsWrapper">
      <p className="title">
        <FormattedMessage
          id="Our partnerships"
          defaultMessage="Our partnerships"
        />
      </p>
      <div className="content">
        <div className="leftPart">
          <div className="logoWrapper">
            <MediaKosIcon className="mediaKosIcon" />
            <p className="logoText">MediaKos</p>
          </div>
          <p className="bitTitle">
            <FormattedMessage
              id="Manage your social media"
              defaultMessage="Manage your social media"
            />
          </p>
          <p className="description">
            <FormattedMessage
              id="MediaKos assists all influencers, models, and artists in managing their social media accounts, as well as creating content and much more."
              defaultMessage="MediaKos assists all influencers, models, and artists in managing their social media accounts, as well as creating content and much more."
            />
          </p>
          <div className="btnWrapper">
            <p className="learnmore">
              <FormattedMessage id="Learn more" defaultMessage="Learn more" />
            </p>
          </div>
        </div>
        <div className="rightPart">
          <div className="rightImg"></div>
        </div>
      </div>
    </div>
  );
}

export default OurPartnerships;
