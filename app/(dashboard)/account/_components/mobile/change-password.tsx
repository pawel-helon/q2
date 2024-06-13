"use client";

import { useState } from "react";

import { ChangePasswordForm } from "../account-card/change-password-field/change-password-form";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ChangePassword({ userId }: { userId: number }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="flex flex-col gap-2">
      <Label>Password</Label>
      <div className="relative">
        <Input disabled placeholder="*******" />
        <Sheet open={open} onOpenChange={setOpen}>
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
            <SheetHeader className="text-left mb-6">
              <SheetTitle>Change password</SheetTitle>
            </SheetHeader>
            <ChangePasswordForm userId={userId} setOpen={setOpen} />
          </SheetContent>
        </Sheet>
      </div>
    </li>
  );
}
