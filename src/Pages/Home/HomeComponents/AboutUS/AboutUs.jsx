import aboutUsData from "./aboutUsData";
import Card from "/src/Components/Navabar/OurWorkMEGAMENU/Carousel/Card/Card";
import icon from "./about-us-assets/text.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./about-us.scss";

import { Pagination } from "swiper/modules";
import { FormattedMessage } from "react-intl";

function AboutUs() {
  return (
    <div className="wrapper">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper2"
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="aboutUsWrapper">
            <div className="leftPart">
              <p className="title">
                <FormattedMessage id="ABOUT US" defaultMessage="ABOUT US" />
              </p>
              <p className="description">
                <FormattedMessage
                  id="ModelKos is the leading interactive fashion database connecting the world to models, creative talent, magazines, and luxury and commercial brands. With 1.1 million unique visits per month, the site stands as an essential tool to attribute credit and source new talent."
                  defaultMessage="ModelKos is the leading interactive fashion database connecting the world to models, creative talent, magazines, and luxury and commercial brands. With 1.1 million unique visits per month, the site stands as an essential tool to attribute credit and source new talent."
                />
              </p>
            </div>
            <div className="rightPart">
              <img className="icon" src={icon} alt="icon" />
              {aboutUsData.map((group, groupIndex) => (
                <div key={groupIndex} className="cardsWrapper">
                  {group.map((card) => (
                    <Card
                      key={card.img}
                      cardWrapperClass={`cardWrapperClass ${card.class}`}
                      imgClass="imgClass"
                      descriptionWrapperClass="descriptionWrapperClass"
                      descriptionClass="descriptionClass"
                      nameClass="nameClass"
                      name={card.name}
                      descriptions={card.descriptions}
                      dateClass="dateClass"
                      date={card.date}
                      img={card.img}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aboutUsWrapper">
            <div className="leftPart">
              <p className="title">ABOUT US</p>
              <p className="description">
                <FormattedMessage
                  id="ModelKos is the leading interactive fashion database connecting the world to models, creative talent, magazines, and luxury and commercial brands. With 1.1 million unique visits per month, the site stands as an essential tool to attribute credit and source new talent."
                  defaultMessage="ModelKos is the leading interactive fashion database connecting the world to models, creative talent, magazines, and luxury and commercial brands. With 1.1 million unique visits per month, the site stands as an essential tool to attribute credit and source new talent."
                />
              </p>
            </div>
            <div className="rightPart">
              <img className="icon" src={icon} alt="icon" />
              {aboutUsData.map((group, groupIndex) => (
                <div key={groupIndex} className="cardsWrapper">
                  {group.map((card) => (
                    <Card
                      key={card.img}
                      cardWrapperClass={`cardWrapperClass ${card.class}`}
                      imgClass="imgClass"
                      descriptionWrapperClass="descriptionWrapperClass"
                      descriptionClass="descriptionClass"
                      nameClass="nameClass"
                      name={card.name}
                      descriptions={card.descriptions}
                      dateClass="dateClass"
                      date={card.date}
                      img={card.img}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="aboutUsWrapper">
            <div className="leftPart">
              <p className="title">ABOUT US</p>
              <p className="description">
                <FormattedMessage
                  id="ModelKos is the leading interactive fashion database connecting the world to models, creative talent, magazines, and luxury and commercial brands. With 1.1 million unique visits per month, the site stands as an essential tool to attribute credit and source new talent."
                  defaultMessage="ModelKos is the leading interactive fashion database connecting the world to models, creative talent, magazines, and luxury and commercial brands. With 1.1 million unique visits per month, the site stands as an essential tool to attribute credit and source new talent."
                />
              </p>
            </div>
            <div className="rightPart">
              <img className="icon" src={icon} alt="icon" />
              {aboutUsData.map((group, groupIndex) => (
                <div key={groupIndex} className="cardsWrapper">
                  {group.map((card) => (
                    <Card
                      key={card.img}
                      cardWrapperClass={`cardWrapperClass ${card.class}`}
                      imgClass="imgClass"
                      descriptionWrapperClass="descriptionWrapperClass"
                      descriptionClass="descriptionClass"
                      nameClass="nameClass"
                      name={card.name}
                      descriptions={card.descriptions}
                      dateClass="dateClass"
                      date={card.date}
                      img={card.img}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="aboutUsWrapper">
            <div className="leftPart">
              <p className="title">ABOUT US</p>
              <p className="description">
                <FormattedMessage
                  id="ModelKos is the leading interactive fashion database connecting the world to models, creative talent, magazines, and luxury and commercial brands. With 1.1 million unique visits per month, the site stands as an essential tool to attribute credit and source new talent."
                  defaultMessage="ModelKos is the leading interactive fashion database connecting the world to models, creative talent, magazines, and luxury and commercial brands. With 1.1 million unique visits per month, the site stands as an essential tool to attribute credit and source new talent."
                />
              </p>
            </div>
            <div className="rightPart">
              <img className="icon" src={icon} alt="icon" />
              {aboutUsData.map((group, groupIndex) => (
                <div key={groupIndex} className="cardsWrapper">
                  {group.map((card) => (
                    <Card
                      key={card.img}
                      cardWrapperClass={`cardWrapperClass ${card.class}`}
                      imgClass="imgClass"
                      descriptionWrapperClass="descriptionWrapperClass"
                      descriptionClass="descriptionClass"
                      nameClass="nameClass"
                      name={card.name}
                      descriptions={card.descriptions}
                      dateClass="dateClass"
                      date={card.date}
                      img={card.img}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AboutUs;
