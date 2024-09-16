import { FormattedMessage } from "react-intl";

const footerData = [
    {
      category: "MODELS",
      links: [
        { link: "Book Model ", to: "/" },
        { link: "Man Models ", to: "/" },
        { link: "Woman Models", to: "/" },
        { link: "Kid Models ", to: "/" },
        { link: "Membership", to: "/" },
        
      ],
    },
    {
      category: <FormattedMessage id="ABOUT" defaultMessage="ABOUT" />,
      links: [
        { link: "Company", to: "/" },
        { link: "Our Team", to: "/" },
        { link: "Partners", to: "/" },
        { link: "Career ", to: "/" },

      ],
    },
    {
      category: "Work",
      links: [
        { link: "Photography ", to: "/" },
        { link: "Design", to: "/" },
        { link: "Makeup artist", to: "/" },
        { link: "Fashion show ", to: "/" },
        { link: "Advertising", to: "/" },
      ],
    },
    {
      category: "SUPPORT",
      links: [
        { link: "Privacy Statement", to: "/" },
        { link: "Terms of Service", to: "/" },
        { link: "Help", to: "/" },
        { link: "FAQ", to: "/" },
        { link: "Support", to: "/" },
       
      ],
    },
   
  ];
  
  export default footerData;
  