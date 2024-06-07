"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { deleteDeviceTanstack } from "@/lib/data/delete";

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
import { Table } from "@tanstack/react-table";

export function DeleteDevices<TData>({
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
      <DialogContent title="Delete device(s)">
        <DialogDescription>
          {" "}
          This action cannot be undone. This will permanently delete device(s)
          and remove data from our servers.
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button
            onClick={() => {
              deleteDeviceTanstack(ids).then(() => {
                setTimeout(() => {
                  setOpen(false);
                  toast.success("Device(s) deleted");
                  table.resetRowSelection();
                }, 500);
                router.refresh();
              });
            }}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
