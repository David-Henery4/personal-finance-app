"use client";
import ParaText from "../text/ParaText";
import { useState } from "react";
import { DropdownProps, FilterOption } from "@/types/dropdownTypes";
import {
  DropdownToggleBtns,
  DropdownOptionsList,
  DropdownUnderlay,
} from "./dropdown-comps";

const CategoryFilter = ({ optionsArray, type }: DropdownProps) => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [options, setOptions] = useState<FilterOption[]>(optionsArray);
  const [currentFilter, setCurrentFilter] = useState<FilterOption | undefined>(
    optionsArray.find((option) => option.isActive)
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

  return (
    <div className="flex justify-center items-center gap-2">
      <ParaText
        bold="N"
        size="sm"
        className="sr-only text-grey-500 tablet:not-sr-only"
      >
        {`${type === "SORT" ? "Sort" : "Category"}`}
      </ParaText>

      {/* Dropdown container */}
      <div className="relative">
        {/* Dropdown Currently Selected option */}
        <DropdownToggleBtns
          currentFilter={currentFilter}
          isCategoryDropdownOpen={isCategoryDropdownOpen}
          toggleDropdown={toggleDropdown}
          type={type}
        />

        {/* Dropdown Options List */}
        <DropdownOptionsList
          handleCurrentFilterChange={handleCurrentFilterChange}
          isCategoryDropdownOpen={isCategoryDropdownOpen}
          options={options}
          type={type}
        />
      </div>

      {isCategoryDropdownOpen ? (
        <DropdownUnderlay toggleDropdown={toggleDropdown} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CategoryFilter;
