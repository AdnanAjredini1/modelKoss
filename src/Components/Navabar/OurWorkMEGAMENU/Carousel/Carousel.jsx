import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.scss";
import { FreeMode, Pagination ,Navigation} from "swiper/modules";
import cardData from "./Card/cardData";
import Card from "./Card/Card";
import { useRef } from "react";

function Carousel() {
  console.log("error carousel");
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  return (
    <div className="carouselWrapper">
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
        {cardData.map((group, groupIndex) => (
          <SwiperSlide>
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
                date={card.date}
                img={card.img}
              />
            ))}
          </div>
          </SwiperSlide>
        ))}
        <div ref={nextButtonRef} className="custom-next">&gt;</div>
        <div ref={prevButtonRef} className="custom-prev">&lt;</div>
      </Swiper>
    </div>
  );
}

export default Carousel;
