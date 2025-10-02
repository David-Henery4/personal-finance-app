import Heading from "@/components/reused/text/Heading";
import ParaText from "@/components/reused/text/ParaText";
import PotIcon from "public/assets/images/icon-pot.svg";
import { HomeCardHeader, ListItem } from "@/components/reused/cards";

const placeholderPotItems = [
  {
    id: 1,
    title: "Savings",
    value: 159,
    theme: "#277c78",
  },
  {
    id: 2,
    title: "Gift",
    value: 40,
    theme: "#82c9d7",
  },
  {
    id: 3,
    title: "Concert Tickets",
    value: 110,
    theme: "#626070",
  },
  {
    id: 4,
    title: "New Laptop",
    value: 10,
    theme: "#f2cdac",
  },
];

const PotsSummaryContainer = () => {
  return (
    <div className="rounded-xl px-5 py-6 bg-white sm-tablet:p-8 laptop:col-start-1 laptop:col-end-7 laptop:row-start-1 laptop:row-end-3">
      <HomeCardHeader href="/pots" title="pots" linkText="see details" />

      <div className="mt-5 flex flex-col justify-center items-center gap-5 lg-mobile:flex-row">
        {/* Pots totals */}
        <div className="w-full bg-beige-100 p-4 rounded-xl flex justify-start items-center gap-4">
          <PotIcon />
          <div>
            <Heading headingType="third" className="text-grey-500 font-normal">
              Total Saved
            </Heading>
            <ParaText size="xl" bold="Y" className="mt-[11px]">
              $850
            </ParaText>
          </div>
        </div>

        {/* Pots List */}
        <ul className="w-full grid grid-cols-2 gap-4">
          {placeholderPotItems.map((pot) => {
            return <ListItem {...pot} key={pot.id} />;
          })}
        </ul>

      </div>
    </div>
  );
};

export default PotsSummaryContainer;
