import { announcements } from "../lib/data";

const Announcement = () => {
  return (
    <div className="bg-white p-4 w-full h-full rounded-xl shadow border border-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Pengumuman</h1>
        <span className="text-xs text-gray-400 cursor-pointer hover:underline">
          View All
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {announcements.map((item) => (
          <div
            className="rounded-lg p-5 odd:bg-brand-500 even:bg-success-500 shadow-lg"
            key={item.id}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-white font-semibold">{item.title}</h1>
              <span className="font-light text-white text-xs">{item.time}</span>
            </div>
            <p className="text-white mt-2 text-xs">{item.desriction}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
