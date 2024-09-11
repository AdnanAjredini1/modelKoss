import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./mobile-nav.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

function MobileNav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdown, setIsDropdown] = useState({
    ourWork: false,
    about: false,
    models: false,
    academy: false,
  });
  console.log(isMobile);

  function onClickDropDown(name, value) {
    setIsDropdown((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <>
      <header className="navHeader">
        <div className="headerLeftPart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40.033"
            height="40.033"
            viewBox="34.983 29.983 34.033 34.033"
          >
            <path
              d="M52 64 35 47l17-17 17 17-17 17Zm4.093-22.932v12.297h1.37v-12.73c-3.747 0-4.96 5.167-5.319 9.502l-4.11-9.502h-1.497v12.73h.108V40.96l.505 1.19 4.868 11.215h.18c0-2.652.2-4.944.596-6.811.63-2.985 1.74-4.831 3.298-5.486h.001Z"
              fill="#1d1d1d"
              fill-rule="evenodd"
              data-name="Subtraction 1"
            />
          </svg>
          <p className="headerTitle">MODELKOS</p>
        </div>
        <button
          className={`hamburger hamburger--collapse  ${
            isMobile && "is-active"
          }`}
          type="button"
          onClick={() => setIsMobile(true)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </header>
      {isMobile && (
        <div className="backdrop" onClick={() => setIsMobile(false)}></div>
      )}
      <nav className={`sideNav  ${isMobile && "isMobileClass"}`}>
        <div className="sidenavFirstRow">
          <div className="mobileNavHeader">
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
            <p className="brand">MODELKOS</p>
          </div>

          <svg
            onClick={() => setIsMobile(!isMobile)}
            className="cancelButton"
            width="24px"
            height="24px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            stroke-width="3"
            stroke="#000000"
            fill="none"
          >
            <line x1="8.06" y1="8.06" x2="55.41" y2="55.94" />
            <line x1="55.94" y1="8.06" x2="8.59" y2="55.94" />
          </svg>
        </div>
        <ul className="sideLinksUl">
          <Link className="mobileNavLink" to="/">
            Home
          </Link>
          <div
            className="mobileNavLink "
            onClick={() => onClickDropDown("ourWork",!isDropdown.ourWork)}
          >
            <div className="dropdownLink">
              <p className="dropDownTitle">Our Work</p>
              <GoTriangleDown />
            </div>

            <ul
              className={`dropDownElementsUl ${
                isDropdown.ourWork && "isDropDown"
              }`}
            >
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
              <li>item4</li>
            </ul>
          </div>
          <div
            className="mobileNavLink "
            onClick={() => onClickDropDown("about",!isDropdown.about)}
          >
            <div className="dropdownLink">
              <p className="dropDownTitle">About</p>
              <GoTriangleDown />
            </div>

            <ul className={`dropDownElementsUl ${isDropdown.about && "isDropDown"}`}>
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
              <li>item4</li>
            </ul>
          </div>
          <div
            className="mobileNavLink "
            onClick={() => onClickDropDown("models",!isDropdown.models)}
          >
            <div className="dropdownLink">
              <p className="dropDownTitle">Models</p>
              <GoTriangleDown />
            </div>

            <ul className={`dropDownElementsUl ${isDropdown.models && "isDropDown"}`}>
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
              <li>item4</li>
            </ul>
          </div>
          <div
            className="mobileNavLink "
            onClick={() => onClickDropDown("academy",!isDropdown.academy)}
          >
            <div className="dropdownLink">
              <p className="dropDownTitle">Academy</p>
              <GoTriangleDown />
            </div>

            <ul className={`dropDownElementsUl ${isDropdown.academy && "isDropDown"}`}>
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
              <li>item4</li>
            </ul>
          </div>
          <Link className="mobileNavLink" to="/">
            Blog
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default MobileNav;
