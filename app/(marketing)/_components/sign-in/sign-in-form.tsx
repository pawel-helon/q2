import { useFormState, useFormStatus } from "react-dom";

import { signin } from "@/app/actions/auth/sign-in";

import { Email } from "@/components/form/user/email";
import { Password } from "@/components/form/user/password";
import { SignUpRedirect } from "@/components/form/user/sign-up-redirect";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";

interface SignInFormProps {
  children?: React.ReactNode;
}

export function SignInForm({ children }: SignInFormProps) {
  const [state, action] = useFormState(signin, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-5">
      <FormField>
        <Email />
      </FormField>
      {state?.errors?.email && (
        <FieldDescription>{state.errors.email}</FieldDescription>
      )}

      <FormField className="mb-6">
        <Password />
        {state?.errors?.password && (
          <div>
            <FieldDescription className="text-foreground">
              Password must:
            </FieldDescription>
            <FieldDescription>
              {state.errors.password.map((error) => (
                <FieldDescription key={error}>{error}</FieldDescription>
              ))}
            </FieldDescription>
          </div>
        )}
      </FormField>
      <SignUpRedirect />
      <div className="flex gap-2 w-full justify-end">
        {children}
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
};
