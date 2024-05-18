"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { updateUser } from "@/app/actions/auth/change-email";
import {
  ChangeEmailSchema,
  FormState,
} from "@/lib/schemas/change-email-schema";

import { Email } from "@/components/form/user/email";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { setOpen } from "@/types";

interface ChangeNameFormProps {
  userId: number;
  setOpen: setOpen;
}

export const ChangeEmailForm = ({ userId, setOpen }: ChangeNameFormProps) => {
  const [state, action] = useFormState(changeEmail, undefined);
  const { pending } = useFormStatus();
  const router = useRouter();

  async function changeEmail(state: FormState, formData: FormData) {
    const validatedField = ChangeEmailSchema.safeParse({
      email: formData.get("email"),
    });

    if (!validatedField.success) {
      return {
        errors: validatedField.error.flatten().fieldErrors,
      };
    }

    const userId = Number(formData.get("userId"));
    const { email } = validatedField.data;

    updateUser(userId, email);

    setTimeout(() => {
      setOpen(false);
      toast.success("Email has been updated.");
      router.refresh();
    }, 500);
  }

  return (
    <form action={action} className="flex flex-col gap-8">
      <input type="hidden" name="userId" value={userId} />
      <Email>{state?.errors?.email && <>{state.errors.email}</>}</Email>
      <div className="flex gap-2 w-full justify-end">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button type="submit" aria-disabled={pending} disabled={pending}>
          {pending ? "Submitting..." : "Change"}
        </Button>
      </div>
    </form>
  );
};
