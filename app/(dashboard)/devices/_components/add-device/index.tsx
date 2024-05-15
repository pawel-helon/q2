"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { $Enums } from "@prisma/client";

import { AddDeviceFormAdmin } from "./add-device-form-admin";
import { AddDeviceFormEndUser } from "./add-device-form-end-user";
import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AddDeviceProps {
  role: string;
  userId: number;
  owners: {
    id: number;
    email: string;
    name: string | null;
    password: string;
    role: $Enums.ROLE;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export const AddDevice = ({ role, userId, owners }: AddDeviceProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="-ml-2 mr-2" />
          Add device
        </Button>
      </DialogTrigger>
      <DialogContent title="Add new device">
        {role !== "ENDUSER" ? (
          <AddDeviceFormAdmin owners={owners} />
        ) : (
          <AddDeviceFormEndUser userId={userId} />
        )}
      </DialogContent>
    </Dialog>
  );
};
