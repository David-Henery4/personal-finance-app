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
      className={`relative w-full grid place-items-center pt-2 pb-3 rounded-t-lg group hover:cursor-pointer ${
        checkForActivePath() ? "bg-grey-100 text-grey-900" : "text-grey-300"
      }`}
    >
      {children}
      {checkForActivePath() && (
        <span className="absolute bottom-0 left-0 w-full h-1 bg-green"></span>
      )}
    </Link>
  );
};

export default SidebarLink