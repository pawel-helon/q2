"use client";

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

import { deleteDevice } from "@/app/api/neon/delete-device";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Device } from "@/types";
import { cn } from "@/lib/utils";

interface DeleteProps {
  device: Device | null;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Delete = ({ device, open, setOpen }: DeleteProps) => {
  const id = Number(device?.id);

  const router = useRouter();

  const handleDeleteDevice = () => {
    deleteDevice(id).then(() => {
      setTimeout(() => {
        toast("Device has been deactivated");
      }, 500);
      setOpen(!open);
      router.push("/devices");
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            "w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
            "transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none",
            "data-[disabled]:opacity-50 hover:bg-accent"
          )}
        >
          Delete
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete device</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this device?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button onClick={handleDeleteDevice}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
