import { HomeCardHeader } from "@/components/reused/cards";
import { DonutPieChart, ChartSummaryList } from "@/components/reused/chart";

const BudgetsChartSummaryContainer = () => {

  const handleShowBudgetsOverallSummary = () => {

  }

  return (
    <div className="rounded-xl px-5 py-6 bg-white sm-tablet:p-8">
      <HomeCardHeader href="/budgets" title="budgets" linkText="see details" />

      {/* Pie/Donut Chart Container */}

      <div className="mt-7 grid gap-4 lg-mobile:grid-cols-budgets-summary-tablet">
        <DonutPieChart />
        <ChartSummaryList />
      </div>
    </div>
  );
};

export default BudgetsChartSummaryContainer;
