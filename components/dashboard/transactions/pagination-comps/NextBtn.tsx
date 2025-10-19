import ChevIconRight from "public/assets/images/icon-caret-right.svg";
import { TransactionChangePageType } from "@/types/TransactionItemTypes";

const NextBtn = ({ setCurrentPage, currentPageNumbers }: TransactionChangePageType) => {
  return (
    <li>
      <button
        onClick={() =>
          setCurrentPage((prevValue) => {
            if (prevValue >= (currentPageNumbers.length) ){
              return prevValue
            }
            return prevValue + 1;
          })
        }
        className="w-12 h-10 grid place-items-center rounded-lg border border-beige-500 hover:cursor-pointer"
      >
        <span className="sr-only">Next</span>
        <ChevIconRight />
      </button>
    </li>
  );
};

export default NextBtn;
