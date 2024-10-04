import { FormattedMessage } from "react-intl";

const ourWorkData = [
  {
    category: <FormattedMessage id="City" defaultMessage="City" />,
    links: [
      { link: "Prishtina", to: "/" },
      { link: "Peja", to: "/" },
      { link: "Prizren", to: "/" },
      { link: "Gjakove", to: "/" },
      { link: "Gjilan", to: "/" },
      { link: "Ferizaj", to: "/" },
      { link: "Mitrovice", to: "/" },
    ],
  },
  {
    category: <FormattedMessage id="Female" defaultMessage="Female" />,
    links: [
      { link: <FormattedMessage id="main" defaultMessage="main" />, to: "/" },
      {
        link: <FormattedMessage id="direct" defaultMessage="direct" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="b plus" defaultMessage="b plus" />,
        to: "/",
      },
    ],
  },
  {
    category: <FormattedMessage id="Male" defaultMessage="Male" />,
    links: [
      { link: <FormattedMessage id="main" defaultMessage="main" />, to: "/" },
      {
        link: <FormattedMessage id="direct" defaultMessage="direct" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="big & tall" defaultMessage="big & tall" />,
        to: "/",
      },
    ],
  },
  {
    category: <FormattedMessage id="Kids" defaultMessage="Kids" />,
    links: [
      {
        link: <FormattedMessage id="babies" defaultMessage="babies" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="todlers" defaultMessage="todlers" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="preschool" defaultMessage="preschool" />,
        to: "/",
      },
      {
        link: (
          <FormattedMessage id="gradeschooler" defaultMessage="gradeschooler" />
        ),
        to: "/",
      },
      { link: <FormattedMessage id="Teen" defaultMessage="Teen" />, to: "/" },
    ],
  },
  {
    category: <FormattedMessage id="Elderly" defaultMessage="Elderly" />,
    links: [
      {
        link: <FormattedMessage id="old female" defaultMessage="old female" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="old male" defaultMessage="old male" />,
        to: "/",
      },
    ],
  },
];

export default ourWorkData;
