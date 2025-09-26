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
  return (
    <div className="rounded-xl px-5 py-6 bg-white">
      <HomeCardHeader href="/budgets" title="budgets" linkText="see details" />

      {/* Pie/Donut Chart Container */}
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60} // This creates the donut hole
              outerRadius={120} // This controls the thickness of the donut
              paddingAngle={0} // This removes gaps between sections
              dataKey="value"
              stroke="none" // Removes stroke lines between sections
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BudgetsChartSummaryContainer;
