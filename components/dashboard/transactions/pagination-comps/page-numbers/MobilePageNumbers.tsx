import tempPageNumbers from "@/local-data/placeholder-data/tempPageNumbers";

const MobilePageNumbers = () => {
  return (
    <li className="flex justify-center items-center gap-3">
      {/* Mobile Numbers */}
      {tempPageNumbers.map((page) => {
        return (
          <button
            key={page.id}
            className="w-10 h-10 grid place-items-center rounded-lg border border-beige-500 hover:cursor-pointer"
          >
            {page.pageNumber}
          </button>
        );
      })}
    </li>
  );
};

export default MobilePageNumbers;
