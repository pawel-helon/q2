"use client";

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

import { deactivateDevice } from "@/app/api/neon/deactivate-device";
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

interface DeactivateProps {
  device: Device | null;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Deactivate = ({ device, open, setOpen }: DeactivateProps) => {
  const id = Number(device?.id);

  const router = useRouter();

  const handleDeactivateDevice = () => {
    deactivateDevice(id).then(() => {
      setTimeout(() => {
        toast("Device has been deactivated");
      }, 500);
      setOpen(!open);
      router.refresh();
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
          Deactivate
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deactivate device</DialogTitle>
          <DialogDescription>
            Are you sure you want to deactivate this device?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button onClick={handleDeactivateDevice}>Deactivate</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
