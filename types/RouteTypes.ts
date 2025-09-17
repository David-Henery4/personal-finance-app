interface RouteTypes {
  dashboard: "/";
  login: "/login";
  signup: "/signup";
  budgets: "/budgets";
  bills: "/bills";
  pots: "/pots";
  transactions: "/transactions";
}

type RoutePathOptions = RouteTypes[keyof RouteTypes];

export type {
  RoutePathOptions,
  RouteTypes
}

