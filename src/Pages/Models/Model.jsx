import { useParams } from "react-router-dom";
import "./model.scss";
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


const modelData = {
  andalleshi: {
    name: "Anda Lleshi",
    descriptions: [
      `Height  5'10"`,
      `Bust  34" A `,
      `Waist  24" `,
      `Hips  34" `,
      `Dress  2 US`,
      "Shoe  8 US",
      "Hair  Dark Blonde",
      "Eyes  Brown",
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
  const { model } = useParams();
  const modelInfo = modelData[model] || {
    name: "Unknown",
    description: "No information available.",
    images: [],
  };
  
 
  return (
    <div className="modelProfileWrapper">
    {/* {createPortal(<div className="backdroSliderWrapper">fdnfknfakdf</div>,document.getElementById("backdropSlider"))} */}
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
          {modelInfo.images.map((image) => (
            <div className="imgDiv" key={image}>
              <div className="image" style={{ content: `url(${image})` }}></div>

              <div className="linearGradient"></div>
              <div className="zoomIconsWrapper">
                <UpArrow className="uparrow" />
                <DownArrow  className="downarrow"/>
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
