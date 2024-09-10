import "./nav.scss";
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
        <p className="navBrandTitle">MODELKOS</p>
      </div>
    </nav>
  );
}

export default Nav;
