"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { update } from "@/lib/data/update";
import { ChangeNameSchema, FormState } from "@/lib/schemas/change-name-schema";

import { Name } from "@/components/form/user/full-name";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { setOpen } from "@/types";

export function ChangeNameForm({
  userId,
  setOpenDialog,
  setOpenSheet,
}: {
  userId: number;
  setOpenDialog: setOpen;
  setOpenSheet: setOpen
}) {
  const [state, action] = useFormState(onSubmit, undefined);
  const { pending } = useFormStatus();
  const router = useRouter();

  async function onSubmit(state: FormState, formData: FormData) {
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

    update(userId, "user", "name", name).then(() => {
      setTimeout(() => {
        setOpenSheet(false);
        setOpenDialog(false);
        toast.success("Name has been updated.");
      }, 500);
      router.refresh();
    });
  }

  return (
    <form action={action} className="flex flex-col gap-8 mt-6 xs:mt-0">
      <input type="hidden" name="userId" value={userId} />
      <Name>{state?.errors?.name && <>{state.errors.name}</>}</Name>
      <div className="flex flex-col xs:flex-row gap-2 w-full xs:justify-end">
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
