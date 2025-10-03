"use client";
import { appRoutesList } from "@/local-data/appRoutes";
import { usePathname } from "next/navigation";
import SidebarLink from "./SidebarLink";


const Sidebar = () => {
  const pathname = usePathname();
  return (
    <menu className="w-full px-4 pt-2 rounded-t-lg sticky left-0 bottom-0 bg-grey-900 flex justify-between items-center sm-tablet:px-10 lg-laptop:flex-col lg-laptop:justify-start lg-laptop:rounded-tl-none">
      {
        appRoutesList.map((route) => {
          return (
            <SidebarLink key={route.id} pathname={pathname} href={route.route}>
              <route.icon pathname={pathname} />
              <p className="text-xs font-bold sr-only lg-mobile:not-sr-only lg-mobile:mt-1">
                {route.name}
              </p>
            </SidebarLink>
          );
        })
      }
    </menu>
  );
};

export default Sidebar;
