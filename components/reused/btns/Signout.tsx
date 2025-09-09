"use client";
import { authClient } from "@/libs/auth/auth-client";
import { useRouter } from "next/navigation";

const SignoutBtn = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 hover:cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default SignoutBtn;
