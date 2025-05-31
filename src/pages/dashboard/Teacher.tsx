import { Announcement } from "../../components";

const TeacherPage = () => {
  return (
    <div className="flex-1 flex gap-4 p-4 flex-col lg:flex-row">
      <div className="w-full xl:w-2/3 flex-col flex">
        <div className="bg-white p-4 w-full h-full rounded-xl shadow border border-gray-200">
          <h1 className="text-xl font-semibold">Jadwal</h1>
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
  );
};

export default TeacherPage;
