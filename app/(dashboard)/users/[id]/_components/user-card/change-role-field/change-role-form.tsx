"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ROLE } from "@prisma/client";

import { changeRole } from "@/app/actions/users/change-role";
import { ChangeRoleSchema, FormState } from "@/lib/schemas/change-role-schema";
import { Role } from "@/components/form/user/role";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { setOpen } from "@/types";

interface ChangeRoleForm {
  userId: number;
  setOpen: setOpen;
}

export const ChangeRoleForm = ({ userId, setOpen }: ChangeRoleForm) => {
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

    changeRole(userId, role);
    setTimeout(() => {
      setOpen(false);
      toast.success("Role has been updated.");
      router.refresh();
    }, 500);
  };

  const [state, action] = useFormState(onSubmit, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex flex-col gap-8">
      <input type="hidden" name="id" value={userId} />
      <Role>{state?.errors?.role && <>{state.errors.role}</>}</Role>
      <div className="w-full flex justify-end gap-2">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting" : "Change role"}
        </Button>
      </div>
    </form>
  );
};
