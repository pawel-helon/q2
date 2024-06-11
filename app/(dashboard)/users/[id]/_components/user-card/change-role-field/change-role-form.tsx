"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { update } from "@/lib/data/update";
import { ChangeRoleSchema, FormState } from "@/lib/schemas/change-role-schema";

import { Role } from "@/components/form/user/role";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { ROLE } from "@prisma/client";
import { setOpen } from "@/types";

export function ChangeRoleForm({
  userId,
  side,
  setOpenDialog,
  setOpenSheet,
}: {
  userId: number;
  side?: "top" | "right" | "bottom" | "left",
  setOpenDialog: setOpen;
  setOpenSheet: setOpen;
}) {
  const router = useRouter();

  const onSubmit = (state: FormState, formData: FormData) => {
    const validatedFields = ChangeRoleSchema.safeParse({
      role: formData.get("role"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const role = formData.get("role") as ROLE;

    update(userId, "user", "role", role).then(() => {
      setTimeout(() => {
        setOpenSheet(false);
        setOpenDialog(false);
        toast.success("Role has been updated.");
      }, 500);
      router.refresh();
    });
  };

  const [state, action] = useFormState(onSubmit, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-8">
      <input type="hidden" name="id" value={userId} />
      <Role side={side}>{state?.errors?.role && <>{state.errors.role}</>}</Role>
      <div className="flex flex-col xs:flex-row gap-2 w-full xs:justify-end">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting" : "Change role"}
        </Button>
      </div>
    </form>
  );
}
