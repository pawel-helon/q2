"use client";

import { useFormState, useFormStatus } from "react-dom";

import { changeEmail } from "@/app/actions/auth/change-email";
import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@/components/ui/dialog";

interface ChangeNameFormProps {
  userId: number;
  handleClick: () => void;
}

export const ChangeEmailForm = ({
  userId,
  handleClick,
}: ChangeNameFormProps) => {
  const [state, action] = useFormState(changeEmail, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-5">
      <input type="hidden" name="userId" value={userId} />
      <FormField className="mb-6">
        <Label htmlFor="email">Full Name</Label>
        <Input
            id="email"
            name="email"
            placeholder="Enter new name"
            spellCheck="false"    
        />
        {state?.errors?.email && (
          <FieldDescription>{state.errors.email}</FieldDescription>
        )}
      </FormField>
      <div className="flex gap-2 w-full justify-end">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button
          type="submit"
          onClick={handleClick}
          aria-disabled={pending}
          disabled={pending}
        >
          {pending ? "Submitting..." : "Change"}
        </Button>
      </div>
    </form>
  );
};
