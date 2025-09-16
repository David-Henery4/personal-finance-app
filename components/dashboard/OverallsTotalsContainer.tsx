import Heading from "@/components/reused/text/Heading";
import { TotalsDisplayCard } from "@/components/reused/cards";

const OverallsTotalsContainer = () => {
  return (
    <div className="col-start-2 col-end-12">
      <Heading headingType="primary">Overview</Heading>
      <div className="mt-8 grid gap-3">
        <TotalsDisplayCard isPrimary={true} title="Current Balance" value="$4,836.00" />
        <TotalsDisplayCard title="Income" value="$3,814.25" />
        <TotalsDisplayCard title="Expenses" value="$1,700.50" />
      </div>
    </div>
  );
};

export default OverallsTotalsContainer;
