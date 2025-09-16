import type { HTMLAttributes } from "react";

interface ParaTextTypes extends HTMLAttributes<HTMLParagraphElement> {
  bold: "Y" | "N";
  size: "base" | "sm" | "xs" | "xl";
}

export default ParaTextTypes;
