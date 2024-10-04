import { FormattedMessage } from "react-intl";

const aboutMData = [
  {
    category: <FormattedMessage id="Agency" defaultMessage="Agency" />,
    links: [
      {
        link: <FormattedMessage id="about us" defaultMessage="about us" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="our models" defaultMessage="our models" />,
        to: "/",
      },
      {
        link: (
          <FormattedMessage id="our partners" defaultMessage="our partners" />
        ),
        to: "/",
      },
      {
        link: <FormattedMessage id="our team" defaultMessage="our team" />,
        to: "/",
      },
      { link: <FormattedMessage id="our partners" defaultMessage="our partnerss" /> , to: "/" },
      { link: <FormattedMessage id="clients" defaultMessage="clients" />, to: "/" },
    ],
  },
  {
    category:  <FormattedMessage id="Models" defaultMessage="Models" />,
    links: [
      { link:  <FormattedMessage id="be a model" defaultMessage="be a model" />, to: "/" },
      { link: <FormattedMessage id="careers" defaultMessage="careers" />, to: "/" },
      { link:  <FormattedMessage id="magazine" defaultMessage="magazine" />, to: "/" },
      { link:  <FormattedMessage id="Lists" defaultMessage="Lists" /> , to: "/" },
      { link: <FormattedMessage id="new faces" defaultMessage="new faces" />, to: "/" },
      { link: <FormattedMessage id="rankings" defaultMessage="rankings" />, to: "/" },
    ],
  },
];

export default aboutMData;
