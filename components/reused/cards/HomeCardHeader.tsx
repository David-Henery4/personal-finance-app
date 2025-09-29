import React from "react";
import Heading from "../text/Heading";
import CardLink from "./CardLink";
import { RoutePathOptions } from "@/types/RouteTypes";

interface HomeCardHeaderParams {
  title: "recurring bills" | "pots" | "transactions" | "budgets";
  href: RoutePathOptions;
  linkText: "view all" | "see details";
}

const HomeCardHeader = ({ href, title, linkText }: HomeCardHeaderParams) => {
  return (
    <div className="flex justify-between items-center gap-2 capitalize">
      <Heading headingType="fourth">{title}</Heading>
      <CardLink href={href}>{linkText}</CardLink>
    </div>
  );
};

export default HomeCardHeader;
