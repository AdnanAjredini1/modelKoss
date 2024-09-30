import "./ourblog-card.scss";
import Arrow from "./ourblog-assets/arrow-left(8).svg?react"
function OurBlogCard({ img, date, title, description }) {
  return (
    <div className="ourBlogCardWrapper">
      <img src={img} className="imgClass" />
      <p className="date">{date}</p>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <div className="readmoreWrapper">
            <p className="readmore">Read more</p>
            <Arrow className="arrowRmore" />
          </div>
    </div>
  );
}

export default OurBlogCard;
