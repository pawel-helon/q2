"use client";

import { useState } from "react";

import { ChangeRoleForm } from "./change-role-form";
import { DialogContent } from "@/components/dialog-content";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
  const [openDialog, setOpenDialog] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <li className="flex flex-col gap-2">
      <Label>{label}</Label>
      <div className="relative">
        <Input disabled placeholder={placeholder} />
        <>
          <div className="xs:hidden">
            <Sheet open={openSheet} onOpenChange={setOpenSheet}>
              <SheetTrigger asChild>
                <Button
                  variant="link"
                  className="absolute top-1/2 transform -translate-y-1/2 right-0 focus-visible:ring-0"
                  size="sm"
                >
                  Change
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader className="text-left mb-6">
                  <SheetTitle>Change role</SheetTitle>
                </SheetHeader>
                <ChangeRoleForm
                  userId={userId}
                  side="top"
                  setOpenSheet={setOpenSheet}
                  setOpenDialog={setOpenDialog}
                />
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden xs:block">
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
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
                <ChangeRoleForm
                  userId={userId}
                  setOpenSheet={setOpenSheet}
                  setOpenDialog={setOpenDialog}
                />
              </DialogContent>
            </Dialog>
          </div>
        </>
      </div>
    </li>
  );
}
