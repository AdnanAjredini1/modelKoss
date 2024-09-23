import img1 from "./our-models-assetss/288190451_1185784573.webp";
import img2 from "./our-models-assetss/293121212_5628539120.webp";
import img3 from "./our-models-assetss/e48e856941ea0a8dab7c.webp";
import img4 from "./our-models-assetss/179440596_2855049541.webp";
import img5 from "./our-models-assetss/293598986_5198162803.webp";
import img6 from "./our-models-assetss/289233292_5524579564.webp";
import img7 from "./our-models-assetss/293687991_7628627414.webp";
import img8 from "./our-models-assetss/293692919_1629552362.webp";
import img9 from "./our-models-assetss/294023847_5407378610.webp";
import img10 from "./our-models-assetss/293166254_3814594707.webp";
import img11 from "./our-models-assetss/294230900_1039102653.webp";
import NotImg from "./NotImg";

const ourModelsData = [
  {
    label: "Any",
    content: [
      { img: img1, type: "img", name: "Anda Lleshi" },
      { img: img2, type: "img", name: "Driada Lakna" },
      { img: img3, type: "img", name: "Klea Gashi" },
      { img: img4, type: "img", name: "Arta Kalludra" },
      { img: img8, type: "img", name: "Klesta Trifoni" },
      { img: img5, type: "img", name: "Anila Xhaferi" },
      { img: img7, type: "img", name: "Drenusha Qaza" },
      { img: img6, type: "img", name: "Albina Myrtezaj" },
      { img: img11, type: "img", name: "Melinda Ademi" },
      { img: img9, type: "img", name: "Iliada Sadriu" },
      { img: img10, type: "img", name: "Blerta Salihu" },
      {
        type: "component",
        component: (
          <NotImg
            wrapperClass="wrapperClass"
            titleClass="titleClass"
            descriptionClass="descriptionClass"
            iconClass="iconClass"
          />
        ),
        class:"onHoverdisplayNone"
      },
    ],
  },
  {
    label: "Kids",
    content: "This is the content for Tab 2",
  },
  {
    label: "Female",
    content: "This is the content for Tab 3",
  },
  {
    label: "Male",
    content: "This is the content for Tab 4",
  },
  {
    label: "Mature",
    content: "This is the content for Tab 5",
  },
];

export default ourModelsData;
