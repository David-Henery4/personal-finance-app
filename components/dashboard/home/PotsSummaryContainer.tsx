import Heading from "@/components/reused/text/Heading";
import ParaText from "@/components/reused/text/ParaText";
import PotIcon from "public/assets/images/icon-pot.svg"
import { HomeCardHeader } from "@/components/reused/cards";

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
    <div className="rounded-xl px-5 py-6 bg-white">

      <HomeCardHeader href="/pots" title="pots" linkText="see details" />

      <div className="mt-5 flex flex-col justify-center items-center gap-5">
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
        <div className="w-full grid grid-cols-2 gap-4">
          {placeholderPotItems.map((pot) => {
            return (
              <div key={pot.id} className="relative pl-5">
                <div
                  style={{ backgroundColor: `${pot.theme}` }}
                  className="absolute left-0 top-0 h-full w-1 rounded-lg"
                ></div>
                <Heading
                  headingType="five"
                  className="text-grey-500 font-normal"
                >
                  {pot.title}
                </Heading>
                <ParaText size="sm" bold="Y">
                  {`£${pot.value}`}
                </ParaText>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PotsSummaryContainer;
