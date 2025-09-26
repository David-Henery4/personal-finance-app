import Heading from "../reused/text/Heading";
import { PotsSummaryContainer, TransactionSummary, BudgetsChartSummaryContainer } from "./home";

const PagesCardsContainer = () => {
  return (
    <div className="col-start-2 col-end-12 mt-8 grid gap-4">

      <PotsSummaryContainer/>

      <TransactionSummary/>
      
      <BudgetsChartSummaryContainer/>
      
      <div className="rounded-xl px-5 py-6 bg-white">
        <Heading headingType="fourth">Bills</Heading>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi numquam
          natus voluptatem eligendi perferendis molestias, fugit accusamus
          molestiae at cum provident voluptatum! Quos quaerat eveniet nostrum
          corrupti, ipsum vero mollitia accusantium blanditiis nobis doloribus.
        </p>
      </div>
      
    </div>
  );
};

export default PagesCardsContainer;
