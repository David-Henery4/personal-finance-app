import transactionsDummyData from "@/local-data/placeholder-data/transactions";
import TransactionListItem from "./list/TransactionListItem";

const TransactionList = () => {
  return <div className="my-6">
    {transactionsDummyData.map((transaction) => {
      return (
        <TransactionListItem key={transaction.id} {...transaction} isTransactionPage={true}/>
      )
    })}
  </div>;
};

export default TransactionList;
