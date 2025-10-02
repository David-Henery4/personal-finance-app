import Heading from "../reused/text/Heading";
import { PotsSummaryContainer, TransactionSummary, BudgetsChartSummaryContainer, BillsSummaryContainer } from "./home";

const PagesCardsContainer = () => {
  return (
    <div className="col-start-2 col-end-12 mt-8 grid gap-4 laptop:grid-cols-12">

      <PotsSummaryContainer/>

      <TransactionSummary/>
      
      <BudgetsChartSummaryContainer/>
      
      <BillsSummaryContainer/>
      
    </div>
  );
};

export default PagesCardsContainer;
