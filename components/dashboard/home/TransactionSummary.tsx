import ParaText from "@/components/reused/text/ParaText";
import { JSX } from "react";
import { HomeCardHeader } from "@/components/reused/cards";
import TransactionListItem from "../transactions/list/TransactionListItem";
import transactionsDummyData from "@/local-data/placeholder-data/transactions";


// Could set the default image/icon/initial/colour etc based on the category of the transaction
// EG - if no image available/uploaded, then use a default option.
//
// -->  <p className="capitalize font-bold text-xs">
// -->   {transaction.counterparty.slice(0, 1)}
// -->  </p>

const TransactionSummary = () => {
  

  return (
    <div className="rounded-xl px-5 py-6 bg-white dropdown-shadow-2 sm-tablet:p-8 laptop:col-start-1 laptop:col-end-7 laptop:row-start-3 laptop:row-end-13">
      <HomeCardHeader
        title="transactions"
        href="/transactions"
        linkText="view all"
      />

      <div className="mt-8 grid grid-cols-1">
        {transactionsDummyData
          .map((transaction) => {
            return (
              <TransactionListItem key={transaction.id} {...transaction} />
            );
          })
          .slice(0, 5)}
      </div>
    </div>
  );
};

export default TransactionSummary;
