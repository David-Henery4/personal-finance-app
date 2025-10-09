import ParaText from "@/components/reused/text/ParaText";
import { JSX } from "react";
import TransactionItemTypes from "@/types/TransactionItemTypes";

interface TransactionItemProps extends TransactionItemTypes {
  isTransactionPage?: Boolean;
}



const TransactionListItem = ({
  id,
  counterparty,
  type,
  amount,
  date,
  category,
  isTransactionPage,
}: TransactionItemProps) => {
  /**
   * Formats and returns a styled ParaText component representing a transaction amount,
   * based on whether the transaction is an "income" or "expense".
   *
   * - For "income", the amount is prefixed with "+" and styled in green.
   * - For "expense", the amount is prefixed with "-" and styled in black.
   * - For any other type, returns a red "Invalid Transaction" message.
   */
  const handleIncomeExpenseFormat = (
    type: string,
    amount: number
  ): JSX.Element => {
    if (type === "income") {
      return (
        <ParaText bold="Y" size="sm" className="text-green">
          {`+£${amount.toFixed(2)}`}
        </ParaText>
      );
    }
    if (type === "expense") {
      return (
        <ParaText bold="Y" size="sm" className="text-black">
          {`-£${amount.toFixed(2)}`}
        </ParaText>
      );
    } else {
      return (
        <ParaText bold="Y" size="sm" className="text-red">
          Invalid Transaction
        </ParaText>
      );
    }
  };

  const formatDate = (date: string) => {
    const formatOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const currentDate = new Date(date);
    return currentDate.toLocaleDateString("en-GB", formatOptions);
  };

  return (
    <div
      key={id}
      className="flex justify-between items-center py-5 border-b border-b-grey-100 first:pt-0 last:pb-0 last:border-b-0"
    >
      <div className="flex-1 flex justify-start items-center gap-4">
        <div className="h-8 w-8 grid place-items-center rounded-full bg-purple-500">
          <p className="capitalize font-bold text-xs">
            {counterparty.slice(0, 1)}
          </p>
        </div>

        <div>
          <ParaText size="sm" bold="Y" className="text-grey-900">
            {counterparty}
          </ParaText>
          {isTransactionPage && (
            <ParaText bold="N" size="xs" className="mt-2 text-grey-500">
              {category}
            </ParaText>
          )}
        </div>
      </div>

      <div className="text-right">
        {handleIncomeExpenseFormat(type, amount)}

        <ParaText bold="N" size="xs" className="mt-2 text-grey-500">
          {formatDate(date)}
        </ParaText>
      </div>
    </div>
  );
};

export default TransactionListItem;
