"use server";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { loginSchema } from "@/libs/validation/schemas";
import { redirect } from "next/navigation";

interface FormState {
  success?: boolean;
  errors?: Record<string, string>;
  message?: string;
}

const login = async (
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> => {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validationResult = loginSchema.safeParse({
      email,
      password,
    });

    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.errors.forEach((error) => {
        const field = error.path[0] as string;
        errors[field] = error.message;
      });

      return {
        success: false,
        errors,
        message: "Please fix the errors below",
      };
    }

    const loginResponse = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    console.log("Login response:", loginResponse);
    // redirect("/");

    return {
      success: true,
      message: "Login successful!",
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

export default login; 