import { Dispatch, SetStateAction, useState, useEffect } from "react";

interface SmallMobilePageNumbersProps {
  currentPageNumbers: {
    id: number;
    pageNumber: number;
  }[];
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

type formattedFunctionReturn = {
  id: number;
  pageNumber: number | "...";
}[];

const SmallMobilePageNumbers = ({
  currentPageNumbers,
  setCurrentPage,
  currentPage,
}: SmallMobilePageNumbersProps) => {
  const smMobilePageNumberFormat = (): formattedFunctionReturn => {
    if (currentPageNumbers.length <= 3) {
      return currentPageNumbers;
    }

    const formattedPages: formattedFunctionReturn = [
      { id: -8963472, pageNumber: "..." },
    ];

    currentPageNumbers.forEach((page, i, arr) => {
      if (currentPage === currentPageNumbers.length) return;
      if (i + 1 === currentPage) formattedPages.unshift(page);
      if (i + 1 === currentPageNumbers.length) formattedPages.push(page);
    });

    return formattedPages;
  };
  const [formattedPageList, setFormattedPageList] =
    useState<formattedFunctionReturn>(smMobilePageNumberFormat());

  useEffect(() => {

    setFormattedPageList((prevList) => {
      
      if (currentPageNumbers.length <= 3) return prevList
      
      const activePage = currentPageNumbers.find(
        (page) => page.pageNumber === currentPage
      );
      const lastPages = prevList.slice(prevList.length - 2, prevList.length);
      
      if (!activePage) return prevList
      
      if (currentPageNumbers.length === currentPage){
        const lastActivePage = currentPageNumbers.find(
          (page) => page.pageNumber === currentPage - 1
        );
        
        if (!lastActivePage) return prevList;
        
        return [lastActivePage, ...lastPages];
      }
      
      return [activePage, ...lastPages];
    });
  }, [currentPage]);

  return (
    <li className="flex justify-center items-center gap-3 sm-mobile:hidden">
      {/* Mobile Numbers */}
      {formattedPageList.map(({ id, pageNumber }, i) => {
        return (
          <button
            key={i}
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

export default SmallMobilePageNumbers;
