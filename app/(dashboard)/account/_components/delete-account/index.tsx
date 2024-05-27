"use client";

import { DeleteAccountForm } from "./delete-account-form";
import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DeleteAccount({ userId }: { userId: number }) {
  return (
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
  );
}
