"use server";
import { auth } from "@/auth";
import {headers} from "next/headers";
import { signupSchema } from "@/libs/validation/schemas";
import {redirect} from "next/navigation";

interface FormState {
  success?: boolean;
  errors?: Record<string, string>;
  message?: string;
}

const signup = async (
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("create-password") as string;

    // Validate the form data
    const validationResult = signupSchema.safeParse({
      name,
      email,
      "create-password": password,
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

    // If validation passes, proceed with signup logic
    console.log("Validated data:", { name, email, password });
    
    const signupResponse = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    console.log("Signup response:", signupResponse);
    // redirect("/");

    // TODO: Add your actual signup logic here (e.g., create user in database)
    // For now, we'll simulate a successful signup
    return {
      success: true,
      message: "Account created successfully!",
    };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
};

export default signup;
