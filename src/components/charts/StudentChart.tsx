const data = [
  {
    name: "Total",
    count: 448,
    fill: "white",
  },
  {
    name: "Girls",
    count: 294,
    fill: "#12b76a",
  },
  {
    name: "Boys",
    count: 154,
    fill: "#465fff",
  },
];

import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const StudentChart = () => {
  return (
    <div className="bg-white p-4 w-full h-full rounded-xl shadow border border-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Siswa</h1>
        <i className="ri-more-2-fill text-lg cursor-pointer"></i>
      </div>

      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <i className="ri-team-fill text-gray-400 text-5xl lg:text-2xl xl:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
      </div>

      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-brand-500"></div>
          <h1 className="font-bold">154</h1>
          <h1 className="text-xs text-gray-500">Laki-laki (43%)</h1>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-success-500"></div>
          <h1 className="font-bold">294</h1>
          <h1 className="text-xs text-gray-500">Perempuan (57%)</h1>
        </div>
      </div>
    </div>
  );
};

export default StudentChart;
