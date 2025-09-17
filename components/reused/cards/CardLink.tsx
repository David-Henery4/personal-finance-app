import Link from "next/link"
import { RoutePathOptions } from "@/types/RouteTypes"
import CaretIconRight from "public/assets/images/icon-caret-right.svg";

const CardLink = ({ href, children }: { href: RoutePathOptions, children: React.ReactNode }) => {
  return (
    <Link href={href} className="flex justify-center items-center gap-3 text-grey-500 text-sm">
      {children}
      <CaretIconRight />
    </Link>
  );
}

export default CardLink