"use client";
import React, { startTransition } from "react";
import { Input, SubmitBtn } from "@/components/reused/form-components";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signup from "@/libs/actions/signup";
import { signupSchema, type SignupFormData } from "@/libs/validation/schemas";
import { useRouter } from "next/navigation";

interface FormState {
  success?: boolean;
  errors?: Record<string, string>;
  message?: string;
}

const Form = () => {
  const router = useRouter();
  const [state, formAction] = useActionState<FormState | null, FormData>(
    signup,
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  // Update form errors when server state changes
  React.useEffect(() => {
    if (state?.errors) {
      Object.entries(state.errors).forEach(([field, message]) => {
        setError(field as keyof SignupFormData, { message });
      });
    } else if (state?.success) {
      router.push("/");
      clearErrors();
    }
  }, [state, setError, clearErrors]);

  const onSubmit = (data: SignupFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("create-password", data["create-password"]);

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <form
      // action={formAction}
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 flex flex-col gap-4"
    >
      <Input
        id="name"
        label="name"
        name="name"
        type="text"
        register={register}
        error={errors.name?.message}
      />
      <Input
        id="email"
        label="email"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        id="create-password"
        label="create password"
        name="create-password"
        type="password"
        register={register}
        error={errors["create-password"]?.message}
      />
      {state?.message && (
        <div
          className={`text-sm ${
            state.success ? "text-green-600" : "text-red-500"
          }`}
        >
          {state.message}
        </div>
      )}
      <SubmitBtn label="create account" disabled={isSubmitting} />
    </form>
  );
};

export default Form;
