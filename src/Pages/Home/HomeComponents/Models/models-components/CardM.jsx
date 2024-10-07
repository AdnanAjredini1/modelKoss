import locationIcon from "../models-assets/2216335_location_map_map pin_marker_pin_icon(1).svg";
import viewsIcon from "../models-assets/2205194_eye_look_monitor_observe_vision_icon.svg";

function CardM({
  cardMWrapper,
  img,
  imgClass,
  modelText,
  name,
  nameClass,
  price,
  priceClass,
  place,
  placeClass,
  locationIconClass,
  viewsIconClass,
  views,
  viewsClass,
  viewDetailsClass,
}) {
  return (
    <div className={cardMWrapper}>
      <img src={img} className={imgClass} />
      <div className={viewDetailsClass}>
        <p>View details</p>
      </div>
      <p className={modelText}>Model</p>

      <p className={nameClass}>{name}</p>
      <p className={priceClass}>{price}</p>

      <img src={locationIcon} className={locationIconClass} />
      <p className={placeClass}>{place}</p>
      <img src={viewsIcon} className={viewsIconClass} />
      <p className={viewsClass}>{views}</p>
    </div>
  );
}

export default CardM;
