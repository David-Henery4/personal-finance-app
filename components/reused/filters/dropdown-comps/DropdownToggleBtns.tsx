import ChevDownIcon from "public/assets/images/icon-caret-down.svg";
import FilterIconMobile from "public/assets/images/icon-filter-mobile.svg";
import SortIconMobile from "public/assets/images/icon-sort-mobile.svg";
import { DropdownToggleBtnsProps } from "@/types/dropdownTypes";

const DropdownToggleBtns = ({toggleDropdown, currentFilter, isCategoryDropdownOpen, type}: DropdownToggleBtnsProps) => {
  return (
    <div>
      <button
        onClick={toggleDropdown}
        className={`rounded-lg border border-beige-500 py-3 px-5 justify-between items-center gap-4 text-sm font-normal text-grey-900 hover:cursor-pointer hidden tablet:flex ${
          type === "SORT" ? "w-[114px]" : "w-[177px]"
        }`}
      >
        {currentFilter?.label}
        <span
          className={`transition-all ${
            isCategoryDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevDownIcon />
        </span>
      </button>

      <button onClick={toggleDropdown} className="cursor-pointer tablet:hidden">
        <span className="sr-only">{currentFilter?.label}</span>
        {type === "FILTER" ? <FilterIconMobile /> : <SortIconMobile />}
      </button>
    </div>
  );
}

export default DropdownToggleBtns