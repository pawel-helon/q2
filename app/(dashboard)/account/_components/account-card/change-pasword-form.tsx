"use client";

import { useFormState, useFormStatus } from "react-dom";

import { changePassword } from "@/app/actions/auth/change-password";
import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@/components/ui/dialog";

interface ChangePasswordFormProps {
  userId: number;
}

export const ChangePasswordForm = ({ userId }: ChangePasswordFormProps) => {
  const [state, action] = useFormState(changePassword, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-5">
      <input type="hidden" name="userId" value={userId} />
      <FormField className="mb-6">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" placeholder="*******" />
        {state?.errors?.password && (
          <FieldDescription>{state.errors.password}</FieldDescription>
        )}
      </FormField>
      <div className="flex gap-2 w-full justify-end">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button disabled={pending} aria-disabled={pending} type="submit">
            {pending ? "Submitting..." : "Change"}
          </Button>
        </DialogClose>
      </div>
    </form>
  );
};
