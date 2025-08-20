import Heading from "../reused/text/Heading";
import ParaText from "../reused/text/ParaText";
import Form from "./form/Form";

const ModalSignup = () => {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white rounded-xl px-5 py-6">
      <Heading headingType="primary">Sign Up</Heading>

      <Form />

      <div className="mt-8 w-full flex justify-center items-center gap-2">
        <ParaText bold="N" size="sm" className="text-grey-500">
          Already have an account?
        </ParaText>
        <a
          href="/login"
          className="text-sm font-bold text-grey-900 leading-[150%] tracking-[0px] underline"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default ModalSignup;
