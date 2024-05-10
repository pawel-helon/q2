"use client";

import { useFormState, useFormStatus } from "react-dom";

import { changePassword } from "@/app/actions/auth/change-password";
import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@/components/ui/dialog";
import { PasswordInput } from "@/components/form/password-input";

interface ChangePasswordFormProps {
  userId: number;
  handleClick: () => void;
}

export const ChangePasswordForm = ({ userId, handleClick }: ChangePasswordFormProps) => {
  const [state, action] = useFormState(changePassword, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-5">
      <input type="hidden" name="userId" value={userId} />
      <div className="flex flex-col">
        <FormField className="mb-6">
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
      </div>
      <div className="flex gap-2 w-full justify-end">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button
          type="submit"
          onClick={handleClick}
          disabled={pending}
          aria-disabled={pending}
        >
          {pending ? "Submitting..." : "Change"}
        </Button>
      </div>
    </form>
  );
};
