"use client";

import { useFormState, useFormStatus } from "react-dom";
import bcrypt from "bcryptjs";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { ChangePasswordSchema, FormState } from "@/lib/schemas/change-password-schema";
import { updateUser } from "@/app/actions/auth/change-password";

import { PasswordInput } from "@/components/form/password-input";
import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@/components/ui/dialog";

interface ChangePasswordFormProps {
  userId: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ChangePasswordForm = ({ userId, setOpen }: ChangePasswordFormProps) => {
  const [state, action] = useFormState(changePassword, undefined);
  const { pending } = useFormStatus();
  const router = useRouter();

  async function changePassword(state: FormState, formData: FormData) {
  const userId = Number(formData.get("userId"))

  const validatedField = ChangePasswordSchema.safeParse({
    password: formData.get("password"),
    confirm: formData.get("confirm"),
  });


  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
    };
  }

  const { password } = validatedField.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  updateUser(userId, hashedPassword);
  
  setTimeout(() => {
    setOpen(false);
    toast.success("Password has been updated.");
    router.refresh();
  }, 500);
}

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
          disabled={pending}
          aria-disabled={pending}
        >
          {pending ? "Submitting..." : "Change"}
        </Button>
      </div>
    </form>
  );
};
