"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { changeRoles } from "@/app/api/neon/change-role";

import { Role } from "@/components/form/user/role";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { useFormState, useFormStatus } from "react-dom";
import { ChangeRoleSchema, FormState } from "@/lib/schemas/change-role-schema";
import { FieldDescription } from "@/components/form/field-description";

interface ChangeRoleProps {
  ids: any[];
  setOpen: (open: boolean) => void;
}

export const ChangeRoleForm = ({ ids, setOpen }: ChangeRoleProps) => {
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

    const ids = formData.get("ids");
    const idsArray = ids!
      .toString()
      .split(",")
      .map((string) => parseInt(string));
    const { role } = validatedFields.data;

    changeRoles(idsArray, role);

    setTimeout(() => {
      setOpen(false);
      toast.success("Role(s) has been updated");
      router.refresh();
    }, 500);
  };

  const [state, action] = useFormState(onSubmit, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action}>
      <input type="hidden" name="ids" value={ids} />
      <div className="flex flex-col gap-2">
        <Role />
        {state?.errors?.role && (
          <FieldDescription>{state.errors.role}</FieldDescription>
        )}
      </div>
      <div className="w-full flex justify-end gap-2 mt-10">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Change role"}
        </Button>
      </div>
    </form>
  );
};
