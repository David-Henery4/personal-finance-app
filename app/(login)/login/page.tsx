import LogoLarge from "@/public/assets/images/logo-large.svg";
import LoginModal from "@/components/login/LoginModal";

const page = () => {
  return (
    <main className="w-full min-h-svh bg-beige-100 grid grid-rows-login grid-cols-login">
      <div className="w-full px-10 py-6 bg-black grid place-items-center rounded-b-lg col-start-1 col-end-13">
        <LogoLarge />
      </div>

      <section className="grid place-items-center col-start-2 col-end-12">
        <LoginModal />
      </section>

    </main>
  );
};

export default page;
