"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { EllipsisVertical } from "lucide-react";

import { activateDevice } from "@/app/api/neon/activate-device-mb";
import { deactivateDevice } from "@/app/api/neon/deactivate-device";
import { deleteDevice } from "@/app/api/neon/delete-device";

import { Item } from "./item";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { device } from "@/types";

export function MoreButton({ device }: { device: device }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleActivateDevice = () => {
    activateDevice(device.id).then(() => {
      setTimeout(() => {
        toast("Device has been activated");
      }, 500);
      setOpen(false);
      router.refresh();
    });
  };

  const handleDeactivateDevice = () => {
    deactivateDevice(device.id).then(() => {
      setTimeout(() => {
        toast("Device has been deactivated");
      }, 500);
      setOpen(false);
      router.refresh();
    });
  };

  const handleDeleteDevice = () => {
    deleteDevice(device.id).then(() => {
      setTimeout(() => {
        toast("Device has been deleted");
      }, 500);
      setOpen(false);
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
        {device.status === "ACTIVE" ? (
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
        <Separator className="my-1" />
        <Item
          cta="Delete"
          dialogTitle="Delete device"
          dialogDescription="Are you sure you want to delete this device?"
          action={handleDeleteDevice}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
