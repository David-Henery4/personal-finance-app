"use client";
import { HomeCardHeader } from "@/components/reused/cards";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";
import { DonutPieChart, ChartSummaryList } from "@/components/reused/chart";

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

      <div>
      
      <DonutPieChart/>
      <ChartSummaryList/>
      
      </div>
      

    </div>
  );
};

export default BudgetsChartSummaryContainer;
