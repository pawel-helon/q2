"use client";

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

import { activateDevice } from "@/app/api/neon/activate-device-mb";
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

interface ActivateProps {
  device: Device | null;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Activate = ({ device, open, setOpen }: ActivateProps) => {
  const id = Number(device?.id);

  const router = useRouter();

  const handleActivateDevice = () => {
    activateDevice(id).then(() => {
      setTimeout(() => {
        toast("Device has been activated");
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
          Activate
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Activate device</DialogTitle>
          <DialogDescription>
            Are you sure you want to activate this device?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button onClick={handleActivateDevice}>Activate</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
