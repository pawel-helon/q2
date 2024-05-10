import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { deleteUsers } from "@/app/api/neon/delete-user";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface DeleteUsersProps {
  ids: any[];
}

export const DeleteUsers = ({ ids }: DeleteUsersProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDeleteUsers = () => {
    deleteUsers(ids);
    setTimeout(() => {
      toast.success("User(s) deleted");
      router.refresh();
    }, 500);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          variant="ghost"
          size="sm"
          className="w-full justify-start"
        >
          Delete user
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-6">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete user(s)
            and remove data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-6">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={handleDeleteUsers}>Continue</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
