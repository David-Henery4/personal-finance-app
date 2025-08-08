import type { HTMLAttributes } from "react"

interface HeadingTypes extends HTMLAttributes<HTMLHeadingElement> {
  headingType: "primary" | "secondary";
}

export default HeadingTypes