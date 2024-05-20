"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { deleteDevices } from "@/app/api/neon/delete-device";

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

export const DeleteDevices = ({
  ids,
  setOpen,
}: {
  ids: any[];
  setOpen: setOpen;
}) => {
  const router = useRouter();
  const handleDeleteDevice = () => {
    deleteDevices(ids);
    setTimeout(() => {
      setOpen(false);
      toast.success("Device(s) deleted");
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
          <Button onClick={handleDeleteDevice}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
