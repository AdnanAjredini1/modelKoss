import AboutUs from "./HomeComponents/AboutUS/AboutUs";
import BeingClassy from "./HomeComponents/BeingClassy/BeingClassy";
import Hero from "./HomeComponents/Hero/Hero";
import ModelMarketing from "./HomeComponents/ModelMarketing/ModelMarketing";
import Models from "./HomeComponents/Models/Models";
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
      <BeingClassy />
      <ModelMarketing />
      <Models />
    </div>
  );
}

export default Home;
