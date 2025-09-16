import type { HTMLAttributes } from "react"

interface HeadingTypes extends HTMLAttributes<HTMLHeadingElement> {
  headingType: "primary" | "secondary"| "third" | "fourth";
  theme?: "light" | "dark";
}

export default HeadingTypes