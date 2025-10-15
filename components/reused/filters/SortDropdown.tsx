import SortIconMobile from "public/assets/images/icon-sort-mobile.svg";

const SortDropdown = () => {
  return (
    <div className="hover:cursor-pointer">
      <span>
        <SortIconMobile />
      </span>
      <input type="radio" name="sort" id="" />
      <input type="radio" name="sort" id="" />
      <input type="radio" name="sort" id="" />
    </div>
  );
};

export default SortDropdown;
