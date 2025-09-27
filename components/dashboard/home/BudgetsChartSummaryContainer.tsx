"use client";
import { HomeCardHeader } from "@/components/reused/cards";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Food & Dining", value: 400, color: "#8884d8" },
  { name: "Transportation", value: 300, color: "#82ca9d" },
  { name: "Entertainment", value: 200, color: "#ffc658" },
  { name: "Shopping", value: 150, color: "#ff7c7c" },
  { name: "Utilities", value: 100, color: "#8dd1e1" },
];

const BudgetsChartSummaryContainer = () => {

  const handleShowBudgetsOverallSummary = () => {

  }

  return (
    <div className="rounded-xl px-5 py-6 bg-white">
      <HomeCardHeader href="/budgets" title="budgets" linkText="see details" />

      {/* Pie/Donut Chart Container */}
      <div className="w-full h-60 mt-7">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={75} // This creates the donut hole
              outerRadius={117} // This controls the thickness of the donut
              paddingAngle={0} // This removes gaps between sections
              dataKey="value"
              stroke="none" // Removes stroke lines between sections
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <g>
              <text
                x={"50%"}
                y={"50%"}
                dy={8}
                textAnchor="middle"
                fill={"#000000"}
                className="text-[32px] font-bold"
              >
                $338
              </text>
              <text
                x={"50%"}
                y={"59%"}
                dy={8}
                textAnchor="middle"
                fill={"#696868"}
                className="text-xs text-grey-500"
              >
                of $975 limit
              </text>
            </g>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={0}
              stroke="none"
            >
              {" "}
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} className="fill-white/25" />
              ))}{" "}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BudgetsChartSummaryContainer;
