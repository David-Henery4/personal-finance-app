import ParaText from "../text/ParaText";
import ShowPasswordIcon from "@/public/assets/images/icon-show-password.svg";
import HidePasswordIcon from "@/public/assets/images/icon-hide-password.svg";
import { forwardRef } from "react";

interface InputTypes {
  name: string;
  label: string;
  id: string;
  type?: "password" | "text" | "email";
  error?: string;
  register?: any;
  validation?: any;
}

const Input = forwardRef<HTMLInputElement, InputTypes>(
  (
    { id, label, name, type = "text", error, register, validation, ...props },
    ref
  ) => {
    const inputProps = register
      ? register(name, validation)
      : { ref, name, ...props };

    return (
      <div className="w-full flex flex-col gap-1">
        <label
          className="text-grey-500 leading-[150%] tracking-[0px] text-xs font-bold capitalize"
          htmlFor={id}
        >
          {label}
        </label>
        <div
          className={`w-full rounded-lg border flex justify-center items-center gap-2 ${
            error ? "border-red-500" : "border-beige-500"
          }`}
        >
          <input
            className="w-full px-5 py-3 outline-none"
            type={type}
            id={id}
            {...inputProps}
          />
          {type === "password" && (
            <div className="px-5 py-3 hover:cursor-pointer">
              <ShowPasswordIcon />
            </div>
          )}
        </div>
        {error && (
          <ParaText bold="N" size="xs" className="text-red-500">
            {error}
          </ParaText>
        )}
        {name === "create-password" && !error && (
          <div className="text-right">
            <ParaText bold="N" size="xs" className="text-grey-500">
              Passwords must be at least 8 characters
            </ParaText>
          </div>
        )}
      </div>
    );
  }
);

export default Input;
