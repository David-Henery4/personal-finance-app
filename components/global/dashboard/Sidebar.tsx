"use client";
import appRoutes from "@/local-data/appRoutes";
import { usePathname } from "next/navigation";
import SidebarLink from "./SidebarLink";
import { DashboardIcon, Budgets, BillsIcon, PotsIcon, Transaction } from "@/components/icons/page-link-icons";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <menu className="w-full px-4 pt-2 fixed left-0 bottom-0 bg-grey-900 flex justify-between items-center">
      <SidebarLink
        pathname={pathname}
        href={appRoutes.dashboard}
      >
        <DashboardIcon pathname={pathname} />
        {/* <span>Dashboard</span> */}
      </SidebarLink>

      <SidebarLink
        pathname={pathname}
        href={appRoutes.budgets}
      >
        <Budgets pathname={pathname} />
      </SidebarLink>

      <SidebarLink
        pathname={pathname}
        href={appRoutes.bills}
      >
        <BillsIcon pathname={pathname} />
      </SidebarLink>

      <SidebarLink
        pathname={pathname}
        href={appRoutes.pots}
      >
        <PotsIcon pathname={pathname} />
      </SidebarLink>

      <SidebarLink
        pathname={pathname}
        href={appRoutes.transactions}
      >
        <Transaction pathname={pathname} />
      </SidebarLink>

    </menu>
  );
};

export default Sidebar;
