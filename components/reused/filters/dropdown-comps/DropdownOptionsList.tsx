import { Fragment } from "react";
import { DropdownOptionsListProps } from "@/types/dropdownTypes";

const DropdownOptionsList = ({
  handleCurrentFilterChange,
  isCategoryDropdownOpen,
  options,
  type,
}: DropdownOptionsListProps) => {
  return (
    <form
      className={`rounded-lg absolute z-20 top-16 bg-white dropdown-shadow right-0 tablet:left-0 ${
        isCategoryDropdownOpen ? "block" : "hidden"
      } ${type === "SORT" ? "w-[114px]" : "w-[177px]"}`}
    >
      {options.map((option) => {
        return (
          <Fragment key={option.id}>
            <div
              className={`relative px-5 py-3 text-sm text-grey-900 group ${
                option.isActive ? "font-bold" : "font-normal"
              }`}
              onClick={() => handleCurrentFilterChange(option.id)}
            >
              <label className="group-hover:text-[15px]" htmlFor={option.value}>
                {option.label}
              </label>
              <input
                className="absolute top-0 left-0 w-full h-full opacity-0 hover:cursor-pointer"
                type="radio"
                name={type.toLowerCase()}
                value={option.value}
                id={option.value}
              />
            </div>

            <div className="mx-5 h-[1px] bg-grey-100 last:hidden"></div>
          </Fragment>
        );
      })}
    </form>
  );
};

export default DropdownOptionsList;
