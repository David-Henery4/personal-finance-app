import ParaText from "../text/ParaText"
import Heading from "../text/Heading"

const TotalsDisplayCard = ({title, value, isPrimary}: {title: string, value: string, isPrimary?: boolean}) => {
  return (
    <div
      className={`w-full p-5 rounded-xl dropdown-shadow-2 sm-tablet:p-6 ${
        isPrimary ? "bg-primary text-secondary" : "bg-secondary text-primary"
      } last:lg-mobile:col-start-1 last:lg-mobile:col-end-[-1] last:tablet:col-start-auto last:tablet:col-end-auto`}
    >
      <Heading
        headingType="third"
        className="font-normal"
        theme={`${isPrimary ? "dark" : "light"}`}
      >
        {title}
      </Heading>
      <ParaText
        bold="Y"
        size="xl"
        className={`mt-3 ${isPrimary && "text-secondary"}`}
      >
        {value}
      </ParaText>
    </div>
  );
}

export default TotalsDisplayCard