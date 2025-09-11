import Link from "next/link"

const SidebarLink = ({ href, children, pathname }: { href: string, children: React.ReactNode, pathname: string }) => {
  return (
    <Link href={href} className={`w-full grid place-items-center pt-2 pb-3 rounded-t-lg group hover:cursor-pointer ${
      pathname === href ? "bg-grey-100" : ""
    }`}>
      {children}
    </Link>
  )
}

export default SidebarLink