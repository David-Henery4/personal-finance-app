export type FilterOption = {
  id: number;
  label: string;
  value: string;
  isActive: boolean;
};

type DropdownType = "FILTER" | "SORT";

export type DropdownProps = {
  optionsArray: FilterOption[];
  type: DropdownType; // e.g. "FILTER" | "SORT"
};

export interface DropdownToggleBtnsProps {
  toggleDropdown: () => void;
  currentFilter: FilterOption | undefined;
  isCategoryDropdownOpen: boolean;
  type: DropdownType;
}

export interface DropdownOptionsListProps {
  isCategoryDropdownOpen: boolean;
  options: FilterOption[];
  type: DropdownType;
  handleCurrentFilterChange: (id: number) => void;
}

export interface DropdownUnderlayProps {
  toggleDropdown: () => void;
}




