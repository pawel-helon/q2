import { useFormState, useFormStatus } from "react-dom";

import { signin } from "@/app/actions/auth/sign-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Actions } from "@/components/form/actions";
import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";

export const SignInForm = () => {
  const [state, action] = useFormState(signin, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-5">
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="Enter email address" />
      </FormField>
      {state?.errors?.email && (
        <FieldDescription>{state.errors.email}</FieldDescription>
      )}

      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="********"
        />
      </FormField>
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
      <Actions>
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Sign in"}
        </Button>
      </Actions>
    </form>
  );
};
