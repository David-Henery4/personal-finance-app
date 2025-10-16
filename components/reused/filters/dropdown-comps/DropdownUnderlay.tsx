import { DropdownUnderlayProps } from "@/types/dropdownTypes";

const DropdownUnderlay = ({ toggleDropdown }: DropdownUnderlayProps) => {
  return (
    <div
      onClick={toggleDropdown}
      className="fixed z-10 w-full min-h-svh opacity-0 top-0 left-0"
    ></div>
  );
};

export default DropdownUnderlay;
