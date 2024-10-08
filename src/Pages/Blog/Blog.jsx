import "./blog.scss";
import SearchIcon from './blog-assets/XMLID_223_(1).svg?react'
import OurPartners from "../Home/OurPartners/OurPartners";
function Blog() {
  return (
    <div className="blogPageWrapper">
      <div className="firstRow">
        <p className="title">OUR BLOG</p>
        <div className="inputWrapper">
          <SearchIcon  className="searchIcon" />
          <input type='search' className="inputSearch" placeholder="Search blog here" />
        </div>
      </div>
      <OurPartners />
    </div>
  );
}
export default Blog;
