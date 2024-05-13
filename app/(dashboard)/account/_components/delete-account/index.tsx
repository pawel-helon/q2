"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
      <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-6">Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        <DeleteAccountForm userId={userId}/>
      </DialogContent>
    </Dialog>
  );
};
