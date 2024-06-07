"use client"

import { Table } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { deleteUserTanstack } from "@/lib/data/delete";

import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { setOpen } from "@/types";

export function DeleteUsers<TData>({
  table,
  ids,
  setOpen,
}: {
  table: Table<TData>;
  ids: any[];
  setOpen: setOpen;
}) {
  const router = useRouter();

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
          <Button
            onClick={() => {
              deleteUserTanstack(ids).then(() => {
                setOpen(false);
                setTimeout(() => {
                  toast.success("User(s) deleted");
                  table.resetRowSelection();
                }, 500);
                router.refresh();
              });
            }}
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
