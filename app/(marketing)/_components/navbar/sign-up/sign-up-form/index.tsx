import { useFormState, useFormStatus } from "react-dom";

import { signup } from "@/app/actions/auth/sign-up";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Actions } from "@/components/form/actions";
import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";

export const SignUpForm = () => {
  const [state, action] = useFormState(signup, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-5">
      <FormField>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Enter full name" />
        {state?.errors?.name && (
          <FieldDescription>{state.errors.name}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="Enter email address" />
        {state?.errors?.email && (
          <FieldDescription>{state.errors.email}</FieldDescription>
        )}
      </FormField>
      <FormField className="mb-6">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="********"
        />
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
      <Actions>
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Sign up"}
        </Button>
      </Actions>
    </form>
  );
};
