interface ButtonTypes {
  label: "create account" | "login";
}

const SubmitBtn = ({ label }: ButtonTypes) => {
  return (
    <button className="mt-4 w-full p-4 bg-black rounded-lg text-white text-sm leading-[150%] tracking-[0px] font-bold capitalize hover:bg-black/85 hover:cursor-pointer">
      {label}
    </button>
  );
};

export default SubmitBtn;
