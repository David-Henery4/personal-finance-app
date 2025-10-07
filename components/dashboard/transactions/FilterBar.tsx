import { TextSearch, CategoryFilter, SortDropdown } from "@/components/reused/filters"

const FilterBar = () => {
  return (
    <div className="flex justify-between items-center gap-6">
      <TextSearch/>
      <SortDropdown/>
      <CategoryFilter/>
    </div>
  )
}

export default FilterBar