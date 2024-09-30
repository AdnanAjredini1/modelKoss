import ClentCard from "./ClentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import {  useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./what-people-say.scss";
import arro from "./whatpeoplesay-assets/arrow-left(5).svg"





function WhatPeopleSay() {
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    const swiperRef = useRef(null);

  
  return (
    <div className="whatPSayWrapper">
      <p className="title">what people say</p>
      <div className="content">
      
        <div className="leftPart">
            <p className="bigText">
            what people say
            </p>
        </div>
        <div className="rightPart">
        <div className="swiperWrap" >
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
               
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                
                  <SwiperSlide >
                   <ClentCard />
                  </SwiperSlide>
                  <SwiperSlide >
                   <ClentCard />
                  </SwiperSlide>
                  <SwiperSlide >
                   <ClentCard />
                  </SwiperSlide>
                  <SwiperSlide >
                   <ClentCard />
                  </SwiperSlide>
                
              </Swiper>
              <div ref={nextButtonRef} className="custom-next">
                <img src={arro}  alt="next" />
              </div>
              <div ref={prevButtonRef} className="custom-prev">
                <img src={arro}   alt="prev" />
              </div>
      </div>
      </div>
         
        </div>
      
        </div>
      
   
  );
}

export default WhatPeopleSay;
