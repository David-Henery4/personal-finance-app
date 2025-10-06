"use client";
import { appRoutesList } from "@/local-data/appRoutes";
import { usePathname } from "next/navigation";
import SidebarLink from "./SidebarLink";
import LogoLarge from "@/public/assets/images/logo-large.svg";
import ArrowLeftIcon from "@/public/assets/images/icon-minimize-menu.svg";

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
              <p className="text-xs font-bold sr-only lg-mobile:not-sr-only lg-mobile:mt-1 lg-laptop:text-sm">
                {route.name}
              </p>
            </SidebarLink>
          );
        })}
      </menu>

      <div className="hidden pr-6 group mt-60 lg-laptop:block">
        <button className="w-full inline-flex justify-start items-center px-8 py-4 gap-4 text-sm font-bold text-grey-300 group-hover:cursor-pointer group-hover:text-white group-hover:scale-105">
          <ArrowLeftIcon className="fill-grey-300 group-hover:fill-white" />
          <span>Minimize Menu</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
