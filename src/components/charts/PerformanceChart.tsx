import { Pie, PieChart, ResponsiveContainer } from "recharts";
const data = [
  { name: "Group A", value: 92, fill: "#6ce9a6" },
  { name: "Group B", value: 8, fill: "#fee685" },
];

const PerformanceChart = () => {
  return (
    <div className="bg-white p-4 rounded-md border border-gray-200 shadow h-80 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Kinerja Guru</h1>
        <i className="ri-more-2-fill text-2xl cursor-pointer"></i>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl font-bold">9.2</h1>
        <span className="text-xs from-gray-500">dari 10</span>
      </div>
      <div className="absolute font-medium bottom-16 left-0 right-0 m-auto text-center">
        Semester 1 <span className="text-sm text-gray-400">s/d</span> Semester 2
      </div>
    </div>
  );
};

export default PerformanceChart;
