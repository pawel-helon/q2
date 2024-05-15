import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

import { signup } from "@/app/actions/auth/sign-up";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";
import { PasswordInput } from "@/components/form/password-input";

interface SignUpFormProps {
  children?: React.ReactNode;
}

export const SignUpForm = ({ children }: SignUpFormProps) => {
  const [state, action] = useFormState(signup, undefined);
  const { pending } = useFormStatus();

  const router = useRouter();

  return (
    <form action={action} className="flex flex-col gap-5">
      <FormField>
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" placeholder="Enter full name" spellCheck="false" />
        {state?.errors?.name && (
          <FieldDescription>{state.errors.name}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="Enter email address" spellCheck="false" />
        {state?.errors?.email && (
          <FieldDescription>{state.errors.email}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <PasswordInput id="password" name="password" />
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
        <Label htmlFor="confirm">Confirm password</Label>
        <PasswordInput id="confirm" name="confirm" />
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
      <div className="flex items-center -my-5">
        <FieldDescription>Already have an account?</FieldDescription>
        <Button
          variant="link"
          className="-ml-2"
          onClick={() => router.push("/sign-in")}
        >
          Sign in
        </Button>
      </div>
      <div className="flex gap-2 w-full justify-end">
        {children}
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Sign up"}
        </Button>
      </div>
    </form>
  );
};
