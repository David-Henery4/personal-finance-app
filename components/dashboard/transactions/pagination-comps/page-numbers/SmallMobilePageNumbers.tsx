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

    console.log("FormattedPages: ", formattedPages);

    return formattedPages;
  };
  const [formattedPageList, setFormattedPageList] =
    useState<formattedFunctionReturn>(smMobilePageNumberFormat());

  useEffect(() => {
    setFormattedPageList((prevList) => {
      const activePage = currentPageNumbers.find(
        (page) => page.pageNumber === currentPage
      );

      if (!activePage) return prevList;

      const removedFirstPageItem = prevList.slice(1, currentPageNumbers.length);
      if (activePage.pageNumber === currentPageNumbers.length) {
        const prevPage = currentPageNumbers.find(
          (page) => page.pageNumber === currentPage - 1
        );
        if (!prevPage) return prevList;
        return [prevPage, ...removedFirstPageItem];
      }
      return [activePage, ...removedFirstPageItem];
    });
  }, [currentPage]);

  return (
    <li className="flex justify-center items-center gap-3">
      {/* Mobile Numbers */}
      {formattedPageList.map(({ id, pageNumber }) => {
        return (
          <button
            key={id}
            className="w-[34px] h-[34px] grid place-items-center rounded-lg border border-beige-500 hover:cursor-pointer disabled:hover:cursor-auto"
            disabled={pageNumber === "..."}
            onClick={() => {
              if (pageNumber === "..."){
                setCurrentPage(1)
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
