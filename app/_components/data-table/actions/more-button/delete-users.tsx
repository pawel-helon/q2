import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Dispatch, SetStateAction } from "react";

import { deleteUsers } from "@/app/api/neon/delete-user";

import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteUsersProps {
  ids: any[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DeleteUsers = ({ ids, open, setOpen }: DeleteUsersProps) => {
  const router = useRouter();

  const handleDeleteUsers = () => {
    deleteUsers(ids);
    setOpen(false);
    setTimeout(() => {
      toast.success("User(s) deleted");
      router.refresh();
    }, 500);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent title="Delete user(s)">
        <DialogDescription>
          {" "}
          This action cannot be undone. This will permanently delete user(s) and
          remove data from our servers.
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
            <Button onClick={handleDeleteUsers}>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
