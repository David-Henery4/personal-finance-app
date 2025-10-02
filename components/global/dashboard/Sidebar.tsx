"use client";
import appRoutes from "@/local-data/appRoutes";
import { usePathname } from "next/navigation";
import SidebarLink from "./SidebarLink";
import { DashboardIcon, Budgets, BillsIcon, PotsIcon, Transaction } from "@/components/icons/page-link-icons";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <menu className="w-full px-4 pt-2 rounded-t-lg sticky left-0 bottom-0 bg-grey-900 flex justify-between items-center sm-tablet:px-10 lg-laptop:flex-col lg-laptop:justify-start lg-laptop:rounded-tl-none">

      
      <SidebarLink pathname={pathname} href={appRoutes.dashboard}>
        <DashboardIcon pathname={pathname} />
        <p className="text-xs font-bold sr-only lg-mobile:not-sr-only lg-mobile:mt-1">
          Dashboard
        </p>
      </SidebarLink>

      <SidebarLink pathname={pathname} href={appRoutes.transactions}>
        <Transaction pathname={pathname} />
        <p className="text-xs font-bold sr-only lg-mobile:not-sr-only lg-mobile:mt-1">
          Transactions
        </p>
      </SidebarLink>

      <SidebarLink pathname={pathname} href={appRoutes.budgets}>
        <Budgets pathname={pathname} />
        <p className="text-xs font-bold sr-only lg-mobile:not-sr-only lg-mobile:mt-1">
          Budgets
        </p>
      </SidebarLink>

      <SidebarLink pathname={pathname} href={appRoutes.pots}>
        <PotsIcon pathname={pathname} />
        <p className="text-xs font-bold sr-only lg-mobile:not-sr-only lg-mobile:mt-1">
          Pots
        </p>
      </SidebarLink>

      <SidebarLink pathname={pathname} href={appRoutes.bills}>
        <BillsIcon pathname={pathname} />
        <p className="text-xs font-bold sr-only lg-mobile:not-sr-only lg-mobile:mt-1">
          Recurring bills
        </p>
      </SidebarLink>
    </menu>
  );
};

export default Sidebar;
