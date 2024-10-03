import fb from "./our-models-assetss/facebook(2).svg";
import insta from "./our-models-assetss/instagram(3).svg";
import twt from "./our-models-assetss/twitter(3).svg";
import tTok from "./our-models-assetss/tiktok(1).svg";
import { FormattedMessage } from "react-intl";
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
        <p className={description}>
          <FormattedMessage
            id="Height"
            defaultMessage="Height {size}"
            values={{ size: `5'10"` }}
          />
        </p>
        <p className={description}>
          <FormattedMessage
            id="Bust"
            defaultMessage="Bust {size}"
            values={{ size: `34" A` }}
          />
        </p>
        <p className={description}>
          <FormattedMessage
            id="Waist"
            defaultMessage="Waist {size}"
            values={{ size: `24"` }}
          />
        </p>
        <p className={description}>
          <FormattedMessage
            id="Hips"
            defaultMessage="Hips {size}"
            values={{ size: `34"` }}
          />
        </p>
        <p className={description}>
          <FormattedMessage
            id="Dress"
            defaultMessage="Dress {size}"
            values={{ size: `2 US` }}
          />
        </p>
        <p className={description}>
          <FormattedMessage
            id="Shoe"
            defaultMessage="Shoe {size}"
            values={{ size: `8 US` }}
          />
        </p>
        <p className={description}>
          <FormattedMessage
            id="Hair Dark Blonde"
            defaultMessage="Hair Dark Blonde"
          />
        </p>
        <p className={description}>
        <FormattedMessage
            id="Eyes Brown"
            defaultMessage="Eyes Brown"
          /></p>
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
