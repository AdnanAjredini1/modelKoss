import AboutUs from "./HomeComponents/AboutUS/AboutUs";
import Hero from "./HomeComponents/Hero/Hero";
import "./home.scss";

function Home() {
  return (
    <div className="homeWrapper">
      <Hero />
      <AboutUs />
    </div>
  );
}

export default Home;
