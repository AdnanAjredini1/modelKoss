import "./client-card.scss";
import BgPoints from "./whatpeoplesay-assets/Group 34(2).svg?react";
import RatingPiont from "./whatpeoplesay-assets/Ellipse 12.svg?react";
import clientImg from "./whatpeoplesay-assets/ivan-dodig-R21SyyJDF.webp";
import { FormattedMessage } from "react-intl";

function ClentCard() {
  return (
    <div className="clientCardWrapper">
      <p className="titleReview">
        <FormattedMessage
          id="The best agency"
          defaultMessage="The best agency"
        />
      </p>
      <p className="description">
        <FormattedMessage
          id="Sarah Doukas founded the agency in her home in 1987. With Richard Branson as her business partner, Sarah revolutionized the traditional modelling industry by launching the first UK agency to represent, worldwide, new faces Sarah had discovered herself and this became the hallmark of the agency. 1988 is remembered as the year Sarah changed the fashion industry when she spotted Kate Moss at JFK Airport in New York City."
          defaultMessage="Sarah Doukas founded the agency in her home in 1987. With Richard Branson as her business partner, Sarah revolutionized the traditional modelling industry by launching the first UK agency to represent, worldwide, new faces Sarah had discovered herself and this became the hallmark of the agency. 1988 is remembered as the year Sarah changed the fashion industry when she spotted Kate Moss at JFK Airport in New York City."
        />
      </p>
      <BgPoints className="bgPoints" />
      <div className="personalInfoWrapper">
        <p className="name">Xhensila halimi</p>
        <p className="position">
          <FormattedMessage
            id="Social Media Manager"
            defaultMessage="Social Media Manager"
          />
        </p>
        <div className="ratingWrapper">
          <p className="ratingText">
            {" "}
            <FormattedMessage id="Rating" defaultMessage="Rating" />
          </p>
          <div className="poointsWrapper">
            <RatingPiont className="blackpoint" />
            <RatingPiont className="blackpoint" />
            <RatingPiont className="blackpoint" />
            <RatingPiont className="blackpoint" />
            <RatingPiont className="gPoint" />
          </div>
          <p className="ratingNum">({4.1})</p>
        </div>
        <img src={clientImg} className="clientphoto" />
      </div>
    </div>
  );
}

export default ClentCard;
