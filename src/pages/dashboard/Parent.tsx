import { Announcement, BigCalendar } from "../../components";

const ParentPage = () => {
  return (
    <div className="flex p-4 gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3 flex-col flex">
        <div className="bg-white p-4 w-full h-screen rounded-xl shadow border border-gray-200 overflow-hidden">
          <h1 className="text-xl font-semibold">Jadwal (John Doe)</h1>
          <div className="h-full w-full">
            <BigCalendar />
          </div>
        </div>
      </div>

      <div className="w-full xl:w-1/3 flex flex-col gap-8 h-screen">
        <Announcement />
      </div>
    </div>
  );
};

export default ParentPage;
