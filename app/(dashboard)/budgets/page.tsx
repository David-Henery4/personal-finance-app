import Heading from "@/components/reused/text/Heading";
import { OpenModal } from "@/components/reused/btns";
import { DonutPieChart, ChartSummaryList } from "@/components/reused/chart";
import { SpendingSummary, BudgetsList } from "@/components/dashboard/budgets";

const Page = () => {
  return (
    <div className="col-start-2 col-end-12">

      <div className="w-full flex justify-between items-center">
        
        <Heading headingType="primary">Budgets</Heading>
        <OpenModal>+Add New Budget</OpenModal>
        
      </div>

      <div className="mt-8 flex flex-col justify-center items-center gap-6">
        
        {/* Spending Summary */}
        <SpendingSummary />
        
        {/* Budgets List */}
        <BudgetsList />
        
      </div>

    </div>
  );
};

export default Page;
