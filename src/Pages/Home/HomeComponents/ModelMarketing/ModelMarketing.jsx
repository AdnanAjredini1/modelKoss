import "./model-marketing.scss";
import { iconsData, items } from "./modelMarketingData";
import img1 from "./model-marketing-assets/chyntia-juls-HlVjI5W.webp";
import icon from "./model-marketing-assets/text(1).svg";
import img2 from "./model-marketing-assets/adele-shafiee-vagr_X.webp";
import img22 from "./model-marketing-assets/94b65be415f36972d060be099e53902c.webp";
import { FormattedMessage } from "react-intl";

function ModelMarketing() {
  return (
    <div className="modelMarketingWrapper">
      <div className="leftPart">
        <p className="title">
          <FormattedMessage
            id="MODEL MARKETING"
            defaultMessage="MODEL MARKETING"
          />
        </p>
        <p className="description">
          <FormattedMessage
            id="With a network of over 200,000 active members, ModelKos is the top market place for models, photographers, and creative talents in fashion to look for work. Add your online modeling portfolio to ModelKos so that prospective clients can view and make direct bookings. Modeling profiles are completely customizable, allowing you to add your Instagram feed for potential clients to view. So far, thousands of members have been scouted by industry professionals for both castings and work. Join our community to get started!"
            defaultMessage="With a network of over 200,000 active members, ModelKos is the top market place for models, photographers, and creative talents in fashion to look for work. Add your online modeling portfolio to ModelKos so that prospective clients can view and make direct bookings. Modeling profiles are completely customizable, allowing you to add your Instagram feed for potential clients to view. So far, thousands of members have been scouted by industry professionals for both castings and work. Join our community to get started!"
          />
        </p>
        <div className="lastLine">
          {items.map((item) => (
            <div key={item.name}>
              <p className="num">{item.number}</p>
              <p className="name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rightPart">
        <img src={img1} className="img1" />
        <img src={img2} className="img2" />
        <img src={img22} className="img22" />
        <img src={icon} className="icon" />
        <div className="iconsWrapper">
          {iconsData.map((icon, index) => (
            <div key={index} className="iconWrapper">
              <img src={icon.icon} width={icon.width} height={icon.height} />
              <p className="text">{icon.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModelMarketing;
