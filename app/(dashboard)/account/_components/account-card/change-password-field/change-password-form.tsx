"use client";

import bcrypt from "bcryptjs";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { updateUser } from "@/app/actions/auth/change-password";
import {
  ChangePasswordSchema,
  FormState,
} from "@/lib/schemas/change-password-schema";

import { Password } from "@/components/form/user/password";
import { PasswordConfirmation } from "@/components/form/user/password-confirmation";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { setOpen } from "@/types";

interface ChangePasswordFormProps {
  userId: number;
  setOpen: setOpen;
}

export const ChangePasswordForm = ({
  userId,
  setOpen,
}: ChangePasswordFormProps) => {
  const [state, action] = useFormState(changePassword, undefined);
  const { pending } = useFormStatus();
  const router = useRouter();

  async function changePassword(state: FormState, formData: FormData) {
    const validatedField = ChangePasswordSchema.safeParse({
      password: formData.get("password"),
      confirm: formData.get("confirm"),
    });

    if (!validatedField.success) {
      return {
        errors: validatedField.error.flatten().fieldErrors,
      };
    }

    const userId = Number(formData.get("userId"));
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
    <form action={action} className="flex flex-col gap-8">
      <input type="hidden" name="userId" value={userId} />
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
      <PasswordConfirmation>
        {state?.errors?.confirm && (
          <div>
            <p className="text-[0.8rem] text-muted-foreground font-semibold inline">
              Password must:
            </p>
            {state.errors.confirm.map((error, index) => (
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
      </PasswordConfirmation>
      <div className="flex gap-2 w-full justify-end">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button type="submit" disabled={pending} aria-disabled={pending}>
          {pending ? "Submitting..." : "Change"}
        </Button>
      </div>
    </form>
  );
};
