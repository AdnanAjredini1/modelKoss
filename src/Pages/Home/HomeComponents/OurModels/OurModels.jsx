import "./our-models.scss";
import { Link } from "react-router-dom";
import ourModelsData from "./ourModelData";
import { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import HoverModel from "./HoverModel";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";


function OurModels() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="ourModelsWrapper">
      <motion.p
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:1.1}}
       className="title">
        <FormattedMessage id="OUR MODELS" defaultMessage="OUR MODELS" />
      </motion.p>
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
                <Link
                  to={item.to}
                  key={item.img}
                  style={{ textDecoration: "none" }}
                >
                  <div className="imgDiv" key={item.img}>
                    {item.type === "img" ? (
                      <div className="imgModel" style={{content:`url(${item.img})`}}></div>
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
        <div className="seeAllButton">
          <FormattedMessage
            id="See all models"
            defaultMessage="See all models"
          />
        </div>
      </div>
    </div>
  );
}

export default OurModels;
