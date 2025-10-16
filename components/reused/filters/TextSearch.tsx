import SearchIcon from "public/assets/images/icon-search.svg"

const TextSearch = () => {
  return (
    <div className="relative w-full max-w-80 rounded-lg border border-beige-500 flex justify-center items-stretch gap-4">
      <div className="w-full relative text-sm text-beige-500">
        <label className="absolute top-3 left-5 sr-only" htmlFor="transaction-search">
          Search Transaction 
        </label>
        <input
          id="transaction-search"
          name="transaction-search"
          placeholder="Search Transaction"
          type="text"
          className="w-full pl-5 py-3 outline-none"
        />
      </div>
      <div className="py-3 pl-4 pr-5 grid place-items-center hover:cursor-pointer">
        <SearchIcon />
      </div>
    </div>
  );
};

export default TextSearch;
