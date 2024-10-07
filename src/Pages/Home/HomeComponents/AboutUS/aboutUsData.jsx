import img1 from "./about-us-assets/287564863_5342234951.webp"
import img2 from "./about-us-assets/287500926_4208762930.webp"
import { FormattedMessage } from "react-intl";


const aboutUsData = [
    [
      {
        img: img1,
        name: "Dea Gashi",
        descriptions: [<FormattedMessage id="Model" defaultMessage="Model" key={1}/>,<FormattedMessage id="Photography" defaultMessage="Photography" key={2}/> , "Artist"],
        date: "19 may 2024",
        class:"img1"
      },
      {
        img: img2,
        name: "BLERTA BERISHA",
        descriptions: [<FormattedMessage id="Model" defaultMessage="Model" key={1}/>,<FormattedMessage id="Photography" defaultMessage="Photography" key={2}/> , "Artist"],
       
        date: "19 may 2022",
        class:"img2"
      },
    ]
];

export default aboutUsData;