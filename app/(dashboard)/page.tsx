"use client";
import { authClient } from "@/libs/auth/auth-client";
import { useRouter } from "next/navigation";

export default function Page() {

  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <main className="text-amber-500">
      Hello, Next.js!
      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 hover:cursor-pointer" onClick={handleLogout}>Logout</button>
    </main>
  );
}
