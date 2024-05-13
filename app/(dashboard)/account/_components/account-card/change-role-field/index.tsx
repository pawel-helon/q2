"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChangeRoleForm } from "./change-role-form";

interface ChangeRoleField {
  label: string;
  placeholder: any;
  dialogTitle: string;
  userId: number;
}

export const ChangeRoleField = ({
  label,
  placeholder,
  dialogTitle,
  userId,
}: ChangeRoleField) => {
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
              Request change
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="mb-6">
              <DialogTitle>{dialogTitle}</DialogTitle>
            </DialogHeader>
            <ChangeRoleForm userId={userId} setOpen={setOpen} />
          </DialogContent>
        </Dialog>
      </div>
    </li>
  );
};
