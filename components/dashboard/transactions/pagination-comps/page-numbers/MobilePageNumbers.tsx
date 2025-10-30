import { Dispatch, SetStateAction, useState, useEffect } from "react";

interface MobilePageNumbersProps {
  currentPageNumbers: {
    id: number;
    pageNumber: number | "...";
  }[];
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

const MobilePageNumbers = ({
  currentPageNumbers,
  currentPage,
  setCurrentPage,
}: MobilePageNumbersProps) => {
  const handleMobilePaginationFormatting = () => {
    const firstTwoPages = currentPageNumbers.slice(0, 2);
    const lastPage = currentPageNumbers.slice(-1);

    // if (currentPage > 2){
    //   firstTwoPages = currentPageNumbers.slice(currentPage - 2, currentPage + 1);
    // }

    if (currentPageNumbers.length < 5) {
      return currentPageNumbers;
    }

    const fivePlusPages: {
      id: number;
      pageNumber: number | "...";
    }[] = [...firstTwoPages, { id: -34959438, pageNumber: "..." }, ...lastPage];

    return fivePlusPages;
  };

  const [currentPaginationFormat, setCurrentPaginationFormat] = useState(
    handleMobilePaginationFormatting()
  );

  useEffect(() => {

    setCurrentPaginationFormat((prevList) => {

      // const activePages = currentPageNumbers.slice(
      //   currentPage - 2,
      //   currentPage
      // );
      // console.log("Mobile-activePages", activePages);

      // if (currentPageNumbers.length === currentPage)

      // const activePages = currentPageNumbers.filter(
      //   (page) => {
      //     if (page.pageNumber !== "...")
      //     console.log((page.pageNumber % 2) === 0)
      //   }
      // );

      // const lastPages = prevList.slice(prevList.length - 2, prevList.length);

      // console.log("Mobile-LastPages", lastPages);

      return prevList;
    })


    // setCurrentPaginationFormat((prevValues) => {
    //   let firstTwoPages = currentPageNumbers.slice(0, 2);
    //   const lastPages = prevValues.slice(
    //     prevValues.length - 2,
    //     prevValues.length
    //   );

    //   if (currentPage === currentPageNumbers.length - 1) {
    //     console.log(
    //       "called: ",
    //       "currentPage: ",
    //       currentPage,
    //       "currentPageNumbers.length - 1: ",
    //       currentPageNumbers.length - 1
    //     );
    //     return prevValues;
    //   }

    //   if (currentPage > currentPageNumbers.length - 1) {
    //     firstTwoPages = currentPageNumbers.slice(
    //       currentPage - 3,
    //       currentPage - 1
    //     );
    //     return [...firstTwoPages, ...lastPages];
    //   }
    //   if (currentPage > 2) {
    //     // Was here
    //     // sort out the issue of the page numbers not updating when going down from the top number.
    //     firstTwoPages = currentPageNumbers.slice(
    //       currentPage - 1,
    //       currentPage + 1
    //     );
    //     console.log("lastPages: ", lastPages);
    //     return [...firstTwoPages, ...lastPages];
    //   }

    //   return [...firstTwoPages, ...lastPages];
    // });
  }, [currentPage]);

  return (
    <li className="justify-center items-center gap-3 hidden sm-mobile:flex">
      {/* Mobile Numbers */}
      {currentPaginationFormat.map(({ id, pageNumber }) => {
        return (
          <button
            key={id}
            className={`w-[34px] h-[34px] grid place-items-center rounded-lg border hover:cursor-pointer disabled:hover:cursor-auto ${
              currentPage === pageNumber
                ? "bg-black text-white"
                : "border-beige-500"
            }`}
            disabled={pageNumber === "..."}
            onClick={() => {
              if (pageNumber === "...") {
                setCurrentPage(1);
              } else {
                setCurrentPage(pageNumber);
              }
            }}
          >
            {pageNumber}
          </button>
        );
      })}
    </li>
  );
};

export default MobilePageNumbers;
