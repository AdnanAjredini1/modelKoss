import "./blog.scss";
import SearchIcon from "./blog-assets/XMLID_223_(1).svg?react";
import OurPartners from "../Home/OurPartners/OurPartners";
import ArrowDown from "./blog-assets/Path 338.svg?react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { blogData } from "./blogData";
import OurBlogCard from "../Home/HomeComponents/OurBlog/OurBlogCard";
function Blog() {
  // const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="blogPageWrapper">
      <div className="firstRow">
        <p className="title">OUR BLOG</p>
        <div className="inputWrapper">
          <SearchIcon className="searchIcon" />
          <input
            type="search"
            className="inputSearch"
            placeholder="Search blog here"
          />
        </div>
      </div>
      <div className="secondRow">
        <div className="secondRowFirstRow">
          <p className="resultsFound">150 results found</p>
          <div className="rightPart">
            <div className="date">
              <p className="dateText">Date</p>
              <div className="dateWrapper">
                <p className="dateText1">MM/DD/YY</p>
                <ArrowDown className="arrowdown" />
              </div>
            </div>
            <div className="perPage">
              <p className="perPageText">Per page</p>
              <div className="perPageWrapper">
                <p className="perPageText1">12</p>
                <ArrowDown className="arrowdown" />
              </div>
            </div>
          </div>
        </div>

        <Tabs style={{ width: "100%" }} className="tabsWrapper">
          <TabList className="tabs">
            <Tab to="all" className="tab">
              All
            </Tab>
            <Tab className="tab">Modeling</Tab>
            <Tab className="tab">Fashion</Tab>
            <Tab className="tab">Celebrities</Tab>
            <Tab className="tab">Popular</Tab>
            <Tab className="tab">Trendy</Tab>
          </TabList>
          <TabPanel
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div className="gridWrapper">
              {blogData.map((item, index) => (
                <div size="auto" key={index} className="gridElement">
                  <OurBlogCard
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    img={item.img}
                    wrapperClass="wrapperClass"
                  />
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          
          </TabPanel>
        </Tabs>
      </div>
      <OurPartners />
    </div>
  );
}
export default Blog;
