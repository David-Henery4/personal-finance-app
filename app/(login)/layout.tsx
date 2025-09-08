import LogoLarge from "@/public/assets/images/logo-large.svg";
import SigninLoginImg from "@/components/global/login-signup/SigninLoginImg";

export default function SignupLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full max-w-[1440px] mx-auto min-h-svh grid grid-rows-login grid-cols-login desktop-md:grid-cols-login-desktop">
      <div className="w-full px-10 py-6 bg-black grid place-items-center rounded-b-lg col-start-1 col-end-13 laptop:hidden">
        <LogoLarge />
      </div>

      <section className="col-start-2 col-end-12 flex justify-center items-center gap-5 py-5">
        <SigninLoginImg />

        <div className="w-full flex-3">{children}</div>
      </section>
    </main>
  );
}
