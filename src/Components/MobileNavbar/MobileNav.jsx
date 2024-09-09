import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./mobile-nav.scss"
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <nav
      className={`navbar  fixed-top mobileNav 
    //   navbarBackground ? "nav-scrolled  " : ""
    `}
    >
      <div className="container-fluid ">
        <Link className="navbar-brand mobileTitle" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44.033"
            height="44.033"
            viewBox="34.983 29.983 34.033 34.033"
          >
            <path
              d="M52 64 35 47l17-17 17 17-17 17Zm4.093-22.932v12.297h1.37v-12.73c-3.747 0-4.96 5.167-5.319 9.502l-4.11-9.502h-1.497v12.73h.108V40.96l.505 1.19 4.868 11.215h.18c0-2.652.2-4.944.596-6.811.63-2.985 1.74-4.831 3.298-5.486h.001Z"
              fill="#1d1d1d"
              fill-rule="evenodd"
              data-name="Subtraction 1"
            />
          </svg>
          MODELKOS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className={`navbar-toggler-icon  `}></span>
        </button>
        <div
          className="offcanvas offcanvas-start container-fluid-bg-color"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
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
            <h5
              className="offcanvas-title mobileTitleNav"
              id="offcanvasNavbarLabel"
            >

               MODELKOS
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item item-mob">
                <a className="nav-link " aria-current="page" href="/about">
                  {/* <FormattedMessage id="About" defaultMessage="About" /> */}
                  Home
                </a>
              </li>

              <li className="nav-item dropdown  item-mob">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <FormattedMessage id="Services" defaultMessage="Services" /> */}
                  Our Work
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item " href="#">
                      {/* <FormattedMessage
                      id="Corporate Law"
                      defaultMessage="Corporate Law"
                    /> */}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="#">
                      {/* <FormattedMessage
                      id="Real Estate"
                      defaultMessage="Real Estate"
                    /> */}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {/* <FormattedMessage
                      id="Tax & Customs Laws "
                      defaultMessage="Tax & Customs Laws "
                    /> */}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {/* <FormattedMessage
                      id="Public Procurement"
                      defaultMessage="Public Procurement"
                    /> */}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {/* <FormattedMessage
                      id="Banking & Finance"
                      defaultMessage="Banking & Finance"
                    /> */}
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item  item-mob">
                <a className="nav-link" href="/news">
                  {/* <FormattedMessage id="News" defaultMessage="News" /> */}
                  About
                </a>
              </li>

              <li className="nav-item dropdown  item-mob">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <FormattedMessage id="Resources" defaultMessage="Resources" /> */}
                  Models
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      {/* <FormattedMessage id="Network" defaultMessage="Network" /> */}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {/* <FormattedMessage
                      id="Legal Notices"
                      defaultMessage="Legal Notices"
                    /> */}
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      {/* <FormattedMessage
                      id="Laws of Kosova"
                      defaultMessage="Laws of Kosova"
                    /> */}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {/* <FormattedMessage
                      id="Insights"
                      defaultMessage="Insights"
                    /> */}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {/* Podcast */}
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item  item-mob">
                <a className="nav-link" href="/news">
                  {/* <FormattedMessage id="Careers" defaultMessage="Careers" /> */}
                  Blog
                </a>
              </li>

              <button className="btn mobileBtn">
                {/* <FormattedMessage id="Contact Us" defaultMessage="Contact Us" />{" "} */}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
