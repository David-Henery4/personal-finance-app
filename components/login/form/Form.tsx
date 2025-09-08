"use client";
import { Input, SubmitBtn } from "@/components/reused/form-components"
import { useActionState, startTransition, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import login from "@/libs/actions/login";
import { loginSchema, type LoginFormData } from "@/libs/validation/schemas";
import { useRouter } from "next/navigation";

interface FormState {
  success?: boolean;
  errors?: Record<string, string>;
  message?: string;
}

const Form = () => {
  const router = useRouter();
  const [state, formAction] = useActionState<FormState | null, FormData>(
    login,
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });
  
  useEffect(() => {
    if (state?.errors) {
      Object.entries(state.errors).forEach(([field, message]) => {
        setError(field as keyof LoginFormData, { message });
      });
    } else if (state?.success) {
      router.push("/");
      clearErrors();
    }
  }, [state, setError, clearErrors]);

  const onSubmit = (data: LoginFormData) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <form
      className="mt-8 flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="email"
        label="email"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        id="password"
        label="password"
        name="password"
        type="password"
        register={register}
        error={errors.password?.message}
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
      <SubmitBtn label="login" disabled={isSubmitting} />
    </form>
  );
}

export default Form