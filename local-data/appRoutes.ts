import { RouteTypes } from "@/types/RouteTypes";
import { DashboardIcon, BillsIcon, BudgetsIcon, PotsIcon, TransactionIcon } from "@/components/icons/page-link-icons";

const appRoutes: RouteTypes = {
  dashboard: "/",
  login: "/login",
  signup: "/signup",
  budgets: "/budgets",
  bills: "/bills",
  pots: "/pots",
  transactions: "/transactions",
}

const appRoutesList = [
  {
    id: 1,
    name: "dashboard",
    route: appRoutes.dashboard,
    icon: DashboardIcon
  },
  {
    id: 2,
    name: "transactions",
    route: appRoutes.transactions,
    icon: TransactionIcon
  },
  {
    id: 3,
    name: "budgets",
    route: appRoutes.budgets,
    icon: BudgetsIcon
  },
  {
    id: 4,
    name: "pots",
    route: appRoutes.pots,
    icon: PotsIcon
  },
  {
    id: 5,
    name: "recurring bills",
    route: appRoutes.bills,
    icon: BillsIcon
  },
];


export { appRoutes, appRoutesList };
