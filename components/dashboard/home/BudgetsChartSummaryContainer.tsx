import { HomeCardHeader } from "@/components/reused/cards";
import { DonutPieChart, ChartSummaryList } from "@/components/reused/chart";

const BudgetsChartSummaryContainer = () => {

  const handleShowBudgetsOverallSummary = () => {

  }

  return (
    <div className="rounded-xl px-5 py-6 bg-white dropdown-shadow-2 sm-tablet:p-8 laptop:col-start-7 laptop:col-end-13 laptop:row-start-1 laptop:row-end-11">
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
