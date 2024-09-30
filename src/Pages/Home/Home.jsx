import AboutUs from "./HomeComponents/AboutUS/AboutUs";
import BeingClassy from "./HomeComponents/BeingClassy/BeingClassy";
import FreeEducation from "./HomeComponents/FreeEducation/FreeEducation";
import Hero from "./HomeComponents/Hero/Hero";
import ModelAcademy from "./HomeComponents/ModelAcademy/ModelAcademy";
import ModelMarketing from "./HomeComponents/ModelMarketing/ModelMarketing";
import Models from "./HomeComponents/Models/Models";
import OurBlog from "./HomeComponents/OurBlog/OurBlog";
import OurModels from "./HomeComponents/OurModels/OurModels";
import OurPartnerships from "./HomeComponents/OurPartnerships/OurPartnerships";
import TheDayOf from "./HomeComponents/TheDayOF/TheDayOf";
import WhatPeopleSay from "./HomeComponents/WhatPeopleSay/WhatPeopleSay";
import WhatWeOffer from "./HomeComponents/WhatWeOffer/WhatWeOffer";
import OurPartners from "./OurPartners/OurPartners";
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
      <WhatWeOffer />
      <WhatPeopleSay />
      <OurPartnerships />
      <FreeEducation />
      <OurBlog />
      <ModelAcademy />
      <OurPartners />
    </div>
  );
}

export default Home;
