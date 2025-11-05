import Heading from "@/components/reused/text/Heading";
import { FilterBar, Pagination, TransactionList } from "@/components/dashboard/transactions";

const Page = () => {
  return (
    <div className="col-start-2 col-end-12">
      <div>
        <Heading headingType="primary">Transactions</Heading>
      </div>

      <div className="mt-8 bg-white rounded-xl py-6 px-5 dropdown-shadow-2">
        {/* Filters, Search & Sort */}
        <FilterBar />

        {/* Transaction List/Table */}
        <TransactionList />

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default Page;
