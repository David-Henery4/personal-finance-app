import Link from "next/link"

const SidebarLink = ({ href, children, pathname }: { href: string, children: React.ReactNode, pathname: string }) => {
  return (
    <Link href={href} className={`relative w-full grid place-items-center pt-2 pb-3 rounded-t-lg group hover:cursor-pointer ${
      pathname === href ? "bg-grey-100" : ""
    }`}>
      {children}
      {pathname === href && (
        <span className="absolute bottom-0 left-0 w-full h-1 bg-green"></span>
      )}
    </Link>
  )
}

export default SidebarLink