"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { EllipsisVertical } from "lucide-react";

import { update } from "@/lib/data/update";
import { remove } from "@/lib/data/delete";

import { Item } from "./item";
import { AssignOwner } from "./assign-owner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { email } from "@/types";
import { Device, STATUS } from "@prisma/client";

export function More({
  device,
  users,
  ownerEmail,
}: {
  device: Device;
  users: email[];
  ownerEmail: string;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8}>
        {device.status === STATUS.ACTIVE ? (
          <Item
            cta="Deactivate"
            dialogTitle="Deactivate device"
            dialogDescription="Are you sure you want to deactivate this device?"
            action={() => {
              update(device.id, "device", "status", "INACTIVE").then(() => {
                setTimeout(() => {
                  toast.success("Device has been deactivated");
                }, 500);
                setOpen(false);
                router.refresh();
              });
            }}
          />
        ) : (
          <Item
            cta="Activate"
            dialogTitle="Activate device"
            dialogDescription="Are you sure you want to activate this device?"
            action={() => {
              update(device.id, "device", "status", "ACTIVE").then(() => {
                setTimeout(() => {
                  toast.success("Device has been activated");
                }, 500);
                setOpen(false);
                router.refresh();
              });
            }}
          />
        )}
        <AssignOwner
          users={users}
          deviceId={device.id}
          ownerEmail={ownerEmail}
          setOpen={setOpen}
        />
        <Separator className="my-1" />
        <Item
          cta="Delete"
          dialogTitle="Delete device"
          dialogDescription="Are you sure you want to delete this device?"
          action={() => {
            remove(device.id, "device").then(() => {
              setTimeout(() => {
                setOpen(false);
                toast.success("Device has been deleted");
              }, 500);
              router.push("/devices");
            });
          }}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
