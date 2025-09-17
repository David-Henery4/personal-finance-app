import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils/cn";
import HeadingTypes from "@/types/HeadingTypes";

const Heading = ({ headingType = "primary", theme, className, ...props }: HeadingTypes) => {
  if (headingType === "secondary") {
    return (
      <h2
        className={cn(headingVariants({ headingType, theme }), className)}
        {...props}
      />
    );
  }
  if (headingType === "third") {
    return (
      <h3
        className={cn(headingVariants({ headingType, theme }), className)}
        {...props}
      />
    );
  }
  if (headingType === "fourth") {
    return (
      <h4
        className={cn(headingVariants({ headingType, theme }), className)}
        {...props}
      />
    );
  }
  if (headingType === "five") {
    return (
      <h5
        className={cn(headingVariants({ headingType, theme }), className)}
        {...props}
      />
    );
  }

  return <h1 className={cn(headingVariants({headingType}),  className)} {...props} />;
}

const headingVariants = cva(
  "text-grey-900 font-bold leading-[120%] tracking-[0px]",
  {
    variants: {
      headingType: {
        primary: "text-[32px]",
        secondary: "text-xl",
        third: "text-sm",
        fourth: "text-xl",
        five: "text-xs",
      },
      theme: {
        light: "text-grey-500",
        dark: "text-white"
      }
    },
  }
);


export default Heading;
