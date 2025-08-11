import type { HTMLAttributes } from "react";

interface ParaTextTypes extends HTMLAttributes<HTMLParagraphElement> {
  bold: "Y" | "N";
  size: "base" | "sm" | "xs";
}

export default ParaTextTypes;
