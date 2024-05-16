"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormState, useFormStatus } from "react-dom";
import { ChangeRoleSchema, FormState } from "@/lib/schemas/change-role-schema";
import { FieldDescription } from "@/components/form/field-description";
import { ROLE } from "@prisma/client";
import { changeRole } from "@/app/actions/users/change-role";

interface ChangeRoleForm {
  userId: number;
  setOpen: (open: boolean) => void;
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

    changeRole(userId, role)
    setTimeout(() => {
      setOpen(false);
      toast.success("Role has been updated.");
      router.refresh();
    }, 500);
  };

  const [state, action] = useFormState(onSubmit, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action}>
      <input type="hidden" name="id" value={userId} />
      <div className="flex flex-col gap-2">
        <Select name="role">
          <SelectTrigger>
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="ADMIN">Admin</SelectItem>
              <SelectItem value="OWNER">Owner</SelectItem>
              <SelectItem value="ENDUSER">End user</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {state?.errors?.role && (
          <FieldDescription>{state.errors.role}</FieldDescription>
        )}
      </div>
      <div className="w-full flex justify-end gap-2 mt-10">
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
