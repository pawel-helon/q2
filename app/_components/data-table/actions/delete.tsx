"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
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

interface DeleteProps {
  ids: any[];
}

export const Delete = ({ ids }: DeleteProps) => {
  const [open, setOpen] = useState(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent title="Delete device">
        <DialogDescription>
          Are you sure you want to delete this device?
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
