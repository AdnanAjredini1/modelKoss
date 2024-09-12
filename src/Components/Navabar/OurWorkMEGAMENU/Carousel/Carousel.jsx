import { Swiper, SwiperSlide } from 'swiper/react';
import './carousel.scss'
// Import Swiper styles
import 'swiper/scss';
import 'swiper/css';
import 'swiper/css/bundle';



function Carousel() {
  console.log("error carousel");
  
    return (
        <div>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
      </div>
    );
}

export default Carousel;