import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./model-kos.scss";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import ModelAcadCard from "./ModelAcadCard";
import arrow from "../OurBlog/ourblog-assets/arrow-left(8).svg"

function ModelAcademy() {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <div className="modelacademyWrapper">
      <Swiper
      ref={swiperRef}
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
          <ModelAcadCard />
        </SwiperSlide>
        <SwiperSlide>
          <ModelAcadCard />
        </SwiperSlide>
        <SwiperSlide>
          <ModelAcadCard />
        </SwiperSlide>

        <div ref={nextButtonRef} className="custom-next">
          <img src={arrow} alt="next" />
        </div>
        <div ref={prevButtonRef} className="custom-prev">
          <img src={arrow} alt="prev" />
        </div>
      </Swiper>
    </div>
  );
}

export default ModelAcademy;
