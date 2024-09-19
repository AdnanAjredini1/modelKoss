import AboutUs from "./HomeComponents/AboutUS/AboutUs";
import Hero from "./HomeComponents/Hero/Hero";
import TheDayOf from "./HomeComponents/TheDayOF/TheDayOf";
import "./home.scss";

function Home() {
  return (
    <div className="homeWrapper">
      <Hero />
      <AboutUs />
      <TheDayOf />
    </div>
  );
}

export default Home;
