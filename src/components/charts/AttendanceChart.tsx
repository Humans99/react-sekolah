import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Senin",
    Hadir: 40,
    Absen: 60,
  },
  {
    name: "Selasa",
    Hadir: 45,
    Absen: 55,
  },
  {
    name: "Rabu",
    Hadir: 62,
    Absen: 38,
  },
  {
    name: "Kamis",
    Hadir: 89,
    Absen: 11,
  },
  {
    name: "Jum'at",
    Hadir: 73,
    Absen: 27,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white p-4 w-full h-full rounded-xl shadow border border-gray-200">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">Presensi</h2>
        <i className="ri-more-2-fill text-lg cursor-pointer"></i>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              borderColor: "lightblue",
            }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar dataKey="Hadir" fill="#465fff" legendType="circle" />
          <Bar dataKey="Absen" fill="#12b76a" legendType="circle" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
