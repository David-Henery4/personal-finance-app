import type { HTMLAttributes } from "react"

interface HeadingTypes extends HTMLAttributes<HTMLHeadingElement> {
  headingType: "primary" | "secondary"| "third" | "fourth" | "five";
  theme?: "light" | "dark";
}

export default HeadingTypes