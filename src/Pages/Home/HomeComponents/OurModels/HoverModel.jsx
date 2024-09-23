import fb from "./our-models-assetss/facebook(2).svg";
import insta from "./our-models-assetss/instagram(3).svg";
import twt from "./our-models-assetss/twitter(3).svg";
import tTok from "./our-models-assetss/tiktok(1).svg";
function HoverModel({
  hoverWrapperClass,
  name,
  nameClass,
  descriptionsWrapperClass,
  description,
}) {
  return (
    <div className={hoverWrapperClass}>
      <p className={nameClass}>{name}</p>
      <div className={descriptionsWrapperClass}>
        <p className={description}>Height 5'10" </p>
        <p className={description}>Bust 34" A </p>
        <p className={description}>Waist 24" </p>
        <p className={description}>Hips 34" </p>
        <p className={description}>Dress 2 US</p>
        <p className={description}>Shoe 8 US</p>
        <p className={description}>Hair Dark Blonde</p>
        <p className={description}>Eyes Brown</p>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "31px",
          display: "flex",
          justifyContent: "center",
          gap: "27px",
          width: "100%",
        }}
      >
        <img src={fb} width={"8px"} height={"18px"} />
        <img src={insta} width={"19px"} height={"19px"} />
        <img src={tTok} width={"16px"} height={"19px"} />
        <img src={twt} width={"22px"} height={"19px"} />
      </div>
    </div>
  );
}

export default HoverModel;
