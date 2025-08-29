"use client";

import { Input, SubmitBtn } from "@/components/reused/form-components"
import { useStackApp } from "@stackframe/stack";

const Form = () => {
  const app = useStackApp();

  return (
    <form className="mt-8 flex flex-col gap-4">
      <Input id="name" label="name" name="name" />
      <Input id="email" label="email" name="email" />
      <Input
        id="create-password"
        label="create password"
        name="create-password"
        type="password"
      />
      <SubmitBtn label="create account" />
    </form>
  );
}

export default Form