"use client";

import { useFormState, useFormStatus } from "react-dom";

import { changeName } from "@/app/actions/auth/change-name";

import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@/components/ui/dialog";

interface ChangeNameFormProps {
  userId: number;
}

export const ChangeNameForm = ({ userId }: ChangeNameFormProps) => {
  const [state, action] = useFormState(changeName, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-5">
      <input type="hidden" name="userId" value={userId} />
      <FormField className="mb-6">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="Enter new name" />
        {state?.errors?.name && (
          <FieldDescription>{state.errors.name}</FieldDescription>
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
