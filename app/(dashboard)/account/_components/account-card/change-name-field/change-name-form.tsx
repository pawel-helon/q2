"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { ChangeNameSchema, FormState } from "@/lib/schemas/change-name-schema";
import { updateUser } from "@/app/actions/auth/change-name";

import { Name } from "@/components/form/user/full-name";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { setOpen } from "@/types";

interface ChangeNameFormProps {
  userId: number;
  setOpen: setOpen;
}

export const ChangeNameForm = ({ userId, setOpen }: ChangeNameFormProps) => {
  const [state, action] = useFormState(changeName, undefined);
  const { pending } = useFormStatus();
  const router = useRouter();

  async function changeName(state: FormState, formData: FormData) {
    const validatedField = ChangeNameSchema.safeParse({
      name: formData.get("name"),
    });

    if (!validatedField.success) {
      return {
        errors: validatedField.error.flatten().fieldErrors,
      };
    }

    const userId = Number(formData.get("userId"));
    const { name } = validatedField.data;

    updateUser(userId, name);

    setTimeout(() => {
      setOpen(false);
      toast.success("Name has been updated.");
      router.refresh();
    }, 500);
  }

  return (
    <form action={action} className="flex flex-col gap-8">
      <input type="hidden" name="userId" value={userId} />
      <Name>{state?.errors?.name && <>{state.errors.name}</>}</Name>
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
