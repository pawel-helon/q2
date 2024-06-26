"use client";

import { useState } from "react";

import { ChangeRoleForm } from "./change-role-form";
import { DialogContent } from "@/components/dialog-content";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [openDialog, setOpenDialog] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <>
      <div className="xs:hidden">
        <Label>{label}</Label>
        <div className="relative">
          <Input disabled placeholder={placeholder} />
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
              <Button
                variant="link"
                className="absolute top-1/2 transform -translate-y-1/2 right-0 focus-visible:ring-0"
                size="sm"
              >
                Request change
              </Button>
            </SheetTrigger>
            <SheetContent title={dialogTitle} side="bottom">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-left">Request role change</SheetTitle>
              </SheetHeader>
              <ChangeRoleForm userId={userId} setOpen={setOpenSheet} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="hidden xs:flex flex-col gap-2">
        <Label>{label}</Label>
        <div className="relative">
          <Input disabled placeholder={placeholder} />
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button
                variant="link"
                className="absolute top-1/2 transform -translate-y-1/2 right-0 focus-visible:ring-0"
                size="sm"
              >
                Request change
              </Button>
            </DialogTrigger>
            <DialogContent title={dialogTitle}>
              <ChangeRoleForm userId={userId} setOpen={setOpenDialog} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
