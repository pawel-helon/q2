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
import { requestRoleChangeEndUser } from "@/app/actions/auth/request-role-change-end-user";
import { Role } from "@/components/form/user/role";
import { useFormState, useFormStatus } from "react-dom";
import { ChangeRoleSchema, FormState } from "@/lib/schemas/change-role-schema";

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
    const userId = Number(formData.get("id"));
    const { role } = validatedFields.data;

    requestRoleChangeEndUser(role, userId);

    setTimeout(() => {
      setOpen(false);
      toast.success("Request has been submitted.");
      router.refresh();
    }, 500);
  };
  const [state, action] = useFormState(onSubmit, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action}>
      <input type="hidden" name="id" value={userId} />
      <div className="flex flex-col gap-2">
        <Role>{state?.errors?.role && <>{state.errors.role}</>}</Role>
      </div>
      <div className="w-full flex justify-end gap-2 mt-10">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
