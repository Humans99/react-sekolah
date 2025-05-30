import { StudentChart, UserCard } from "../../components";

const AdminPage = () => {
  return (
    <div className="flex p-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Guru" />
          <UserCard type="Siswa" />
          <UserCard type="Orang Tua" />
          <UserCard type="Staff" />
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <StudentChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
