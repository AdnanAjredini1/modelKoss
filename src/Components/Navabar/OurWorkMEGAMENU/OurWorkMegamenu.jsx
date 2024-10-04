import { Link } from "react-router-dom";
import "./ourwork-megamenu.scss";
import ourWorkData from "./ourworkData";
import Carousel from "./Carousel/Carousel";
import { FormattedMessage } from "react-intl";

function OurWorkMegamenu() {
  return (
    <div className="ourWorkWrapper">
      <div className="ourWorkLeftPart">
        {ourWorkData.map((item) => (
          <div className="ourWorkList" key={item.category}>
            <p className="ourWorkListTitle">{item.category}</p>
            <div className="ourWorkLink">
              {item.links.map((link) => (
                <Link className="link" to={link.to} key={link.link}>
                  {link.link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="ourWorkRightPart">
        <p className="text">
          <FormattedMessage id="Models" defaultMessage="Models" />
          &nbsp;&nbsp;{" "}
          <span className="textSpan">
            {" "}
            <FormattedMessage
              id="View all"
              defaultMessage="View all"
            /> &gt;{" "}
          </span>
        </p>
        <Carousel />
      </div>
    </div>
  );
}

export default OurWorkMegamenu;
