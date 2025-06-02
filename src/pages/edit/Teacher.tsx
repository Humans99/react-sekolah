import { blood, date, mail, phone } from "../../assets/icons";
import {
  Announcement,
  BigCalendar,
  FormModal,
  PerformanceChart,
  Shortcut,
  SmallCard,
} from "../../components";

const data = {
  id: 1,
  username: "johndoe",
  email: "johndoe@example.com",
  password: "password",
  firstName: "John",
  lastName: "Doe",
  phone: "(+62) 82130706225",
  address: "123 Main St, Anytown USA",
  bloodType: "A",
  birthDay: "2001-11-23",
  gender: "Pria",
  img: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const EditTeacher = () => {
  return (
    <div className="flex flex-1 flex-col p-4 xl:flex-row gap-4">
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User Card */}
          <div className="py-6 px-4 rounded-md bg-white shadow border border-gray-200 flex-1 flex gap-4">
            <div className="w-1/3">
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200"
                width={144}
                height={144}
                className="w-36 h-36 object-cover rounded-full"
              />
            </div>
            <div className="w-2/3 flex-col flex justify-between gap-4">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">John Doe</h1>
                <FormModal table="teacher" type="update" data={data} />
              </div>
              <p className="text-xs text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                at?
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <img src={blood} alt="" width={14} height={14} />
                  <span>B</span>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <img src={date} alt="" width={14} height={14} />
                  <span>Nov, 2001</span>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <img src={mail} alt="" width={14} height={14} />
                  <span>johndoe@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <img src={phone} alt="" width={14} height={14} />
                  <span>082130706225</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small Card */}
          <div className="flex flex-1 gap-4 justify-between flex-wrap">
            <SmallCard type="attendance" desc="Kehadiran" title="90%" />
            <SmallCard type="branch" desc="Cabang" title="2" />
            <SmallCard type="lesson" desc="Pelajaran" title="6" />
            <SmallCard type="class" desc="Kelas" title="10" />
          </div>
        </div>
        <div className="mt-4 bg-white rounded-md p-4 border border-gray-200 shadow h-[720px]">
          <h1 className="text-xl font-semibold">Jadwal Guru</h1>
          <BigCalendar />
        </div>
      </div>
      {/* -------------- */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white border border-gray-200 p-4 rounded-md shadow-sm">
          <h1 className="text-xl font-semibold">Akses Cepat</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Shortcut type="class" />
            <Shortcut type="student" />
            <Shortcut type="lesson" />
            <Shortcut type="exam" />
          </div>
        </div>
        <PerformanceChart />
        <Announcement />
      </div>
    </div>
  );
};

export default EditTeacher;
