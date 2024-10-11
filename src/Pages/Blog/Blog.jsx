import "./blog.scss";
import SearchIcon from "./blog-assets/XMLID_223_(1).svg?react";
import OurPartners from "../Home/OurPartners/OurPartners";
import ArrowDown from "./blog-assets/Path 338.svg?react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { blogData, tabsData } from "./blogData";
import OurBlogCard from "../Home/HomeComponents/OurBlog/OurBlogCard";
import { GoTriangleDown } from "react-icons/go";
import Pagination from "./Pagination/Pagination";
import { useIntl } from "react-intl";

function Blog() {
  const intl = useIntl();
  const [activeTab, setActiveTab] = useState(0);
  const [isDropDown, setIsDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const [isDropDownPostPerPage, setIsDropdownPostPerPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const filteredBlogData = blogData.filter((blog) => {
    const title = intl.formatMessage({ id: blog.title.props.id });
    const description = intl.formatMessage({ id: blog.description.props.id });

    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const currentBlogData = filteredBlogData.slice(firstPostIndex, lastPostIndex);
  const postPerPageData = [9, 12, 15, 18, 21];

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);
  }, [currentPage]);

  console.log(searchTerm);

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="secondRow">
        <div className="secondRowFirstRow">
          <p className="resultsFound">{blogData.length} &nbsp; results found</p>
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
              <div
                className="perPageWrapper"
                onClick={() => setIsDropdownPostPerPage(!isDropDownPostPerPage)}
              >
                <p className="perPageText1">{postPerPage}</p>
                <ArrowDown className="arrowdown" />
              </div>
              <div
                className={`dropDownPostPerPage ${
                  isDropDownPostPerPage ? "isDrop" : ""
                }`}
              >
                {postPerPageData.map((post, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setPostPerPage(post);
                      setIsDropdownPostPerPage(!isDropDownPostPerPage);
                    }}
                  >
                    {post}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Tabs
          style={{ width: "100%" }}
          className="tabsWrapper"
          selectedIndex={activeTab}
          onSelect={(index) => setActiveTab(index)}
        >
          <div className="dropDownTabs">
            <div
              className="dropDownActiveTab"
              onClick={() => setIsDropdown(!isDropDown)}
            >
              <p>{tabsData[activeTab]}</p>
              <GoTriangleDown />
            </div>

            <div className={`columnTabs ${isDropDown && "isDrop"}`}>
              {tabsData.map((tab, index) => (
                <p
                  key={index}
                  className={`columnTab ${activeTab === index && "active"} `}
                  onClick={() => {
                    setActiveTab(index);
                    setIsDropdown(!isDropDown);
                  }}
                >
                  {tab}
                </p>
              ))}
            </div>
          </div>
          <TabList className="tabs">
            {tabsData.map((tab, index) => (
              <Tab
                key={index}
                className={`tab ${activeTab === index && "active"} `}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanel
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "fit-content",
            }}
          >
            <div className="gridWrapper">
              {currentBlogData.map((item, index) => (
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
        </Tabs>
      </div>
      <Pagination
        totalPosts={filteredBlogData.length}
        postsPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <OurPartners />
    </div>
  );
}
export default Blog;
