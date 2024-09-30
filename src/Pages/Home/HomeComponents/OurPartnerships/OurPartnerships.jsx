import "./our-partnerships.scss";
import MediaKosIcon from "./our-partnerships-assets/Group 13100.svg?react";
import leftImg from "./our-partnerships-assets/284904855_6683564610.webp";
function OurPartnerships() {
  return (
    <div className="ourPartnershipsWrapper">
      <p className="title">Our partnershipS</p>
      <div className="content">
        <div className="leftPart">
          <div className="logoWrapper">
            <MediaKosIcon className="mediaKosIcon" />
            <p className="logoText">MediaKos</p>
          </div>
          <p className="bitTitle">Manage your social media</p>
          <p className="description">
            MediaKos assists all influencers, models, and artists in managing
            their social media accounts, as well as creating content and much
            more.
          </p>
          <div className="btnWrapper">
            <p className="learnmore">Learn more</p>
          </div>
        </div>
        <div className="rightPart">
          <img src={leftImg} className="rightImg" />
        </div>
      </div>
    </div>
  );
}

export default OurPartnerships;
