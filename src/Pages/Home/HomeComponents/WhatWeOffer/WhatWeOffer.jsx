import CardW from "./CardW";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowPig from "./whatweoffer-assets/arrow-left(4).svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./what-we-offer.scss";
import { whatWeOfferData } from "./whatweofferData";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import Lines from "./whatweoffer-assets/banner-assets/s_0067-lines.svg?react";
import BecomeModelLogo from "./whatweoffer-assets/banner-assets/Become a model at modelkos now -.svg?react";
import Mlogo from "./whatweoffer-assets/banner-assets/Subtraction 3.svg?react";
import BecomeModel from "./whatweoffer-assets/banner-assets/Become a model at modelkos now -(3).svg?react";
import { FormattedMessage } from "react-intl";

function WhatWeOffer() {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.nextEl = nextButtonRef.current;
      swiper.params.navigation.prevEl = prevButtonRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiperRef, nextButtonRef, prevButtonRef]);
  return (
    <div className="whatWeOfferWrapper">
      <p className="bigTitle">
        <FormattedMessage id="What we offer" defaultMessage="What we offer" />
      </p>
      <div className="carouselWrapper">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.nextEl = nextButtonRef.current;
            swiper.params.navigation.prevEl = prevButtonRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            1400: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1686: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Navigation, FreeMode]}
          className="mySwiper"
        >
          {whatWeOfferData.map((item, index) => (
            <SwiperSlide key={index}>
              <CardW
                title={item.title}
                icon={item.icon}
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={nextButtonRef} className="custom-next">
          <img src={arrowPig} alt="next" />
        </div>
        <div ref={prevButtonRef} className="custom-prev">
          <img src={arrowPig} alt="prev" />
        </div>
      </div>
      <div className="buttonWrapper">
        <p><FormattedMessage id="See all" defaultMessage="See all" /></p>
      </div>

      <p className="bannerText">
        <FormattedMessage
          id="ModelKos is one of the most influential fashion news sites and creative resources within the fashion industry, with an extensive database, feature interviews of the creative stars of the industry, and its influential top model rankings."
          defaultMessage="ModelKos is one of the most influential fashion news sites and creative resources within the fashion industry, with an extensive database, feature interviews of the creative stars of the industry, and its influential top model rankings."
        />
      </p>
      <Lines className="lines" />
      <BecomeModelLogo className="becomemodelLogo" />
      <Mlogo className="mlogo" />
      <BecomeModel className="becomeModelMainLogo" />
    </div>
  );
}

export default WhatWeOffer;
