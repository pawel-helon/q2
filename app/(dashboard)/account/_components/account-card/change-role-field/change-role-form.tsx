"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { createNotificationByEndUser } from "@/lib/data/create";

import { useFormState, useFormStatus } from "react-dom";
import { ChangeRoleSchema, FormState } from "@/lib/schemas/change-role-schema";

import { Role } from "@/components/form/user/role";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

import { setOpen } from "@/types";
import { ROLE } from "@prisma/client";

export function ChangeRoleForm({
  userId,
  setOpen,
}: {
  userId: number;
  setOpen: setOpen;
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
    const userId = Number(formData.get("id"));
    const role = validatedFields.data.role as ROLE;
    
    createNotificationByEndUser(role, userId).then(() => {
      setTimeout(() => {
        setOpen(false);
        toast.success("Request has been submitted.");
      }, 500);
      router.refresh();
    });
  };
  const [state, action] = useFormState(onSubmit, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action}>
      <input type="hidden" name="id" value={userId} />
      <div className="flex flex-col gap-2">
        <Role side="top">{state?.errors?.role && <>{state.errors.role}</>}</Role>
      </div>
      <div className="w-full flex flex-col xs:flex-row justify-end gap-2 mt-6">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button type="submit">Submit request</Button>
      </div>
    </form>
  );
}
