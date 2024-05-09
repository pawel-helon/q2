"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

import { changeName } from "@/app/actions/auth/change-name";
import { FormField } from "@/components/form/form-field";
import { FieldDescription } from "@/components/form/field-description";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ChangeNameFieldProps {
  label: string;
  placeholder: any;
  dialogTitle: string;
  userId: number;
}

export const ChangeNameField = ({
  label,
  placeholder,
  dialogTitle,
  userId,
}: ChangeNameFieldProps) => {
  const [state, action] = useFormState(changeName, undefined);
  const { pending } = useFormStatus();

  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setOpen(false);
    setTimeout(() => {
      toast.success("Name has been updated.");
      router.refresh();
    }, 500);
  };

  return (
    <li className="flex flex-col gap-2">
      <Label>{label}</Label>
      <div className="relative">
        <Input disabled placeholder={placeholder} />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="link"
              className="absolute top-1/2 transform -translate-y-1/2 right-0"
              size="sm"
            >
              Change
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="mb-6">
              <DialogTitle>{dialogTitle}</DialogTitle>
            </DialogHeader>
            <form action={action} className="flex flex-col gap-5">
              <input type="hidden" name="userId" value={userId} />
              <FormField className="mb-6">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Enter new name" />
                {state?.errors?.name && (
                  <FieldDescription>{state.errors.name}</FieldDescription>
                )}
              </FormField>
              <div className="flex gap-2 w-full justify-end">
                <DialogClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <Button
                  type="submit"
                  onClick={handleClick}
                  aria-disabled={pending}
                  disabled={pending}
                >
                  {pending ? "Submitting..." : "Change"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </li>
  );
};
