import "./our-partners.scss";
import { brandIconsData } from "./ourPartnersData";
import EmailIcon from "./our-partners-assets/8-Email.svg?react"

function OurPartners() {
  return (
    <div className="ourPartnersWrapper">
      <p className="title">OUR PARTNERS</p>
      <div className="iconsWrapper">
        {brandIconsData.map((item) => (
          <img src={item.icon} key={item.class} className={item.class} />
        ))}
      </div>
      <div className="btnWrapWrapper">
        <div className="btnWrapper">
          <p>See all partners</p>
        </div>
      </div>
      <div className="newsLetterWrapper">
        <p className="newsLetterTitle">Subscribe to our newsletter</p>
        <p className="newsLetterDescription">
          Subscribe to pour newsletter t receive the latest news and updates
          about ModelKos
        </p>
        <div className="inputWrapper">
          <EmailIcon className="emailIcon" />
          <input
            type="email"
            className="inputNewsLetter"
            placeholder="Type mail here"
            required
          />
           <div className="inputBtn">
            <p>Subscribe</p>
          </div>
         
        </div>
        <div className="inputBtnOut">
            <p>Subscribe</p>
          </div>
       
      </div>
    </div>
  );
}

export default OurPartners;
