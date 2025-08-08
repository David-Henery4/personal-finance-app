import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils/cn";
import HeadingTypes from "@/types/HeadingTypes";

const Heading = ({ headingType = "primary", className, ...props }: HeadingTypes) => {
  if (headingType === "secondary") {
    return (
      <h2
        className={cn(headingVariants({ headingType }), className)}
        {...props}
      />
    );
  }

  return <h1 className={cn(headingVariants({headingType}),  className)} {...props} />;
}

const headingVariants = cva("font-bold leading-[120%] tracking-[0px]", {
  variants: {
    headingType: {
      primary: "text-[32px]",
      secondary: "text-xl",
    },
  },
});


export default Heading;
