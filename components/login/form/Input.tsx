
interface InputTypes {
  name: string,
  label: string,
  id: string
}

const Input = ({id, label, name}: InputTypes) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label
        className="text-grey-500 leading-[150%] tracking-[0px] text-xs font-bold capitalize"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="w-full px-5 py-3 rounded-lg border border-beige-500 outline"
        type="text"
        id={id}
        name={name}
      />
    </div>
  );
}

export default Input