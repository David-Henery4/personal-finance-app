import Image from "next/image";
import Heading from "../../reused/text/Heading";
import ParaText from "../../reused/text/ParaText";
import LargeLogo from "@/public/assets/images/logo-large.svg";

const SigninLoginImg = () => {
  return (
    <div className="hidden w-full max-w-[560px] h-[860px] p-10 flex-2 relative rounded-xl overflow-hidden justify-between items-start flex-col laptop:flex desktop-sm:h-[960px]">
      <div className="absolute top-0 left-0 h-full w-full">
        <Image
          src="/assets/images/illustration-authentication.svg"
          width={560}
          height={920}
          alt="Animation of a person chasing a money note"
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10">
        <LargeLogo/>
      </div>

      <div className="relative max-w-[420px]">
        <Heading headingType="primary" className="text-white">
          Keep track of your money and save for your future
        </Heading>
        <ParaText bold="N" size="sm" className="text-white mt-6">
          Personal finance app puts you in control of your spending. Track
          transactions, set budgets, and add to savings pots easily.
        </ParaText>
      </div>
    </div>
  );
};

export default SigninLoginImg;
