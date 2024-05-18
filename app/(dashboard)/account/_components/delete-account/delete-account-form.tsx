import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { deleteAccount } from "@/app/api/neon/delete-account";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteAccountFormProps {
  userId: number;
}

export const DeleteAccountForm = ({ userId }: DeleteAccountFormProps) => {
  const [state, action] = useFormState(deleteAccount, undefined);
  const { pending } = useFormStatus();

  const [checked, setChecked] = useState(false);

  return (
    <form action={action}>
      <input type="hidden" name="userId" value={userId} />
      <div className="flex gap-2 my-8">
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
          I am sure
        </label>
        {state?.errors?.confirm && <>{state.errors.confirm}</>}
      </div>
      <DialogFooter className="mt-6">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Submit"}
        </Button>
      </DialogFooter>
    </form>
  );
};
