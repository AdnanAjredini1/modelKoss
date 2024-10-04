import { FormattedMessage } from "react-intl";

const footerData = [
  {
    category: <FormattedMessage id="MODELS" defaultMessage="Models" />,
    links: [
      {
        link: <FormattedMessage id="Book Model" defaultMessage="Book Model" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="Man Models" defaultMessage="Man Models" />,
        to: "/",
      },
      {
        link: (
          <FormattedMessage id="Woman Models" defaultMessage="Woman Models" />
        ),
        to: "/",
      },
      {
        link: <FormattedMessage id="Kid Models" defaultMessage="Kid Models" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="Membership" defaultMessage="Membership" />,
        to: "/",
      },
    ],
  },
  {
    category: <FormattedMessage id="ABOUT" defaultMessage="ABOUT" />,
    links: [
      {
        link: <FormattedMessage id="Company" defaultMessage="Company" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="Our Team" defaultMessage="Our Team" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="Partner" defaultMessage="Partner" />,
        to: "/",
      },
      {
        link: <FormattedMessage id="Career" defaultMessage="Career" />,
        to: "/",
      },
    ],
  },
  {
    category: <FormattedMessage id="Work" defaultMessage="Work" />,
    links: [
      {
        link: (
          <FormattedMessage id="Photography" defaultMessage="Photography" />
        ),
        to: "/",
      },
      {
        link: <FormattedMessage id="Design" defaultMessage="Design" />,
        to: "/",
      },
      {
        link: (
          <FormattedMessage id="Makeup artist" defaultMessage="Makeup artist" />
        ),
        to: "/",
      },
      {
        link: (
          <FormattedMessage id="Fashion show" defaultMessage="Fashion show" />
        ),
        to: "/",
      },
      {
        link: (
          <FormattedMessage id="Advertising" defaultMessage="Advertising" />
        ),
        to: "/",
      },
    ],
  },
  {
    category: <FormattedMessage id="SUPPORT" defaultMessage="SUPPORT" />,
    links: [
      {
        link: (
          <FormattedMessage
            id="Privacy Statement"
            defaultMessage="Privacy Statement"
          />
        ),
        to: "/",
      },
      {
        link: (
          <FormattedMessage
            id="Terms of Service"
            defaultMessage="Terms of Service"
          />
        ),
        to: "/",
      },
      { link: <FormattedMessage id="Help" defaultMessage="Help" />, to: "/" },
      { link: <FormattedMessage id="FAQ" defaultMessage="FAQ" />, to: "/" },
      {
        link: <FormattedMessage id="Support" defaultMessage="Support" />,
        to: "/",
      },
    ],
  },
];

export default footerData;
