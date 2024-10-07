import img1 from "/src/Components/Navabar/OurWorkMEGAMENU/ourWork-assets/imgCarousel1.png";
import img2 from "/src/Components/Navabar/OurWorkMEGAMENU/ourWork-assets/ImgCarousel2.png";
import img3 from "/src/Components/Navabar/OurWorkMEGAMENU/ourWork-assets/ImageCarousel3.png";
import img4 from "/src/Components/Navabar/OurWorkMEGAMENU/ourWork-assets/ImageCarousel4.png";
import img5 from "/src/Components/Navabar/OurWorkMEGAMENU/ourWork-assets/ImageCarousel5.png";
import img6 from "/src/Components/Navabar/OurWorkMEGAMENU/ourWork-assets/ImageCarousel6.png";
import img7 from "/src/Components/Navabar/OurWorkMEGAMENU/ourWork-assets/ImageCarousel7.png";
import img8 from "/src/Components/Navabar/OurWorkMEGAMENU/ourWork-assets/ImageCarousel8.png";
import { FormattedMessage } from "react-intl";

const cardData = [
  [
    {
      img: img1,
      name: "Bline Beka",
      descriptions: [
        <FormattedMessage id="Model" defaultMessage="Model" key={1} />,
        <FormattedMessage
          id="Photography"
          defaultMessage="Photography"
          key={2}
        />,
        "Artist",
      ],

      date: "2024-09-12",
      class: "",
      to: "/",
    },
    {
      img: img2,
      name: "Alora Gojani",
      descriptions: [
        <FormattedMessage id="Model" defaultMessage="Model" key={1} />,
        <FormattedMessage
          id="Photography"
          defaultMessage="Photography"
          key={2}
        />,
        "Artist",
      ],

      date: "2024-08-25",
      class: "blackCard",
      to: "/",
    },
  ],
  [
    {
      img: img3,
      name: "Anda Lleshi",
      descriptions: [
        <FormattedMessage id="Model" defaultMessage="Model" key={1} />,
        <FormattedMessage
          id="Photography"
          defaultMessage="Photography"
          key={2}
        />,
        "Artist",
      ],

      date: "2024-07-30",
      class: "",
      to: "/models/andalleshi",
    },
    {
      img: img4,
      name: "Driada Lakna",
      descriptions: [
        <FormattedMessage id="Model" defaultMessage="Model" key={1} />,
        <FormattedMessage
          id="Photography"
          defaultMessage="Photography"
          key={2}
        />,
        "Artist",
      ],

      date: "2024-06-15",
      class: "blackCard",
      to: "/",
    },
  ],
  [
    {
      img: img5,
      name: "Klea Gashi",
      descriptions: [
        <FormattedMessage id="Model" defaultMessage="Model" key={1} />,
        <FormattedMessage
          id="Photography"
          defaultMessage="Photography"
          key={2}
        />,
        "Artist",
      ],

      date: "2024-05-22",
      class: "",
      to: "/",
    },
    {
      img: img6,
      name: "Arta Kalludra",
      descriptions: [
        <FormattedMessage id="Model" defaultMessage="Model" key={1} />,
        <FormattedMessage
          id="Photography"
          defaultMessage="Photography"
          key={2}
        />,
        "Artist",
      ],

      date: "2024-04-10",
      class: "blackCard",
      to: "/",
    },
  ],
  [
    {
      img: img7,
      name: "Anila Xhaferi",
      descriptions: [
        <FormattedMessage id="Model" defaultMessage="Model" key={1} />,
        <FormattedMessage
          id="Photography"
          defaultMessage="Photography"
          key={2}
        />,
        "Artist",
      ],

      date: "2024-03-08",
      class: "",
      to: "/",
    },
    {
      img: img8,
      name: "Albina Myrtezaj",
      descriptions: [
        <FormattedMessage id="Model" defaultMessage="Model" key={1} />,
        <FormattedMessage
          id="Photography"
          defaultMessage="Photography"
          key={2}
        />,
        "Artist",
      ],

      date: "2024-02-14",
      class: "blackCard",
      to: "/",
    },
  ],
];

export default cardData;
