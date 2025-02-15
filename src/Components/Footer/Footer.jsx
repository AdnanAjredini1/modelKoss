import { Link } from "react-router-dom";
import Icon from "./footer-components/Icon";
import "./footer.scss";
import footerData from "./footerData";
import imgFB from "./facebook(1).svg"
import imgInsta from "./instagram(2).svg"
import imgTikTok from "./tiktok.svg"
import imgTwitter from "./twitter(2).svg"
import SelectLanguage from "./SelectLanguage/SelectLanguage";
import { FormattedMessage } from "react-intl";



function Footer() {
  return (
    <div className="footerWrapper">
      <div className="firstRow">
        <p className="text">modeling</p>
        <Icon
          fill="#fff"
          width="184.117"
          height="184.033"
          insideSvgFill="#fff"
        />
        <p className="text">modeling</p>
      </div>
      <div className="secondRow">
        <div className="leftPart">
          {footerData.map((category) => (
            <div className="linksWrapper" key={category.category}>
              <p className="categoryText">{category.category}</p>
              <div className="list">
                {category.links.map((link) => (
                  <Link className="link" key={link.link} to={link.to}>
                    {link.link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="line"></div>
          <div className="middlePart">
          <p className="title"><FormattedMessage id="MODELS" defaultMessage="MODELS" /></p>
          <div className="addressWrapper">
            <p className="address"> <FormattedMessage id="Women" defaultMessage="Women" /> - 0207 376 7764</p>
            <p className="address"><FormattedMessage id="Men" defaultMessage="Men" /> - 0207 376 7464 </p>
            <p className="address">bookamodel@modelkos.com</p>
          </div>
          <p className="jobs"><FormattedMessage id="JOBS" defaultMessage="JOBS" /></p>
          <p className="jobsEmail">jobs@modelkos.com</p>
        </div>
        <div className="rightPart">
            <p className="title" ><FormattedMessage id="MODELKOS MANAGEMENT" defaultMessage="MODELKOS MANAGEMENT" /></p>
            <div>
            <p className="text"> <FormattedMessage id="1st Floor" defaultMessage="1st Floor" /></p>
            <p className="text"><FormattedMessage id="1st Floor" defaultMessage="1st Floor" /> 5 Jubilee Place Prishtina, Kosova</p>
            <p className="text">Prishtina, Kosova</p>
            </div>
        </div>
        </div>
    
      </div>
      <div className="lastRow">
        <div className="linee"></div>
        <div className="end">
            <div className="brandWrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34.033"
              height="34.033"
              viewBox="34.983 29.983 34.033 34.033"
            >
              <path
                d="M52 64 35 47l17-17 17 17-17 17Zm4.093-22.932v12.297h1.37v-12.73c-3.747 0-4.96 5.167-5.319 9.502l-4.11-9.502h-1.497v12.73h.108V40.96l.505 1.19 4.868 11.215h.18c0-2.652.2-4.944.596-6.811.63-2.985 1.74-4.831 3.298-5.486h.001Z"
                fill="#fff"
                fill-rule="evenodd"
                data-name="Subtraction 1"
              />
            </svg>
            <p className="brand">MODELKOS</p>
            <p className="rights">© 2024 &nbsp;·&nbsp; MODELKOS</p>
            </div>
          
             <p className="terms"><span><FormattedMessage id="Privacy Statement" defaultMessage="Privacy Statement" /></span> &nbsp;&nbsp;|&nbsp;&nbsp;<span><FormattedMessage id="Terms of Service" defaultMessage="Terms of Service" /></span>  &nbsp;&nbsp;|&nbsp;&nbsp; <span><FormattedMessage id="Help"  defaultMessage="Help" />  / FAQ</span></p>
             <div className="iconsAndLanguages">
              <div className="iconsWrapper">
               <img width={8.2} height={17.7} src={imgFB} />
               <img  width={19} height={19} src={imgInsta} />
               <img  width={16} height={19} src={imgTikTok} />
               <img   width={21.9} height={19} src={imgTwitter} />
              </div>
              <p className="number">
              +383 (44) 100 200
              </p>
              <SelectLanguage />

             </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
