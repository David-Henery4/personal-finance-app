import type { HTMLAttributes } from "react";

interface ParaTextTypes extends HTMLAttributes<HTMLParagraphElement> {
  isBold: boolean;
  size: "base" | "sm" | "xs";
}

export default ParaTextTypes;
