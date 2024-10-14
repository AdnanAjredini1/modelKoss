import "./our-partners.scss";
import { brandIconsData } from "./ourPartnersData";
import EmailIcon from "./our-partners-assets/8-Email.svg?react";
import Line from "./our-partners-assets/Path 22.svg?react";
import { FormattedMessage } from "react-intl";

function OurPartners() {
  return (
    <div className="ourPartnersWrapper">
      <p className="title">
        <FormattedMessage id="OUR PARTNERS" defaultMessage="OUR PARTNERS" />
      </p>
      <div className="slider">
	<div className="slide-track">
	
        {brandIconsData.map((item) => (
          <div className="slide" key={item.class}>
          <img src={item.icon} key={item.class} className={item.class} />
          </div >
        ))}
  
	</div>
</div>
    
      <div className="btnWrapWrapper">
        <div className="btnWrapper">
          <p>
          <FormattedMessage
            id="See all partners"
            defaultMessage="See all partners"
          /></p>
        </div>
      </div>
      <div className="newsLetterWrapper">
        <Line className="line" />
        <p className="newsLetterTitle">
          <FormattedMessage
            id="Subscribe to our newsletter"
            defaultMessage="Subscribe to our newsletter"
          />
        </p>
        <p className="newsLetterDescription">
          <FormattedMessage
            id="Subscribe to pour newsletter to receive the latest news and updates about ModelKos"
            defaultMessage="Subscribe to pour newsletter to receive the latest news and updates about ModelKos"
          />
        </p>
        <div className="inputWrapper">
          <EmailIcon className="emailIcon"  />
          <FormattedMessage id="Type mail here" defaultMessage="Type mail here">
          {(msg) => (<input placeholder={msg}  type="email"  className="inputNewsLetter"   required />)}
          </FormattedMessage>
        
          <div className="inputBtn">
            <p>
              <FormattedMessage id="Subscribe" defaultMessage="Subscribe" />
            </p>
          </div>
        </div>
        {/* <div className="inputBtnOut">
          <p>
            <FormattedMessage id="Subscribe" defaultMessage="Subscribe" />
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default OurPartners;
