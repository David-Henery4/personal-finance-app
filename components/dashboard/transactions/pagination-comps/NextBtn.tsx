import ChevIconRight from "public/assets/images/icon-caret-right.svg";
import { TransactionChangePageType } from "@/types/TransactionItemTypes";

const NextBtn = ({ setCurrentPage, currentPageNumbers }: TransactionChangePageType) => {
  // was: w-12 h-10
  return (
    <li>
      <button
        onClick={() =>
          setCurrentPage((prevValue) => {
            if (prevValue >= currentPageNumbers.length) {
              return prevValue;
            }
            return prevValue + 1;
          })
        }
        className="w-[42px] h-[34px] grid place-items-center rounded-lg border border-beige-500 hover:cursor-pointer"
      >
        <span className="sr-only">Next</span>
        <ChevIconRight />
      </button>
    </li>
  );
};

export default NextBtn;
