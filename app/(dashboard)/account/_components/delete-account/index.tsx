"use client";

import { useMedia } from "react-use";

import { DeleteAccountForm } from "./delete-account-form";
import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

export function DeleteAccount({ userId }: { userId: number }) {
  const isMobile = useMedia("(max-width: 480px)", false);

  return (
    <>
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button>Delete account</Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <DeleteAccountForm userId={userId} />
          </SheetContent>
        </Sheet>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Delete account</Button>
          </DialogTrigger>
          <DialogContent title="Delete account">
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
            <DeleteAccountForm userId={userId} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
