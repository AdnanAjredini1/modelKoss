import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./the-day-of.scss";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import arrowIcon from "./thedayof-assets/Group 13131.svg";
import img1 from "./thedayof-assets/286633495_4102350776.webp";
import img2 from "./thedayof-assets/286874736_7261172651.webp";
import Icon from "../Hero/Icon";

function TheDayOf() {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  return (
    <div className="thedayofWrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
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
        modules={[Pagination, FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="elementWrapper">
            <Icon
              wrapperClass="wrapperClass"
              width="185"
              height="185.1"
              fill="#fff"
              stroke="#fff"
              widthArrow="42.46"
              heightArrow="18"
              arrowSvgClass="arrowSvgClass"
            />
            <img className="img1" src={img1} alt="img1" />
            <img className="img2" src={img2} alt="img2" />
            <p className="bigText1">THE DAY OF</p>
            <p className="bigText2">modeling</p>
            <p className="bigText3">THE DAY OF</p>
            <p className="bigText4">modeling</p>
            <p className="bigText5">modelkos</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="elementWrapper">
            <img className="img1" src={img1} alt="img1" />
            <img className="img2" src={img2} alt="img2" />
            <p className="bigText1">THE DAY OF</p>
            <p className="bigText2">modeling</p>
            <p className="bigText3">THE DAY OF</p>
            <p className="bigText4">modeling</p>
            <p className="bigText5">modelkos</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="elementWrapper">
            <img className="img1" src={img1} alt="img1" />
            <img className="img2" src={img2} alt="img2" />
            <p className="bigText1">THE DAY OF</p>
            <p className="bigText2">modeling</p>
            <p className="bigText3">THE DAY OF</p>
            <p className="bigText4">modeling</p>
            <p className="bigText5">modelkos</p>
          </div>
        </SwiperSlide>

        <div ref={nextButtonRef} className="custom-next">
          <img src={arrowIcon} alt="next" />
        </div>
        <div ref={prevButtonRef} className="custom-prev">
          <img src={arrowIcon} alt="prev" />
        </div>
      </Swiper>
    </div>
  );
}

export default TheDayOf;
