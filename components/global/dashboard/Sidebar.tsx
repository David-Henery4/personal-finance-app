import appRoutes from "@/local-data/appRoutes";
import Link from "next/link";
import HomeIcon from "@/public/assets/images/icon-nav-overview.svg";
import BudgetIcon from "@/public/assets/images/icon-nav-budgets.svg";
import BillsIcon from "@/public/assets/images/icon-nav-recurring-bills.svg";
import PotsIcon from "@/public/assets/images/icon-nav-pots.svg";
import TransactionsIcon from "@/public/assets/images/icon-nav-transactions.svg";

const Sidebar = () => {
  return (
    <menu className="w-full px-4 pt-2 fixed left-0 bottom-0 bg-grey-900 flex justify-between items-center">
      <Link className="px-6 py-2" href={appRoutes.dashboard}>
        <HomeIcon className="w-6 h-6" />
      </Link>
      <Link className="px-6 py-2" href={appRoutes.transactions}>
        <TransactionsIcon className="w-6 h-6" />
      </Link>
      <Link className="px-6 py-2" href={appRoutes.budgets}>
        <BudgetIcon className="w-6 h-6" />
      </Link>
      <Link className="px-6 py-2" href={appRoutes.pots}>
        <PotsIcon className="w-6 h-6" />
      </Link>
      <Link className="px-6 py-2" href={appRoutes.bills}>
        <BillsIcon className="w-6 h-6" />
      </Link>
    </menu>
  )
}

export default Sidebar