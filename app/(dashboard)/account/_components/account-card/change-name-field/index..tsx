"use client";

import { useState } from "react";

import { ChangeNameForm } from "./change-name-form";

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

export function ChangeNameField({
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
              <SheetContent side="top">
                <SheetHeader className="text-left">
                  <SheetTitle>Change name</SheetTitle>
                </SheetHeader>
                <ChangeNameForm userId={userId} setOpenSheet={setOpenSheet} setOpenDialog={setOpenDialog}/>
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
                <ChangeNameForm userId={userId} setOpenSheet={setOpenSheet} setOpenDialog={setOpenDialog} />
              </DialogContent>
            </Dialog>
          </div>
        </>
      </div>
    </li>
  );
}
