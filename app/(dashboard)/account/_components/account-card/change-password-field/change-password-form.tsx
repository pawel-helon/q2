"use client";

import bcrypt from "bcryptjs";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { update } from "@/lib/data/update";

import {
  ChangePasswordSchema,
  FormState,
} from "@/lib/schemas/change-password-schema";

import { Password } from "@/components/form/user/password";
import { PasswordConfirmation } from "@/components/form/user/password-confirmation";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

import { setOpen } from "@/types";

export function ChangePasswordForm({
  userId,
  setOpen,
}: {
  userId: number;
  setOpen: setOpen;
}) {
  const [state, action] = useFormState(onSubmit, undefined);
  const { pending } = useFormStatus();
  const router = useRouter();

  async function onSubmit(state: FormState, formData: FormData) {
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

    update(userId, "user", "password", hashedPassword).then(() => {
      setTimeout(() => {
        setOpen(false);
        toast.success("Password has been updated.");
      }, 500);
      router.refresh();
    });
  }

  return (
    <form action={action} className="flex flex-col gap-8">
      <input type="hidden" name="userId" value={userId} />
      <Password>
        {state?.errors?.password && (
          <div>
            <p className="text-[0.8rem] text-muted-foreground font-semibold inline">Password must:</p>
            {state.errors.password.map((error, index) => (
              <p key={error} className="inline text-[0.8rem] leading-none text-muted-foreground">
                {index === 0 ? " " : ", "}{error}
              </p>
            ))}
          </div>
        )}
      </Password>
      <PasswordConfirmation>
        {state?.errors?.confirm && (
          <div>
            <p className="text-[0.8rem] text-muted-foreground font-semibold inline">Password must:</p>
            {state.errors.confirm.map((error, index) => (
              <p key={error} className="inline text-[0.8rem] leading-none text-muted-foreground">
                {index === 0 ? " " : ", "}{error}
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
}
