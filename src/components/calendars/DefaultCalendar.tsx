import moment from "moment";
import {
  Calendar as BigCalendar,
  type CalendarProps,
  momentLocalizer,
} from "react-big-calendar";

const localizer = momentLocalizer(moment);

const DefaultCalendar = (props: Omit<CalendarProps, "localizer">) => {
  return (
    <BigCalendar {...props} localizer={localizer} style={{ height: "97%" }} />
  );
};

export default DefaultCalendar;
