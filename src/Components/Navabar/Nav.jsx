import { Link } from "react-router-dom";
import "./nav.scss";
import { GoTriangleDown } from "react-icons/go";
import OurWorkMegamenu from "./OurWorkMEGAMENU/OurWorkMegamenu";
import AboutMegamenu from "./AboutMEGAMENU/AboutMegamenu"

function Nav() {
  return (
    <nav id="nav">
      <div className="navLeftPart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34.033"
          height="34.033"
          viewBox="34.983 29.983 34.033 34.033"
        >
          <path
            d="M52 64 35 47l17-17 17 17-17 17Zm4.093-22.932v12.297h1.37v-12.73c-3.747 0-4.96 5.167-5.319 9.502l-4.11-9.502h-1.497v12.73h.108V40.96l.505 1.19 4.868 11.215h.18c0-2.652.2-4.944.596-6.811.63-2.985 1.74-4.831 3.298-5.486h.001Z"
            fill="#1d1d1d"
            fill-rule="evenodd"
            data-name="Subtraction 1"
          />
        </svg>
        <Link to="/" className="linkTitle">
          <p className="navBrandTitle">MODELKOS</p>
        </Link>
      </div>
      <div className="navMiddlePart">
        <Link className="navlinkk" to="/">
          Home
        </Link>
        <Link className="navlinkk" to="/">
          <div className="insideNavlink">
            <p> Our Work</p>
            <GoTriangleDown />
          </div>
        </Link>
        <div className="navlinkk aboutLink">
          <Link to="/" className="navlinkk">
            <div className="insideNavlink">
              <p> About</p>
              <GoTriangleDown />
            </div>
          </Link>
          <div className="blockk"></div>
          <AboutMegamenu />
        </div>
        <div className="navlinkk ourWorkLink">
          <Link to="/" className="navlinkk">
            <div className="insideNavlink">
              <p> Models</p>
              <GoTriangleDown />
            </div>
          </Link>
          <div className="block"></div>
          <OurWorkMegamenu />
        </div>
        
        <Link className="navlinkk" to="/">
          <div className="insideNavlink">
            <p> Academy</p>
            <GoTriangleDown />
          </div>
        </Link>
        <Link className="navlinkk" to="/">
          Blog
        </Link>
      </div>
      <div className="navRightPart">
        <p className="applyNowText">Apply now</p>
        <button className="contanctUsButton">Contact Us</button>
      </div>
    </nav>
  );
}

export default Nav;
