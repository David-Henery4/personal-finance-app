import ChevIconLeft from "public/assets/images/icon-caret-left.svg";
import { TransactionChangePageType } from "@/types/TransactionItemTypes";

const PrevBtn = ({ setCurrentPage}: TransactionChangePageType) => {
  return (
    <li>
      <button
        onClick={() =>
          setCurrentPage((prevValue) => {
            if (prevValue <= 1) {
              return 1;
            }
            return prevValue - 1;
          })
        }
        className="w-12 h-10 grid place-items-center rounded-lg border border-beige-500 hover:cursor-pointer"
      >
        <span className="sr-only">Prev</span>
        <ChevIconLeft />
      </button>
    </li>
  );
};

export default PrevBtn;
