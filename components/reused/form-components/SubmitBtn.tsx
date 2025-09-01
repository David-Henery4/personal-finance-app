interface ButtonTypes {
  label: "create account" | "login";
  disabled?: boolean;
}

const SubmitBtn = ({ label, disabled = false }: ButtonTypes) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`mt-4 w-full p-4 rounded-lg text-white text-sm leading-[150%] tracking-[0px] font-bold capitalize transition-colors ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-black hover:bg-black/85 hover:cursor-pointer"
      }`}
    >
      {disabled ? "Processing..." : label}
    </button>
  );
};

export default SubmitBtn;
