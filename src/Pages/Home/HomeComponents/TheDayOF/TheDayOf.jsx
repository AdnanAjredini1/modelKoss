import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./the-day-of.scss";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import arrowIcon from "./thedayof-assets/Group 13131.svg"

function TheDayOf() {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  return (
    <div className="thedayofWrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
            <p className="bigText1">THE DAY OF</p>
            <p className="bigText2">modeling</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Hello</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Hello</div>
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
