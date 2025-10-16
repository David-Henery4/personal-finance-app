import {
  TextSearch,
  Dropdown,
} from "@/components/reused/filters";
import filterOptions from "@/local-data/dropdown-options/categoryOptions";
import sortOptions from "@/local-data/dropdown-options/filterOptions";

const FilterBar = () => {
  return (
    <div className="flex justify-between items-center gap-6">
      <TextSearch />
      <div className="flex justify-center items-center gap-6">
        <Dropdown optionsArray={sortOptions} type="SORT" />
        <Dropdown optionsArray={filterOptions} type="FILTER" />
      </div>
    </div>
  );
};

export default FilterBar;
