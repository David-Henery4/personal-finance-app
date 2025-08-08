import { cva } from "class-variance-authority"
import { cn } from "@/libs/utils/cn"
import ParaTextTypes from "@/types/ParaTextTypes"

const ParaText = ({size= "base", isBold = false, className, ...props}: ParaTextTypes) => {

  return (
    <p>ParaText</p>
  )

}

const paraTextVariants = cva("", {
  variants: {
    
  }
})

export default ParaText