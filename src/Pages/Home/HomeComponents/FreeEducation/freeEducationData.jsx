import img1 from "./free-education-assets/jernej-graj-IbrSR6gBaqI-unsplash_1_.webp";
import img2 from "./free-education-assets/oladimeji-odunsi-n5aE6hOY6do-unsplash.webp";
import img3 from "./free-education-assets/alif-ngoylung-jg-6ARMiaPM-unsplash.webp";
import img4 from "./free-education-assets/miguel-angel-hernandez-4Kmvlc1M9rU-unsplash.webp";
import { FormattedMessage } from "react-intl";

export const freeEducationData = [
  {
    name: <FormattedMessage id="Fashion" defaultMessage="Fashion" />,
    img: img1,
  },
  {
    name: <FormattedMessage id="hair styling" defaultMessage="hair styling" />,
    img: img2,
  },
  {
    name: <FormattedMessage id="photography" defaultMessage="photography" />,
    img: img3,
  },
  {
    name: <FormattedMessage id="acting" defaultMessage="acting" />,
    img: img4,
  },
];
