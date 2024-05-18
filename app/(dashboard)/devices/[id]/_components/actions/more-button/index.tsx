"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { EllipsisVertical } from "lucide-react";

import { Item } from "./item";
import { activateDevice } from "@/app/api/neon/activate-device-mb";
import { deactivateDevice } from "@/app/api/neon/deactivate-device";
import { deleteDevice } from "@/app/api/neon/delete-device";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Device } from "@/types";
import { Separator } from "@/components/ui/separator";

interface MoreButtonProps {
  device: Device | null;
}

export const MoreButton = ({ device }: MoreButtonProps) => {
  const deviceStatus = device?.status;
  const id = Number(device?.id);

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleActivateDevice = () => {
    activateDevice(id).then(() => {
      setTimeout(() => {
        toast("Device has been activated");
      }, 500);
      setOpen(!open);
      router.refresh();
    });
  };

  const handleDeactivateDevice = () => {
    deactivateDevice(id).then(() => {
      setTimeout(() => {
        toast("Device has been deactivated");
      }, 500);
      setOpen(!open);
      router.refresh();
    });
  };

  const handleDeleteDevice = () => {
    deleteDevice(id).then(() => {
      setTimeout(() => {
        toast("Device has been deleted");
      }, 500);
      setOpen(!open);
      router.push("/devices");
    });
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8}>
        {deviceStatus === "ACTIVE" ? (
          <Item
            cta="Deactivate"
            dialogTitle="Deactivate device"
            dialogDescription="Are you sure you want to deactivate this device?"
            action={handleDeactivateDevice}
          />
        ) : (
          <Item
            cta="Activate"
            dialogTitle="Activate device"
            dialogDescription="Are you sure you want to activate this device?"
            action={handleActivateDevice}
          />
        )}
        <Separator className="my-1"/>
        <Item
          cta="Delete"
          dialogTitle="Delete device"
          dialogDescription="Are you sure you want to delete this device?"
          action={handleDeleteDevice}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
