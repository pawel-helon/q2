import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

import { signin } from "@/app/actions/auth/sign-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";

interface SignInFormProps {
  children?: React.ReactNode;
}

export const SignInForm = ({ children }: SignInFormProps) => {
  const [state, action] = useFormState(signin, undefined);
  const { pending } = useFormStatus();

  const router = useRouter();

  return (
    <form action={action} className="flex flex-col gap-5">
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="Enter email address" />
      </FormField>
      {state?.errors?.email && (
        <FieldDescription>{state.errors.email}</FieldDescription>
      )}

      <FormField className="mb-6">
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
      <div className="flex items-center -my-5">
        <FieldDescription>Don&apos;t have account?</FieldDescription>
        <Button
          variant="link"
          className="-ml-2"
          onClick={() => router.push("/sign-up")}
        >
          Sign up
        </Button>
      </div>
      <div className="flex gap-2 w-full justify-end">
        {children}
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
};
