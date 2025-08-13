import { Input, SubmitBtn } from "@/components/reused/form-components"

const Form = () => {
  return (
    <form className="mt-8 flex flex-col gap-4">
      <Input id="email" label="email" name="email" />
      <Input id="password" label="password" name="password" type="password" />
      <SubmitBtn label="login" />
    </form>
  );
}

export default Form