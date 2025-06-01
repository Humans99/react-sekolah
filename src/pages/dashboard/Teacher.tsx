import { Announcement, BigCalendar } from "../../components";

const TeacherPage = () => {
  return (
    <div className="flex-1 flex gap-4 p-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3 flex-col flex min-h-[400px]">
        {/* <div className="flex flex-col flex-1 min-h-[400px]:"> */}
        <div className="bg-white p-4 w-full h-[90vh] rounded-xl shadow border border-gray-200 overflow-hidden">
          <h1 className="text-xl font-semibold">Jadwal</h1>
          <div className="h-full w-full">
            <BigCalendar />
          </div>
          {/* <DefaultCalendar /> */}
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8 h-[90vh]">
        <Announcement />
      </div>
    </div>
  );
};

export default TeacherPage;
