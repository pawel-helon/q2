"use client";

import bcrypt from "bcryptjs";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ROLE } from "@prisma/client";

import { createAccount } from "@/app/actions/auth/create-account";
import { AddUserSchema, FormState } from "@/lib/schemas/add-user-schema";

import { Name } from "@/components/form/user/full-name";
import { Email } from "@/components/form/user/email";
import { Role } from "@/components/form/user/role";
import { Password } from "@/components/form/user/password";
import { PasswordConfirmation } from "@/components/form/user/password-confirmation";

import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { setOpen } from "@/types";

export function AddUserForm({
  setOpen,
}: {
  setOpen: setOpen;
}) {
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

    createAccount(name, email, role, hashedPassword);

    setTimeout(() => {
      setOpen(false);
      toast.success("New account has been created.");
      router.refresh();
    }, 500);
  }

  return (
    <form action={action} className="flex flex-col gap-8">
      <Name>{state?.errors?.name && <>{state.errors.name}</>}</Name>
      <Email>{state?.errors?.email && <>{state.errors.email}</>}</Email>
      <Role>{state?.errors?.role && <>{state.errors.role}</>}</Role>
      <Password>
        {state?.errors?.password && (
          <>
            <p className="text-[0.8rem] text-muted-foreground font-semibold inline">
              Password must:
            </p>
            {state.errors.password.map((error, index) => (
              <p
                className="inline text-[0.8rem] leading-none text-muted-foreground"
                key={error}
              >
                {index === 0 ? " " : ", "}
                {error}
              </p>
            ))}
          </>
        )}
      </Password>
      <PasswordConfirmation>
        {state?.errors?.confirm && (
          <>
            <p className="text-[0.8rem] text-muted-foreground font-semibold inline">
              Password must:
            </p>
            {state.errors.confirm.map((error, index) => (
              <p
                className="inline text-[0.8rem] leading-none text-muted-foreground"
                key={error}
              >
                {index === 0 ? " " : ", "}
                {error}
              </p>
            ))}
          </>
        )}
      </PasswordConfirmation>
      <div className="flex gap-2 w-full justify-end">
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <Button type="submit" disabled={pending} aria-disabled={pending}>
          {pending ? "Submitting..." : "Add user"}
        </Button>
      </div>
    </form>
  );
};
