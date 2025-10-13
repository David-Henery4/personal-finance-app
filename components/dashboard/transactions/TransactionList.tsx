import transactionsDummyData from "@/local-data/placeholder-data/transactions";
import TransactionListItem from "./list/TransactionListItem";
import ParaText from "@/components/reused/text/ParaText";
import Heading from "@/components/reused/text/Heading";

const TransactionList = () => {
  return (
    <div className="medium-tablet:mt-6">
      {/* List container labels */}
      <div className="hidden py-3 grid-cols-transaction-labels-tablet gap-x-8 items-center medium-tablet:grid laptop:grid-cols-transaction-item-desktop">
        <Heading headingType="five" className="text-grey-500 font-normal">
          Recipient / Sender
        </Heading>
        <Heading headingType="five" className="text-grey-500 font-normal">
          Category
        </Heading>
        <Heading headingType="five" className="text-grey-500 font-normal">
          Transaction Date
        </Heading>
        <Heading headingType="five" className="text-grey-500 font-normal text-right">
          Amount
        </Heading>
      </div>

      {/* List item Container */}
      <div className="py-6 medium-tablet:border-t medium-tablet:border-t-grey-100">
        {transactionsDummyData.map((transaction) => {
          return (
            <TransactionListItem
              key={transaction.id}
              {...transaction}
              isTransactionPage={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;
