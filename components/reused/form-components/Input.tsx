import ParaText from "../text/ParaText";
import ShowPasswordIcon from "@/public/assets/images/icon-show-password.svg";
import HidePasswordIcon from "@/public/assets/images/icon-hide-password.svg";

interface InputTypes {
  name: string;
  label: string;
  id: string;
  type?: "password";
}

const Input = ({ id, label, name, type }: InputTypes) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label
        className="text-grey-500 leading-[150%] tracking-[0px] text-xs font-bold capitalize"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="w-full rounded-lg border border-beige-500 flex justify-center items-center gap-2">
        <input
          className="w-full px-5 py-3 outline-none"
          type="text"
          id={id}
          name={name}
        />
        {type && (
          <div className="px-5 py-3 hover:cursor-pointer">
            <ShowPasswordIcon />
          </div>
        )}
      </div>
      {name === "create-password" && (
        <div className="text-right">
          <ParaText bold="N" size="xs" className="text-grey-500">
            Passwords must be at least 8 characters
          </ParaText>
        </div>
      )}
    </div>
  );
};

export default Input;
