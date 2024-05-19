"use client";

import { useFormState, useFormStatus } from "react-dom";

import { signup } from "@/app/actions/auth/sign-up";

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
                className="inline text-[0.8rem] leading-none text-muted-foreground"
                key={error}
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
                className="inline text-[0.8rem] leading-none text-muted-foreground"
                key={error}
              >
                {index === 0 ? " " : ", "}
                {error}
              </p>
            ))}
          </div>
        )}
      </PasswordConfirmation>
      <SignInRedirect />
      <div className="flex gap-2 w-full justify-end">
        {children}
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Sign up"}
        </Button>
      </div>
    </form>
  );
}
