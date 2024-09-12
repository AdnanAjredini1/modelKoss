function Card({
  cardWrapperClass,
  img,
  imgClass,
  name,
  nameClass,
  descriptionWrapperClass,
  descriptionClass,
  descriptions,
  dateClass,
  date,
}) {
  return (
    <div className={cardWrapperClass}>
      <img src={img} className={imgClass} />
      <p className={nameClass}>{name}</p>
      <div className={descriptionWrapperClass}>
        {descriptions.map((desc, index) => (
          <p key={index} className={descriptionClass}>{desc}</p>
        ))}
      </div>
      <p className={dateClass}>{date}</p>
    </div>
  );
}

export default Card;
