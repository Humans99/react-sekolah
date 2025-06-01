import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "../../lib/data";
import DefaultCalendar from "./DefaultCalendar";
import "./index.css";
import { useState } from "react";
const parsedEvent = calendarEvents.map((event) => ({
  ...event,
  start: moment(event.start).toDate(),
  end: moment(event.end).toDate(),
}));

const BigCalendar = () => {
  const [view, setView] = useState<
    "month" | "week" | "day" | "agenda" | "work_week"
  >("month");
  return (
    <DefaultCalendar
      events={parsedEvent}
      formats={{ dayHeaderFormat: (date) => moment(date).format("dddd @ DD") }}
      min={moment("2025-05-21T06:30:00").toDate()}
      max={moment("2025-05-21T19:30:00").toDate()}
      views={["month", "week", "day"]}
      view={view}
      onView={(newView) => setView(newView)}
    />
  );
};

export default BigCalendar;
