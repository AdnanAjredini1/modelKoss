import img1 from './models-assets/james-feaver-KMNEkM-.webp'
import img2 from './models-assets/ahmad-ebadi-ot28ybNQ.webp'
import img3 from './models-assets/malik-skydsgaard-d_Y.webp'
import img4 from './models-assets/daniil-onischenko-GH.webp'
import { FormattedMessage } from 'react-intl';



export const modelsData = [
    {
        label: <FormattedMessage id='Any' defaultMessage="Any"/>,
        content: "This is the content for Tab 1",
      },
  {
    label: "Prishtina",
    content: [
      { img: img1, name: "Anila canolli" },
      { img: img2, name: "KLEA GASHI" },
      { img: img3, name: "ari berisha" },
      { img: img4, name: "jon klaiqi" },
      { img: img1, name: "Anila canolli" },
      { img: img2, name: "Klea gashi" },
     
     
    ],
  },
  {
    label: "Peja",
    content: "This is the content for Tab 3",
  },
  {
    label: "Ferizaji",
    content: "This is the content for Tab 4",
  },
  {
    label: "Mitrovica",
    content: "This is the content for Tab 5",
  },
  {
    label: "Gjakova",
    content: "This is the content for Tab 6",
  },
  {
    label: "Gjilani",
    content: "This is the content for Tab 7",
  },
  {
    label: "Prizreni",
    content: "This is the content for Tab 8",
  },
];
