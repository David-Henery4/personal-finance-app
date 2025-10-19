import { Dispatch, SetStateAction } from "react";

interface SmallMobilePageNumbersProps {
  currentPageNumbers: {
    id: number;
    pageNumber: number;
  }[];
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const SmallMobilePageNumbers = ({
  currentPageNumbers,
  setCurrentPage,
}: SmallMobilePageNumbersProps) => {
  console.log("Current: ", currentPageNumbers);

  return (
    <li className="flex justify-center items-center gap-3">
      {/* Mobile Numbers */}
      {currentPageNumbers.map(({ id, pageNumber }) => {
        return (
          <button
            key={id}
            className="w-10 h-10 grid place-items-center rounded-lg border border-beige-500 hover:cursor-pointer"
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
    </li>
  );
};

export default SmallMobilePageNumbers;
