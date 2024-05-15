"use client";

import bcrypt from "bcryptjs";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";
import { ROLE } from "@prisma/client";

import { createAccount } from "@/app/actions/auth/create-account";
import { AddUserSchema, FormState } from "@/lib/schemas/add-user-schema";

import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";
import { PasswordInput } from "@/components/form/password-input";
import { DialogClose } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddUserFormProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const AddUserForm = ({ open, setOpen }: AddUserFormProps) => {
  const [state, action] = useFormState(addUser, undefined);
  const { pending } = useFormStatus();

  const router = useRouter();

  async function addUser(state: FormState, formData: FormData) {
    const role = formData.get("role") as ROLE;

    const validatedFields = AddUserSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirm: formData.get("confirm"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { name, email, password } = validatedFields.data;
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
        <Label htmlFor="name">Full name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter full name"
          spellCheck="false"
        />
        {state?.errors?.name && (
          <FieldDescription>{state.errors.name}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="Enter email address"
          spellCheck="false"
        />
        {state?.errors?.email && (
          <FieldDescription>{state.errors.email}</FieldDescription>
        )}
      </FormField>
      <FormField>
        <Label htmlFor="email">Role</Label>
        <Select defaultValue="ENDUSER" name="role">
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
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <PasswordInput id="password" name="password" />
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
        <Label htmlFor="confirm">Confirm password</Label>
        <PasswordInput id="confirm" name="confirm" />
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
        <Button disabled={pending} aria-disabled={pending} type="submit">
          {pending ? "Submitting..." : "Add user"}
        </Button>
      </div>
    </form>
  );
};
