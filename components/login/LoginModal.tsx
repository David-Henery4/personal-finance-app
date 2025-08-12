import Heading from "../reused/text/Heading"
import { Input, SubmitBtn } from "./form"

const LoginModal = () => {
  return (
    <div className="w-full max-w-xl bg-white rounded-xl px-5 py-6">

      <Heading headingType="primary" >
        Login
      </Heading>

      <form className="mt-8 flex flex-col gap-4">
        <Input id="email" label="email" name="email" />
        <Input id="password" label="password" name="password" />
        <SubmitBtn/>
      </form>

    </div>
  )
}

export default LoginModal