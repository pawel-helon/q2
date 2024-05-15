"use client";

import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeleteAccountForm } from "./delete-account-form";

interface DeleteAccountDialog {
  userId: number;
}

export const DeleteAccount = ({ userId }: DeleteAccountDialog) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Delete Account</Button>
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
};
