import Heading from "../text/Heading";
import ParaText from "../text/ParaText";

interface ListItemInfo {
  id: number;
  title: string;
  value: number;
  theme: string;
}

const ListItem = ({id, theme, title, value}: ListItemInfo) => {
  return (
    <li key={id} className="relative pl-5 content-center">
      <div
        style={{ backgroundColor: `${theme}` }}
        className="absolute left-0 top-0 h-full w-1 rounded-lg"
      ></div>
      <Heading headingType="five" className="text-grey-500 font-normal">
        {title}
      </Heading>
      <ParaText size="sm" bold="Y">
        {`£${value.toFixed(2)}`}
      </ParaText>
    </li>
  );
}

export default ListItem