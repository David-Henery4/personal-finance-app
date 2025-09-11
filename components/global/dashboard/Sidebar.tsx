"use client";

import appRoutes from "@/local-data/appRoutes";
import Link from "next/link";
import HomeIcon from "@/public/assets/images/icon-nav-overview.svg";
import BudgetIcon from "@/public/assets/images/icon-nav-budgets.svg";
import BillsIcon from "@/public/assets/images/icon-nav-recurring-bills.svg";
import PotsIcon from "@/public/assets/images/icon-nav-pots.svg";
import TransactionsIcon from "@/public/assets/images/icon-nav-transactions.svg";
import { usePathname } from "next/navigation";


const Sidebar = () => {
  const pathname = usePathname();
  return (
    <menu className="w-full px-4 pt-2 fixed left-0 bottom-0 bg-grey-900 flex justify-between items-center">
      <Link
        className={`w-full grid place-items-center pt-2 pb-3 rounded-t-lg group hover:cursor-pointer ${pathname === appRoutes.dashboard ? "bg-grey-100" : ""}`}
        href={appRoutes.dashboard}
      >
        <HomeIcon className={`${pathname === appRoutes.dashboard ? "fill-green" : "fill-grey-300 group-hover:fill-white"}`} />
      </Link>
      <Link
        className="w-full grid place-items-center pt-2 pb-3 group hover:cursor-pointer"
        href={appRoutes.transactions}
      >
        <TransactionsIcon className={`${pathname === appRoutes.transactions ? "fill-green" : "fill-grey-300 group-hover:fill-white"}`} />
      </Link>
      <Link
        className="w-full grid place-items-center pt-2 pb-3 group hover:cursor-pointer"
        href={appRoutes.budgets}
      >
        <BudgetIcon className={`${pathname === appRoutes.budgets ? "fill-green" : "fill-grey-300 group-hover:fill-white hover:cursor-pointer"}`} />
      </Link>
      <Link
        className="w-full grid place-items-center pt-2 pb-3 group hover:cursor-pointer"
        href={appRoutes.pots}
      >
        <PotsIcon className={`${pathname === appRoutes.pots ? "fill-green" : "fill-grey-300 group-hover:fill-white hover:cursor-pointer"}`} />
      </Link>
      <Link
        className="w-full grid place-items-center pt-2 pb-3 group hover:cursor-pointer"
        href={appRoutes.bills}
      >
        <BillsIcon className={`${pathname === appRoutes.bills ? "fill-green" : "fill-grey-300 group-hover:fill-white hover:cursor-pointer"}`} />
      </Link>
    </menu>
  );
};

export default Sidebar;
