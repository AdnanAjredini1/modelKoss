import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./model.scss";
import {  Pagination, Navigation } from "swiper/modules";
import Fb from "./models-assets/facebook(3).svg?react";
import Insta from "./models-assets/instagram(5).svg?react";
import Tiktok from "./models-assets/tiktok(2).svg?react";
import Twitter from "./models-assets/twitter(4).svg?react";
import image1 from "./models-assets/032.webp";
import image2 from "./models-assets/180.webp";
import image3 from "./models-assets/219.webp";
import image4 from "./models-assets/227.webp";
import image5 from "./models-assets/222.webp";
import image6 from "./models-assets/234.webp";
import image7 from "./models-assets/242.webp";
import image8 from "./models-assets/236.webp";
import image9 from "./models-assets/252.webp";
import image10 from "./models-assets/225.webp";
import image11 from "./models-assets/181.webp";
import image12 from "./models-assets/237.webp";
import UpArrow from "./models-assets/arrow-left(10).svg?react";
import DownArrow from "./models-assets/arrow-left(9).svg?react";
import Masonry from "@mui/lab/Masonry";
import OurPartners from "../Home/OurPartners/OurPartners";
import { createPortal } from "react-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import arrowSlider from "./models-assets/_.svg";
import { AnimatePresence, motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
const modelData = {
  andalleshi: {
    name: "Anda Lleshi",
    descriptions: [
      <FormattedMessage
        id="Height"
        defaultMessage="Height {size}"
        values={{ size: `5'10"` }}
        key="1"
      />,
      <FormattedMessage
        id="Bust"
        defaultMessage="Bust {size}"
        values={{ size: `34" A` }}
        key="2"
      />,
      <FormattedMessage
        id="Waist"
        defaultMessage="Waist {size}"
        values={{ size: `24"` }}
        key="3"
      />,
      <FormattedMessage
        id="Hips"
        defaultMessage="Hips {size}"
        values={{ size: `34"` }}
        key="4"
      />,
      <FormattedMessage
        id="Dress"
        defaultMessage="Dress {size}"
        values={{ size: `2 US` }}
        key="5"
      />,
      <FormattedMessage
        id="Shoe"
        defaultMessage="Shoe {size}"
        values={{ size: `8 US` }}
        key="6"
      />,
      <FormattedMessage
        id="Hair Dark Blonde"
        defaultMessage="Hair Dark Blonde"
        key="7"
      />,
      <FormattedMessage id="Eyes Brown" defaultMessage="Eyes Brown" key="8" />,
    ],
    images: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
    ],
  },
  unknownModel: {},
};

function Model() {
  const location = useLocation();
  const { model } = useParams();
  const modelInfo = modelData[model] || {
    name: "Unknown",
    descriptions: ["No information available."],
    images: [],
  };
  const [imageClicked, setImageClicked] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useLayoutEffect(() => {
    if (imageClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [imageClicked]);

  useLayoutEffect(() => {
    const isHomePage = location.pathname === "/";
    const isModelPage = location.pathname.startsWith("/models/");

    if (isHomePage || isModelPage) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useLayoutEffect(() => {
    if (swiperRef.current && imageClicked) {
      swiperRef.current.slideTo(activeImage);
    }
  }, [activeImage, imageClicked]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.navigation) {
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [swiperRef, nextButtonRef, prevButtonRef]);
  

  return (
    <div className="modelProfileWrapper">

      {createPortal(
       
        <AnimatePresence>
    {imageClicked && (
      <div className={` ${imageClicked ? "backdroSliderWrapper" : "dispalyBackdrop"}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, }}
          // exit={{ opacity: 0, scale: 0.1 , dration:0.001}}
          transition={{
        type: "spring",
        stiffness: 300, 
        damping: 30,  
        
    }}
          className="carouselWrapper"
        >
          <button
            onClick={() => setImageClicked(!imageClicked)}
            className="btnClose"
          >
            X
          </button>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            initialSlide={activeImage}
            spaceBetween={0}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
            }}
            onInit={(swiper) => {
              swiperRef.current = swiper;
              swiper.params.navigation.nextEl = nextButtonRef.current;
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {modelInfo.images.map((image) => (
              <SwiperSlide key={image}>
                <div
                  className="imageCArousel"
                  style={{ content: `url(${image})` }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div ref={nextButtonRef} className="custom-next">
            <img src={arrowSlider} alt="next" />
          </div>
          <div ref={prevButtonRef} className="custom-prev">
            <img src={arrowSlider} alt="prev" />
          </div>
        </motion.div>
        <div className="backdropp"></div>
      </div>
    )}
  </AnimatePresence>,
        document.getElementById("backdropSlider")
      )}
      <p className="name">{modelInfo.name}</p>
      <div className="descriptions">
        {modelInfo.descriptions.map((item) => (
          <p key={item} className="description">
            {item}
          </p>
        ))}
      </div>
      <div className="socialMediaIcons">
        <Fb className="fbIcon" />
        <Insta className="instagramIcon" />
        <Tiktok className="tiktokIcon" />
        <Twitter className="twitterIcon" />
      </div>
      <div className="modelImagesWrapper">
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 3 }} spacing={3}>
          {modelInfo.images.map((image, index) => (
            <div
              className="imgDiv"
              key={image}
              onClick={() => {
                setImageClicked(!imageClicked);
                setActiveImage(index);
              }}
            >
              <div className="image" style={{ content: `url(${image})` }}></div>

              <div className="linearGradient"></div>
              <div className="zoomIconsWrapper">
                <UpArrow className="uparrow" />
                <DownArrow className="downarrow" />
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      <OurPartners />
    </div>
  );
}

export default Model;
