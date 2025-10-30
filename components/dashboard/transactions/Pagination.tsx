"use client";
import {
  MobilePageNumbers,
  PageNumbers,
  SmallMobilePageNumbers,
} from "./pagination-comps/page-numbers";
import { NextBtn, PrevBtn } from "./pagination-comps";
import transactionsDummyData from "@/local-data/placeholder-data/transactions";
import { useEffect, useState } from "react";

// Need to limit the amount of page numbers shown based on the screen size.
// Maybe use & hide different html elements or components based on size size,
// then each have different logic.

// Will be client-side pagination.
// Server-side is best for maybe websites like E-Commerce, news, blogs etc.
// Client-side is best for Applications like this where things like SEO don't matter as much.
// So don't really need them in the URLParams, but we can make them persist on the client still.

interface TempPageTypes {
  id: number;
  pageNumber: number;
}

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allTransactions, setAllTransactions] = useState(transactionsDummyData);
  // const [currentItemsPerPage, setCurrentItemsPerPage] = useState(10);
  // const [currentPageItems, setCurrentPageItems] = useState(
  //   transactionsDummyData.slice(0, 1)
  // );

  // If we was doing it client side, & fetching all the items,
  // we would need to separate the full list into groups of 10.
  // BUT I want to do it server side, so we fetch, the 10 items
  // we need through queries!
  // For temp purposes, well fetch from "allTransactions" as if it,
  // were the database
  // then use the LENGTH of all the items in the database to create the page
  // numbers.
  const handlePageAmounts = () => {
    const amountOfTransactions = transactionsDummyData.length + 1;
    const pages = [];
    let page = 0;
    for (let index = 1; index < amountOfTransactions; index++) {
      if (index % 10 === 0) {
        page += 1;
        pages.push({
          id: index,
          pageNumber: page,
        });
      }
    }
    return pages;
    // setCurrentPageNumbers(pages);
  };
  const [currentPageNumbers, setCurrentPageNumbers] = useState(
    handlePageAmounts()
  );

  // console.log(currentPageNumbers)

  // useEffect(() => {
  //   handlePageAmounts();
  // }, []);

  return (
    <nav
      aria-label="pagination"
      className="w-full flex justify-between items-center gap-3"
    >
      <ul className="w-full flex justify-between items-center gap-3">
        <PrevBtn
          setCurrentPage={setCurrentPage}
          currentPageNumbers={currentPageNumbers}
        />
        <SmallMobilePageNumbers
          setCurrentPage={setCurrentPage}
          currentPageNumbers={currentPageNumbers}
          currentPage={currentPage}
        />
        <MobilePageNumbers
          currentPageNumbers={currentPageNumbers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <NextBtn
          setCurrentPage={setCurrentPage}
          currentPageNumbers={currentPageNumbers}
        />
      </ul>
    </nav>
  );
};

export default Pagination;
