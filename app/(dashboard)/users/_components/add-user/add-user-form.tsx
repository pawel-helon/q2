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

import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { setOpen } from "@/types";

interface AddUserFormProps {
  open: boolean;
  setOpen: setOpen;
}

export const AddUserForm = ({ open, setOpen }: AddUserFormProps) => {
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
    <form action={action} className="flex flex-col gap-5">
      <FormField>
        <Name />
        {state?.errors?.name && (
          <FieldDescription>{state.errors.name}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Email />
        {state?.errors?.email && (
          <FieldDescription>{state.errors.email}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Role />
        {state?.errors?.role && (
          <FieldDescription>{state.errors.role}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Password />
        {state?.errors?.password && (
          <div>
            <FieldDescription className="text-foreground">
              Password must:
            </FieldDescription>
            {state.errors.password.map((error) => (
              <FieldDescription key={error}>{error}</FieldDescription>
            ))}
          </div>
        )}
      </FormField>
      <FormField className="mb-6">
        <PasswordConfirmation />
        {state?.errors?.confirm && (
          <div>
            <FieldDescription className="text-foreground">
              Password must:
            </FieldDescription>
            {state.errors.confirm.map((error) => (
              <FieldDescription key={error}>{error}</FieldDescription>
            ))}
          </div>
        )}
      </FormField>
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
