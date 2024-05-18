import { useFormState, useFormStatus } from "react-dom";

import { signin } from "@/app/actions/auth/sign-in";

import { Email } from "@/components/form/user/email";
import { Password } from "@/components/form/user/password";
import { SignUpRedirect } from "@/components/form/user/sign-up-redirect";
import { Button } from "@/components/ui/button";

interface SignInFormProps {
  children?: React.ReactNode;
}

export function SignInForm({ children }: SignInFormProps) {
  const [state, action] = useFormState(signin, undefined);
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
      <SignUpRedirect />
      <div className="flex gap-2 w-full justify-end">
        {children}
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
}
