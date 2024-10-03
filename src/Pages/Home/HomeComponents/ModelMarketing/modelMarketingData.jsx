import searchIcon from "./model-marketing-assets/XMLID_223_.svg";
import clockIcon from "./model-marketing-assets/1814097_clock_schedule_time_icon.svg";
import scheduleIcon from "./model-marketing-assets/510869_calendar_date_event_schedule_icon.svg";
import workIcon from "./model-marketing-assets/Path 355.svg";
import { FormattedMessage } from "react-intl";

export const items = [
  {
    number: "500,000+",
    name: (
      <FormattedMessage
        id="Portfolio Images"
        defaultMessage="Portfolio Images"
      />
    ),
  },
  {
    number: "20,000+",
    name: (
      <FormattedMessage
        id="Featured Talents"
        defaultMessage="Featured Talents"
      />
    ),
  },
  {
    number: "100M",
    name: <FormattedMessage id="Visits" defaultMessage="Visits" />,
  },
];

export const iconsData = [
  {
    icon: searchIcon,
    text: <FormattedMessage id="Search" defaultMessage="Search" />,
    width: "20",
    height: "20",
  },
  {
    icon: clockIcon,
    text: <FormattedMessage id="Book" defaultMessage="Book" />,
    width: "22",
    height: "22",
  },
  {
    icon: scheduleIcon,
    text: <FormattedMessage id="Schedule" defaultMessage="Schedule" />,
    width: "22",
    height: "22",
  },
  {
    icon: workIcon,
    text: <FormattedMessage id="Work with us" defaultMessage="Work with us" />,
    width: "24",
    height: "23",
  },
];
