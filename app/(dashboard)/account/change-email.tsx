"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";
import { useFormState, useFormStatus } from "react-dom";
import { changeEmail } from "@/app/actions/change-email";
import { DialogClose } from "@/components/ui/dialog";

interface ChangeEmailProps {
  userId: number;
}

export const ChangeEmail = ({ userId }: ChangeEmailProps) => {
  const [state, action] = useFormState(changeEmail, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-5">
      <input type="hidden" name="userId" value={userId} />
      <FormField className="mb-6">
        <Label htmlFor="email">New email address</Label>
        <Input id="email" name="email" placeholder="Enter new email address" />
        {state?.errors?.email && (
          <FieldDescription>{state.errors.email}</FieldDescription>
        )}
      </FormField>
      <div className="flex gap-4 w-full justify-end">
        <DialogClose>Cancel</DialogClose>
        <DialogClose asChild>
          <Button
            disabled={pending}
            aria-disabled={pending}
            type="submit"
            onSubmit={() => console.log("clicked")}
          >
            {pending ? "Submitting..." : "Change"}
          </Button>
        </DialogClose>
      </div>
    </form>
  );
};
