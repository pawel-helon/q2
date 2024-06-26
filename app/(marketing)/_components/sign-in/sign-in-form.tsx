"use client";

import { useFormState, useFormStatus } from "react-dom";

import { SignInFormSchema, FormState } from "@/lib/schemas/sign-in";

import { Email } from "@/components/form/user/email";
import { Password } from "@/components/form/user/password";
import { SignUpRedirect } from "@/components/form/user/sign-up-redirect";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signin } from "@/lib/data/auth/sign-in";

export function SignInForm({ children }: { children?: React.ReactNode }) {
  function onSubmit(state: FormState, formData: FormData) {
    const validatedFields = SignInFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { email, password } = validatedFields.data;

    signin(email, password).then((response) => {
      if (response === false) {
        setTimeout(() => {
          toast.error("Invalid email or password. Please try again.");
        }, 500);
      }
    });
  }

  const [state, action] = useFormState(onSubmit, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-5">
      <Email>{state?.errors?.email && <>{state.errors.email}</>}</Email>
      <Password>
        {state?.errors?.password && (
          <div>
            <p className="text-[0.8rem] text-muted-foreground font-semibold inline">
              Password must:
            </p>
            {state.errors.password.map((error, index) => (
              <p
                key={error}
                className="inline text-[0.8rem] leading-none text-muted-foreground"
              >
                {index === 0 ? " " : ", "}
                {error}
              </p>
            ))}
          </div>
        )}
      </Password>
      <div className="hidden xs:flex">
        <SignUpRedirect />
      </div>
      <div className="flex flex-col xs:flex-row gap-2 w-full xs:justify-end">
        {children}
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
}
