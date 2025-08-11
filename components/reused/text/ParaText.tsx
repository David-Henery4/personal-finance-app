import { cva } from "class-variance-authority"
import { cn } from "@/libs/utils/cn"
import ParaTextTypes from "@/types/ParaTextTypes"

const ParaText = ({size, bold, className, ...props}: ParaTextTypes) => {

  return (
    <p className={cn(paraTextVariants({size, bold}), className)} {...props} />
  )

}

const paraTextVariants = cva("text-grey-900 leading-[150%] tracking-[0px]", {
  variants: {
    size: {
      base: "text-base",
      sm: "text-sm",
      xs: "text-xs",
    },
    bold: {
      Y: "font-bold",
      N: "font-normal"
    }
  },
  defaultVariants: {
    size: "base",
    bold: "N"
  }
})

export default ParaText