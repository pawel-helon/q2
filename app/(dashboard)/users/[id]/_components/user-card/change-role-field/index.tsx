"use client";

import { useState } from "react";

import { ChangeRoleForm } from "./change-role-form";
import { DialogContent } from "@/components/dialog-content";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ChangeRoleField({
  label,
  placeholder,
  dialogTitle,
  userId,
}: {
  label: string;
  placeholder: string;
  dialogTitle: string;
  userId: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <li className="flex flex-col gap-2">
      <Label>{label}</Label>
      <div className="relative">
        <Input disabled placeholder={placeholder} />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="link"
              className="absolute top-1/2 transform -translate-y-1/2 right-0 focus-visible:ring-0"
              size="sm"
            >
              Change
            </Button>
          </DialogTrigger>
          <DialogContent title={dialogTitle}>
            <ChangeRoleForm userId={userId} setOpen={setOpen} />
          </DialogContent>
        </Dialog>
      </div>
    </li>
  );
}
