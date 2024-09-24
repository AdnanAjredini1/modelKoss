import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./models.scss";
import CardM from "./models-components/CardM";
import arrow from "./models-assets/arrow-left(2).svg";
import arrowRight from "./models-assets/arrow-left(1).svg";
import { modelsData } from "./modelsData";
import { Pagination, Navigation,FreeMode } from "swiper/modules";
function Models() {
  const [active, setActive] = useState(1);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <div className="modelssWarpper">
      <p className="title">Models</p>
      <div className="tabsWrapper">
        <div className="dropDownTabs"></div>
        <div className="leftTabs">
         
          {modelsData.map((item, index) => (
            <p
              className={`tab ${active === index && "active"}`}
              key={item.label}
              onClick={() => setActive(index)}
            >
              {item.label}
            </p>
          ))}
        </div>
        <div className="rightTab">
          <p className="viewAll">View all</p>
          <img src={arrowRight} width={22} height={8} className="arrowImg" />
        </div>
      </div>
      <div className="contentlWrapper">
        {active === 1 ? (
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
              modules={[Pagination, Navigation,FreeMode]}
              className="mySwiper"
            >
              {modelsData[1].content.map((model) => (
                <SwiperSlide key={model.img}>
                  <CardM
                    name={model.name}
                    nameClass="nameClass"
                    img={model.img}
                    imgClass="imgClass"
                    modelText="modelText"
                    cardMWrapper="cardWrapper"
                    price="150"
                    priceClass="priceClass"
                    place="Prishtina"
                    placeClass="placeClass"
                    locationIconClass="locationIconClass"
                    views="290"
                    viewsClass="viewsClass"
                    viewsIconClass="viewsIconClass"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div ref={nextButtonRef} className="custom-next">
              <img src={arrow} alt="next" />
            </div>
            <div ref={prevButtonRef} className="custom-prev">
              <img src={arrow} alt="prev" className="arrow" />
            </div>
          </div>
        ) : (
          <div className="otherContents">
           <p>{modelsData[active].content} </p>
           
          </div>
        )}
      </div>
    </div>
  );
}

export default Models;
