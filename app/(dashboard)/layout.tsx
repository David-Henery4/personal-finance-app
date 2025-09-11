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
    <main className="text-amber-500 min-h-svh">
      
      {children}

      <Sidebar />

      {/* <SignoutBtn /> */}
    </main>
  );
}
