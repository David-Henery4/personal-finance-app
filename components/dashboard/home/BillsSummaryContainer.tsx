import { HomeCardHeader } from "@/components/reused/cards";
import Heading from "@/components/reused/text/Heading";
import ParaText from "@/components/reused/text/ParaText";

const placeholderBillsList = [
  {
    id: 1,
    title: "paid Bills",
    value: 190,
    theme: "#277C78",
  },
  {
    id: 2,
    title: "Total Upcoming",
    value: 194.98,
    theme: "#F2CDAC",
  },
  {
    id: 3,
    title: "Due Soon",
    value: 59.98,
    theme: "#82C9D7",
  },
];

const BillsSummaryContainer = () => {
  return (
    <div className="rounded-xl px-5 py-6 bg-white dropdown-shadow-2 sm-tablet:p-8 laptop:col-start-7 laptop:col-end-13 laptop:row-start-11 laptop:row-end-13">
      <HomeCardHeader
        href="/bills"
        linkText="see details"
        title="recurring bills"
      />

      <ul className="flex flex-col justify-between items-center gap-3 mt-8">
        {placeholderBillsList.map((bill) => {
          return (
            <li
              key={bill.id}
              className="w-full px-4 py-5 rounded-lg bg-beige-100 flex justify-between items-center"
              style={{ borderLeft: `4px solid ${bill.theme}` }}
            >
              <Heading
                headingType="third"
                className="text-grey-500 capitalize font-medium"
              >
                {bill.title}
              </Heading>
              <ParaText bold="Y" size="sm">
                {`£${bill.value.toFixed(2)}`}
              </ParaText>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BillsSummaryContainer