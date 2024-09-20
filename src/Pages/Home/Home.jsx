import AboutUs from "./HomeComponents/AboutUS/AboutUs";
import Hero from "./HomeComponents/Hero/Hero";
import OurModels from "./HomeComponents/OurModels/OurModels";
import TheDayOf from "./HomeComponents/TheDayOF/TheDayOf";
import "./home.scss";

function Home() {
  return (
    <div className="homeWrapper">
      <Hero />
      <AboutUs />
      <TheDayOf />
      <OurModels />
    </div>
  );
}

export default Home;
