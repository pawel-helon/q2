"use client";

import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { devices } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { assignDevice } from "@/app/actions/devices/assign-device";
import { toast } from "sonner";

interface AssignDeviceProps {
  devices: devices;
  userId: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const AssignDevice = ({
  userId,
  devices,
  setOpen,
}: AssignDeviceProps) => {
  const router = useRouter();
  const handleClick = () => {
    setTimeout(() => {
      setOpen(false);
      toast.success("Device reassigned successfully!")
      router.refresh();
    }, 500);
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
          Assign device
        </button>
      </DialogTrigger>
      <DialogContent title="Assign device">
        <form action={assignDevice}>
          <input type="hidden" name="userId" value={userId} />
          <Select name="device">
            <SelectTrigger>
              <SelectValue placeholder="Select device" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {devices.map((device) => {
                  return (
                    <SelectItem key={device.id} value={String(device.id)}>
                      {device.deviceName}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <DialogFooter className="flex justify-end gap-2 mt-6">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handleClick}>
              Assign device
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
