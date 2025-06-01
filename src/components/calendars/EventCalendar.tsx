import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { events } from "../../lib/data";
import "./index.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 pb-5 w-full h-full rounded-xl shadow border border-gray-200">
      <Calendar onChange={onChange} value={value} />
      <div className="flex my-4 justify-between items-center">
        <h1 className="text-lg font-semibold">Events</h1>
        <i className="ri-more-2-fill text-xl cursor-pointer"></i>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-t-4 odd:border-brand-300 even:border-success-300"
            key={event.id}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-gray-600 font-semibold">{event.title}</h1>
              <span className="font-medium text-xs text-gray-400">
                {event.time}
              </span>
            </div>
            <p className="text-gray-400 text-xs font-medium mt-2">
              {event.desriction}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
