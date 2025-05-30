import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Income: 4000,
    Expense: 2400,
  },
  {
    name: "Feb",
    Income: 3000,
    Expense: 1398,
  },
  {
    name: "Mar",
    Income: 2000,
    Expense: 9800,
  },
  {
    name: "Apr",
    Income: 2780,
    Expense: 3908,
  },
  {
    name: "Mei",
    Income: 1890,
    Expense: 4800,
  },
  {
    name: "Jun",
    Income: 2390,
    Expense: 3800,
  },
  {
    name: "Jul",
    Income: 3490,
    Expense: 4300,
  },
  {
    name: "Agu",
    Income: 4000,
    Expense: 2400,
  },
  {
    name: "Sep",
    Income: 3490,
    Expense: 4300,
  },
  {
    name: "Okt",
    Income: 1890,
    Expense: 4800,
  },
  {
    name: "Nov",
    Income: 2000,
    Expense: 9800,
  },
  {
    name: "Des",
    Income: 3000,
    Expense: 1398,
  },
];

const CashFlowChart = () => {
  return (
    <div className="bg-white p-4 pb-10 w-full h-full rounded-xl shadow border border-gray-200">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Statistik Keuangan</h1>
        <i className="ri-more-2-fill text-lg cursor-pointer"></i>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            // tickMargin={10}
          />
          <YAxis axisLine={false} tickLine={false} tickMargin={10} />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              borderColor: "#465fff",
              fontStyle: "italic",
            }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="Income"
            stroke="#465fff"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="Expense"
            stroke="#12b76a"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CashFlowChart;
