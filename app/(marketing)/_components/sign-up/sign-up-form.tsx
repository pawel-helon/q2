import { useFormState, useFormStatus } from "react-dom";

import { signup } from "@/app/actions/auth/sign-up";

import { Email } from "@/components/form/user/email";
import { Name } from "@/components/form/user/full-name";
import { Password } from "@/components/form/user/password";
import { SignInRedirect } from "@/components/form/user/sign-in-redirect";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";
import { PasswordConfirmation } from "@/components/form/user/password-confirmation";

interface SignUpFormProps {
  children?: React.ReactNode;
}

export const SignUpForm = ({ children }: SignUpFormProps) => {
  const [state, action] = useFormState(signup, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-5">
      <FormField>
        <Name />
        {state?.errors?.name && (
          <FieldDescription>{state.errors.name}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Email />
        {state?.errors?.email && (
          <FieldDescription>{state.errors.email}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Password />
        {state?.errors?.password && (
          <div>
            <FieldDescription className="text-foreground">
              Password must:
            </FieldDescription>
            {state.errors.password.map((error) => (
              <FieldDescription key={error}>{error}</FieldDescription>
            ))}
          </div>
        )}
      </FormField>
      <FormField className="mb-6">
        <PasswordConfirmation />
        {state?.errors?.confirm && (
          <div>
            <FieldDescription className="text-foreground">
              Password must:
            </FieldDescription>
            {state.errors.confirm.map((error) => (
              <FieldDescription key={error}>{error}</FieldDescription>
            ))}
          </div>
        )}
      </FormField>
      <SignInRedirect />
      <div className="flex gap-2 w-full justify-end">
        {children}
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Sign up"}
        </Button>
      </div>
    </form>
  );
};
