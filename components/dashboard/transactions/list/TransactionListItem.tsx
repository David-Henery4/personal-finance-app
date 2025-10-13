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
        <ParaText bold="Y" size="sm" className={`text-green col-start-3 col-end-4 row-start-1 row-end-2 text-right ${isTransactionPage ? "medium-tablet:row-start-1 medium-tablet:row-end-2 medium-tablet:col-start-5 medium-tablet:col-end-6" : ""}`}>
          {`+£${amount.toFixed(2)}`}
        </ParaText>
      );
    }
    if (type === "expense") {
      return (
        <ParaText bold="Y" size="sm" className={`text-black col-start-3 col-end-4 row-start-1 row-end-2 text-right ${isTransactionPage ? "medium-tablet:row-start-1 medium-tablet:row-end-2 medium-tablet:col-start-5 medium-tablet:col-end-6" : ""}`}>
          {`-£${amount.toFixed(2)}`}
        </ParaText>
      );
    } else {
      return (
        <ParaText bold="Y" size="sm" className={`text-red col-start-3 col-end-4 row-start-1 row-end-2 text-right ${isTransactionPage ? "medium-tablet:row-start-1 medium-tablet:row-end-2 medium-tablet:col-start-5 medium-tablet:col-end-6" : ""}`}>
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
      className={`grid grid-cols-transaction-item-mobile gap-x-4 gap-y-1 py-5 border-b border-b-grey-100 first:pt-0 last:pb-0 last:border-b-0 ${
        isTransactionPage
          ? "medium-tablet:grid-cols-transaction-item-tablet medium-tablet:gap-x-8 medium-tablet:items-center laptop:grid-cols-transaction-item-desktop"
          : ""
      }`}
    >
      <div
        className={`h-8 w-8 grid place-items-center col-start-1 col-end-2 row-start-1 row-end-3 self-center rounded-full bg-purple-500 ${
          isTransactionPage
            ? "medium-tablet:row-auto medium-tablet:w-10 medium-tablet:h-10"
            : ""
        }`}
      >
        {/* Will be image or default icon */}
        <p className="capitalize font-bold text-xs">
          {counterparty.slice(0, 1)}
        </p>
      </div>

      <ParaText
        size="sm"
        bold="Y"
        className={`col-start-2 col-end-3 ${
          isTransactionPage
            ? "medium-tablet:-ml-4"
            : "row-start-1 row-end-3 self-center"
        }`}
      >
        {counterparty}
      </ParaText>
      {isTransactionPage && (
        <ParaText
          bold="N"
          size="xs"
          className={`col-start-2 col-end-3 text-grey-500 ${
            isTransactionPage
              ? "medium-tablet:col-start-3 medium-tablet:col-end-4"
              : ""
          }`}
        >
          {category}
        </ParaText>
      )}

      {handleIncomeExpenseFormat(type, amount)}

      <ParaText
        bold="N"
        size="xs"
        className={`col-start-3 col-end-4 text-right text-grey-500 ${
          isTransactionPage
            ? "medium-tablet:col-start-4 medium-tablet:col-end-5 medium-tablet:text-left"
            : ""
        }`}
      >
        {formatDate(date)}
      </ParaText>
    </div>
  );
};

export default TransactionListItem;
