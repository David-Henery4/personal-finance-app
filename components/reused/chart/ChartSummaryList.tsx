import { ListItem } from "../cards";

const placeholderBudgetItems = [
  {
    id: 1,
    title: "Entertainment",
    value: 50,
    theme: "#277c78",
  },
  {
    id: 2,
    title: "Bills",
    value: 750,
    theme: "#82c9d7",
  },
  {
    id: 3,
    title: "Dining Out",
    value: 75,
    theme: "#626070",
  },
  {
    id: 4,
    title: "Personal Care",
    value: 100,
    theme: "#f2cdac",
  },
];


const ChartSummaryList = () => {
  return (
    <ul className="w-full grid grid-cols-2 gap-4 lg-mobile:grid-cols-1">
      {placeholderBudgetItems.map((budget) => {
        return <ListItem {...budget} key={budget.id} />;
      })}
    </ul>
  );
};

export default ChartSummaryList;
