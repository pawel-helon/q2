"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import {
  DeleteAccountSchema,
  FormState,
} from "@/lib/schemas/delete-account-schema";

import { Checkbox } from "@/components/ui/checkbox";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { remove } from "@/lib/data/delete";

export function DeleteAccountForm({ userId }: { userId: number }) {
  const router = useRouter();

  function deleteAccount(state: FormState, formData: FormData) {
    const userId = Number(formData.get("userId"));

    const validatedFields = DeleteAccountSchema.safeParse({
      confirm: Boolean(formData.get("confirm")),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    remove(userId, "user").then((response) => {
      if (response === true) router.push("/");
    });
  }

  const [state, action] = useFormState(deleteAccount, undefined);
  const { pending } = useFormStatus();

  const [checked, setChecked] = useState(false);

  return (
    <form action={action}>
      <input type="hidden" name="userId" value={userId} />
      <div className="flex gap-2 mb-8 items-center">
        <Checkbox
          id="confirm"
          name="confirm"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
        />
        <label
          htmlFor="confirm"
          className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I understand
        </label>
        {state?.errors?.confirm && (
          <p className="text-[0.8rem] leading-none text-muted-foreground ml-2">
            ({state.errors.confirm})
          </p>
        )}
      </div>
      <DialogFooter className="mt-6">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Delete account"}
        </Button>
      </DialogFooter>
    </form>
  );
}
