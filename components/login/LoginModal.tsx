import Heading from "../reused/text/Heading"
import ParaText from "../reused/text/ParaText";
import Form from "./form/Form";

const LoginModal = () => {
  return (
    <div className="w-full bg-white rounded-xl px-5 py-6">

      <Heading headingType="primary">Login</Heading>

      <Form/>

      <div className="mt-8 w-full flex justify-center items-center gap-2">
        <ParaText bold="N" size="sm" className="text-grey-500">
          Need to create an account?
        </ParaText>
        <a href="/signup" className="text-sm font-bold text-grey-900 leading-[150%] tracking-[0px] underline">
          Sign Up
        </a>
      </div>

    </div>
  );
}

export default LoginModal