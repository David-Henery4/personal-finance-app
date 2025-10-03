"use client";
import { appRoutesList } from "@/local-data/appRoutes";
import { usePathname } from "next/navigation";
import SidebarLink from "./SidebarLink";
import LogoLarge from "@/public/assets/images/logo-large.svg";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full rounded-t-lg sticky left-0 bottom-0 bg-grey-900 lg-laptop:rounded-tl-none desktop-sm:min-w-[240px]">
      <div className="hidden px-8 py-10 lg-laptop:block">
        <LogoLarge />
      </div>
      <menu className="w-full px-4 pt-2 flex justify-between items-center sm-tablet:px-10 lg-laptop:flex-col lg-laptop:justify-start lg-laptop:p-0 lg-laptop:pr-6 lg-laptop:mt-6 lg-laptop:gap-1 lg-laptop:items-start">
        {appRoutesList.map((route) => {
          return (
            <SidebarLink key={route.id} pathname={pathname} href={route.route}>
              <route.icon pathname={pathname} />
              <p className="text-xs font-bold sr-only lg-mobile:not-sr-only lg-mobile:mt-1">
                {route.name}
              </p>
            </SidebarLink>
          );
        })}
      </menu>
    </div>
  );
};

export default Sidebar;
