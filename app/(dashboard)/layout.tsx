import { auth } from "@/auth";
import { SignoutBtn } from "@/components/reused/btns";
import Sidebar from "@/components/global/dashboard/Sidebar";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    query: {
      disableCookieCache: true,
    },
    headers: await headers(),
  });

  const isValidSession = (session?: {
    expiresAt: Date;
    userId: string;
    token?: string | null;
  }) =>
    !!session && !!session.userId && new Date(session.expiresAt) > new Date();

  if (!isValidSession(session?.session)) {
    redirect("/login");
  }

  return (
    <main className="min-h-svh grid grid-rows-main-layout lg-laptop:grid-cols-dashboard-overview lg-laptop:grid-rows-[auto]">
      
      <section className="w-full py-6 grid grid-cols-dashboard-mobile sm-tablet:py-8 sm-tablet:grid-cols-dashboard-tablet lg-laptop:col-start-2 lg-laptop:col-end-3 lg-laptop:row-start-1 lg-laptop:row-end-2">
        {children}
      </section>

      <Sidebar />

      {/* <SignoutBtn /> */}
    </main>
  );
}
