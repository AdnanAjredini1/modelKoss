import icon from "./our-models-assetss/Group 8.svg"

function NotImg({ wrapperClass, titleClass, descriptionClass, iconClass }) {
  return (
    <div className={wrapperClass}>
      <p className={titleClass}>Want to be here?</p>
      <p className={descriptionClass}>
        ModelKos is seeking for new talent, so join the largest modeling agency
        in Kosovo and show off your skills. Be a model!
      </p>
      <img className={iconClass} src={icon} />
    </div>
  );
}

export default NotImg;
