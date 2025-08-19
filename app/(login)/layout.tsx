import public_sans from "@/fonts/publicSans";
import LogoLarge from "@/public/assets/images/logo-large.svg";
import SigninLoginImg from "@/components/global/login-signup/SigninLoginImg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${public_sans.variable} antialiased`}>
      <body className="font-public-sans">
        <main className="w-full min-h-svh bg-beige-100 grid grid-rows-login grid-cols-login">
          <div className="w-full px-10 py-6 bg-black grid place-items-center rounded-b-lg col-start-1 col-end-13">
            <LogoLarge />
          </div>

          <section className="col-start-2 col-end-12 flex justify-center items-center gap-10 py-5">
            <SigninLoginImg />

            <div className="w-full max-w-xl flex-3">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
