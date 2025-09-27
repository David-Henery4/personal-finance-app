import { HomeCardHeader } from "@/components/reused/cards";
import { DonutPieChart, ChartSummaryList } from "@/components/reused/chart";

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
