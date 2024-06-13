"use client";

import { useFormState, useFormStatus } from "react-dom";

import { signup } from "@/lib/data/auth/sign-up";

import { Email } from "@/components/form/user/email";
import { Name } from "@/components/form/user/full-name";
import { Password } from "@/components/form/user/password";
import { SignInRedirect } from "@/components/form/user/sign-in-redirect";
import { Button } from "@/components/ui/button";
import { PasswordConfirmation } from "@/components/form/user/password-confirmation";

export function SignUpForm({ children }: { children?: React.ReactNode }) {
  const [state, action] = useFormState(signup, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-8">
      <Name>{state?.errors?.name && <>{state.errors.name}</>}</Name>
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
      <PasswordConfirmation>
        {state?.errors?.confirm && (
          <div>
            <p className="text-[0.8rem] text-muted-foreground font-semibold inline">
              Password must:
            </p>
            {state.errors.confirm.map((error, index) => (
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
      </PasswordConfirmation>
      <div className="hidden xs:flex">
        <SignInRedirect />
      </div>
      <div className="flex flex-col xs:flex-row gap-2 w-full xs:justify-end">
        {children}
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Sign up"}
        </Button>
      </div>
    </form>
  );
}
