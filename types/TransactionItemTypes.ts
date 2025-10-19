import { Dispatch, SetStateAction } from "react";


interface TransactionItemTypes {
  id: number;
  userId: string;
  budgetId: number;
  amount: number;
  category: string;
  note: string;
  date: string;
  counterparty: string;
  type: string;
}

export interface TransactionChangePageType {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPageNumbers: {
    id: number;
    pageNumber: number;
  }[];
}

export default TransactionItemTypes;
