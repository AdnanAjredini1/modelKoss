import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./our-blog.scss";
import OurBlogCard from "./OurBlogCard";
import { ourBlogData } from "./ourblogData";
import arrow from "./ourblog-assets/arrow-left(7).svg";
import { useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";

function OurBlog() {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.swiper.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="ourBlogWrapper">
      <p className="bigTitle">
        <FormattedMessage id="OUR BLOG" defaultMessage="OUR BLOG" />
      </p>
      <div className="content">
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
              slidesPerView: 1,
              spaceBetween: 10,
            },

            1054: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1440: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Navigation, FreeMode]}
          className="mySwiper"
        >
          {ourBlogData.map((item) => (
            <SwiperSlide key={item.title}>
              <OurBlogCard
                key={item.title}
                title={item.title}
                date={item.date}
                description={item.description}
                img={item.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={nextButtonRef} className="custom-next">
          <img src={arrow} width={15.31} height={8.18} alt="next" />
        </div>
        <div ref={prevButtonRef} className="custom-prev">
          <img src={arrow} alt="prev" width={15.31} height={8.18} />
        </div>
        <div className="btnWrapp">
          <p>
            <FormattedMessage
              id="Read all blog"
              defaultMessage="Read all blog"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurBlog;
