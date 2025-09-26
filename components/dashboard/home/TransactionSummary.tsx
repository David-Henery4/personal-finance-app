import ParaText from "@/components/reused/text/ParaText";
import { JSX } from "react";
import { HomeCardHeader } from "@/components/reused/cards";

const placeholderTransItems = [
  {
    id: 1,
    counterparty: "Emma Richardson",
    category: "General",
    amount: 75.5,
    date: "19 Aug 2024",
    type: "income",
  },
  {
    id: 2,
    counterparty: "Savory Bites Bistro",
    category: "Dining Out",
    amount: 55.5,
    date: "19 Aug 2024",
    type: "expense",
  },
  {
    id: 3,
    counterparty: "Daniel Carter",
    category: "Groceries",
    amount: 42.3,
    date: "18 Aug 2024",
    type: "expense",
  },
  {
    id: 4,
    counterparty: "Sun Park",
    category: "Job",
    amount: 120,
    date: "17 Aug 2024",
    type: "income",
  },
  {
    id: 5,
    counterparty: "Urban Services Hub",
    category: "Entertainment",
    amount: 65,
    date: "17 Aug 2024",
    type: "expense",
  },
];

// Could set the default image/icon/initial/colour etc based on the category of the transaction
// EG - if no image available/uploaded, then use a default option.
//
// -->  <p className="capitalize font-bold text-xs">
// -->   {transaction.counterparty.slice(0, 1)}
// -->  </p>

const TransactionSummary = () => {
  
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

  return (
    <div className="rounded-xl px-5 py-6 bg-white">

      <HomeCardHeader title="transactions" href="/transactions" linkText="view all" />

      <div className="mt-8 grid grid-cols-1">
        {placeholderTransItems.map((transaction) => {
          return (
            <div
              key={transaction.id}
              className="flex justify-between items-center py-5 border-b border-b-grey-100 first:pt-0 last:pb-0 last:border-b-0"
            >
              <div className="flex-1 flex justify-start items-center gap-4">
                <div className="h-8 w-8 grid place-items-center rounded-full bg-purple-500">
                  <p className="capitalize font-bold text-xs">
                    {transaction.counterparty.slice(0, 1)}
                  </p>
                </div>

                <ParaText size="sm" bold="Y" className="text-grey-900">
                  {transaction.counterparty}
                </ParaText>
              </div>

              <div className="text-right">
                {handleIncomeExpenseFormat(
                  transaction.type,
                  transaction.amount
                )}

                <ParaText bold="N" size="xs" className="mt-2">
                  {transaction.date}
                </ParaText>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionSummary;
