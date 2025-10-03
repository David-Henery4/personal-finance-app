import Link from "next/link"
import { RoutePathOptions } from "@/types/RouteTypes";

const SidebarLink = ({
  href,
  children,
  pathname,
}: {
  href: RoutePathOptions;
  children: React.ReactNode;
  pathname: string;
}) => {

  const checkForActivePath = () => pathname === href;

  return (
    <Link
      href={href}
      className={`relative capitalize w-full grid place-items-center pt-2 pb-3 rounded-t-lg group hover:scale-105 hover:cursor-pointer lg-laptop:px-8 lg-laptop:py-4 lg-laptop:rounded-tl-none lg-laptop:rounded-br-lg lg-laptop:grid-cols-dashboard-overview lg-laptop:justify-items-start lg-laptop:gap-4 ${
        checkForActivePath()
          ? "bg-grey-100 text-grey-900"
          : "text-grey-300 hover:text-white"
      }`}
    >
      {children}
      {checkForActivePath() && (
        <span className="absolute bottom-0 left-0 w-full h-1 bg-green lg-laptop:top-0 lg-laptop:w-1 lg-laptop:h-full"></span>
      )}
    </Link>
  );
};

export default SidebarLink