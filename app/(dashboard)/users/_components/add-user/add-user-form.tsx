"use client";

import bcrypt from "bcryptjs";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { createUserByAdmin } from "@/lib/data/create";
import { AddUserSchema, FormState } from "@/lib/schemas/add-user-schema";

import { Name } from "@/components/form/user/full-name";
import { Email } from "@/components/form/user/email";
import { Role } from "@/components/form/user/role";
import { Password } from "@/components/form/user/password";
import { PasswordConfirmation } from "@/components/form/user/password-confirmation";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { setOpen } from "@/types";
import { ROLE } from "@prisma/client";

export function AddUserForm({ setOpen }: { setOpen: setOpen }) {
  const [state, action] = useFormState(addUser, undefined);
  const { pending } = useFormStatus();

  const router = useRouter();

  async function addUser(state: FormState, formData: FormData) {
    const validatedFields = AddUserSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
      password: formData.get("password"),
      confirm: formData.get("confirm"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { name, email, password } = validatedFields.data;
    const role = formData.get("role") as ROLE;
    const hashedPassword = await bcrypt.hash(password, 10);

    createUserByAdmin(name, email, role, hashedPassword)
      .then((response) => {
        if (response === true) {
          setTimeout(() => {
            setOpen(false);
            toast.success("New account has been created.");
          }, 500);
          router.refresh();
        }
      });
  }

  return (
    <form action={action} className="flex flex-col gap-4 xs:gap-8">
      <Name>{state?.errors?.name && <>{state.errors.name}</>}</Name>
      <Email>{state?.errors?.email && <>{state.errors.email}</>}</Email>
      <Role>{state?.errors?.role && <>{state.errors.role}</>}</Role>
      <Password>
        {state?.errors?.password && (
          <div>
            <p className="text-[0.8rem] text-muted-foreground font-semibold inline">Password must:</p>
            {state.errors.password.map((error, index) => (
              <p key={error} className="inline text-[0.8rem] leading-none text-muted-foreground">
                {index === 0 ? " " : ", "}{error}
              </p>
            ))}
          </div>
        )}
      </Password>
      <PasswordConfirmation>
        {state?.errors?.confirm && (
          <div>
            <p className="text-[0.8rem] text-muted-foreground font-semibold inline">Password must:</p>
            {state.errors.confirm.map((error, index) => (
              <p key={error} className="inline text-[0.8rem] leading-none text-muted-foreground">
                {index === 0 ? " " : ", "}{error}
              </p>
            ))}
          </div>
        )}
      </PasswordConfirmation>
      <div className="flex flex-col xs:flex-row gap-1 xs:gap-2 w-full justify-end">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button type="submit" disabled={pending} aria-disabled={pending}>
          {pending ? "Submitting..." : "Add user"}
        </Button>
      </div>
    </form>
  );
}
