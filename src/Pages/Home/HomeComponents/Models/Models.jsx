import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoTriangleDown } from "react-icons/go";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./models.scss";
import CardM from "./models-components/CardM";
import arrow from "./models-assets/arrow-left(2).svg";
import arrowRight from "./models-assets/arrow-left(1).svg";
import { modelsData } from "./modelsData";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import { FormattedMessage } from "react-intl";
function Models() {
  const [active, setActive] = useState(1);
  const [isDropDown, setIsDropdown] = useState(false);
  const [tabIndex, setTabIndex] = useState(1);

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
  }, [active]);
  console.log(isDropDown);

  return (
    <div className="modelssWarpper">
      <p className="title"><FormattedMessage id="Models" defaultMessage="Models" /></p>
      <div className="tabsWrapper">
        <div className="dropDownTabs">
          <p
            className="activeColumnTab"
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdown(!isDropDown);
            }}
          >
            {modelsData[tabIndex].label}{" "}
            <span className="iconSpan">
              <GoTriangleDown />
            </span>
          </p>
          <div className={`columnTabs ${isDropDown && "isDrop"}`}>
            {modelsData.map((item, index) => (
              <p
                className={`columnTab ${isDropDown ? "isDrop" : ""}`}
                key={item.label}
                onClick={() => {
                  setTabIndex(index);
                  setIsDropdown(!isDropDown);
                }}
              >
                {item.label}
              </p>
            ))}
          </div>
        </div>
        
      </div>
      
      <div className="tabsWrapper">
        <Tabs style={{ width: "100%" }} defaultIndex={1}  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="leftTabs">
            {modelsData.map((item, index) => (
              <Tab
                className={`tab ${active === index && "active"}`}
                onClick={() => setActive(index)}
                key={item.label}
              >
                {item.label}
              </Tab>
            ))}
          </TabList>

          <TabPanel style={{marginTop:'200px',marginBottom:'300px'}}>
            <h2 >Any content 1</h2>
          </TabPanel>
          <TabPanel className="contentlWrapper">
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
          </TabPanel>
          <TabPanel className="contentlWrapper" style={{marginTop:'200px',marginBottom:'300px'}}>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel className="contentlWrapper" style={{marginTop:'200px',marginBottom:'300px'}}>
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel className="contentlWrapper" style={{marginTop:'200px',marginBottom:'300px'}}>
            <h2>Any content 5</h2>
          </TabPanel>
          <TabPanel className="contentlWrapper" style={{marginTop:'200px',marginBottom:'300px'}}>
            <h2>Any content 6</h2>
          </TabPanel>
          <TabPanel className="contentlWrapper" style={{marginTop:'200px',marginBottom:'300px'}}>
            <h2>Any content 7</h2>
          </TabPanel>
          <TabPanel className="contentlWrapper" style={{marginTop:'200px',marginBottom:'300px'}}>
            <h2>Any content 8</h2>
          </TabPanel>
        </Tabs>
        <div className="rightTab">
          <p className="viewAll"><FormattedMessage id="View all" defaultMessage="View all" /></p>
          <img src={arrowRight} width={22} height={8} className="arrowImg" />
        </div>
      </div>
    </div>
  );
}

export default Models;
