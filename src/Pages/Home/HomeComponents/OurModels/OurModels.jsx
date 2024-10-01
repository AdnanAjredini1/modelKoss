import NotImg from "./NotImg";
import "./our-models.scss";
import { Link } from "react-router-dom";
import ourModelsData from "./ourModelData";
import { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import HoverModel from "./HoverModel";

function OurModels() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="ourModelsWrapper">
      <p className="title">OUR MODELS</p>
      <div className="linksWrapper">
        {ourModelsData.map((tab, index) => (
          <p
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`link ${activeTab === index && "active"}`}
          >
            {tab.label}
          </p>
        ))}
      </div>
      <div className="tabWrapper">
        {activeTab === 0 ? (
          <div className="tabsContent">
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
              {ourModelsData[0].content.map((item) => (
                <Link to={item.to} key={item.img} style={{textDecoration:"none"}}>
                <div className="imgDiv" key={item.img}>
                  {item.type === "img" ? (
                    <img src={item.img} className="imgModel" />
                  ) : (
                    item.component
                  )}
                  <HoverModel
                    hoverWrapperClass={`contentText ${item.class}`}
                    name={item.name}
                    nameClass="name"
                    description="description"
                    descriptionsWrapperClass="descriptionsWrapperClass"
                  />
                </div>
                </Link>
             
              ))}
            </Masonry>
          </div>
        ) : (
          <p
            style={{
              textAlign: "center",
              marginTop: "200px",
              marginBottom: "200px",
              fontSize: "70px",
            }}
          >
            {ourModelsData[activeTab].content}
          </p>
        )}
      </div>
      <div className="seeAllButtonW">
      <div className="seeAllButton">See all models</div>
      </div>
    
    </div>
  );
}

export default OurModels;
