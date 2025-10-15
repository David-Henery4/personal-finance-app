"use client";
import FilterIconMobile from "public/assets/images/icon-filter-mobile.svg";
import ChevDownIcon from "public/assets/images/icon-caret-down.svg";
import filterOptions from "@/local-data/dropdown-options/categoryOptions";
import ParaText from "../text/ParaText";
import { useState, useEffect, Fragment } from "react";

// Was working on the underline of the different options
// const currentFilterValue = filterOptions.filter(
//   (option) => option.isActive
// )[0];
// console.log("Current Filter: ", currentFilterValue);

const CategoryFilter = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [options, setOptions] = useState(filterOptions);
  const [currentFilter, setCurrentFilter] = useState(
    filterOptions.filter((option) => option.isActive)[0]
  );

  const toggleDropdown = () =>
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);

  const handleCurrentFilterChange = (id: number) => {
    const updatedOptions = options.map((option) =>
      option.id === id
        ? { ...option, isActive: true }
        : { ...option, isActive: false }
    );
    setOptions(updatedOptions);
    setCurrentFilter(updatedOptions.filter((option) => option.isActive)[0]);
    toggleDropdown();
  };

  useEffect(() => {
    console.log("Current Filter: ", currentFilter);
  }, [currentFilter]);

  return (
    <div className="">
      <span className="hidden">
        <FilterIconMobile />
      </span>

      <div className="flex justify-center items-center gap-2">
        <ParaText bold="N" size="sm" className="text-grey-500">
          Category
        </ParaText>

        {/* Dropdown container */}
        <div className="relative">
          {/* Dropdown Currently Selected option */}
          <button
            onClick={toggleDropdown}
            className="w-[177px] rounded-lg border border-beige-500 py-3 px-5 flex justify-between items-center gap-4 text-sm font-normal text-grey-900 hover:cursor-pointer"
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

          {/* Dropdown Options List */}
          <form
            className={`w-full rounded-lg absolute top-16 left-0 bg-white dropdown-shadow ${
              isCategoryDropdownOpen ? "block" : "hidden"
            }`}
          >
            {options.map((option, i) => {
              return (
                <Fragment key={option.id}>
                  <div
                    className={`relative px-5 py-3 text-sm text-grey-900 group ${
                      option.isActive ? "font-bold" : "font-normal"
                    }`}
                    onClick={() => handleCurrentFilterChange(option.id)}
                  >
                    <label
                      className="group-hover:text-[15px]"
                      htmlFor={option.value}
                    >
                      {option.label}
                    </label>
                    <input
                      className="absolute top-0 left-0 w-full h-full opacity-0 hover:cursor-pointer"
                      type="radio"
                      name="sort"
                      value={option.value}
                      id={option.value}
                    />
                  </div>
                  <div
                    key={i}
                    className="mx-5 h-[1px] bg-grey-100 last:hidden"
                  ></div>
                </Fragment>
              );
            })}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
