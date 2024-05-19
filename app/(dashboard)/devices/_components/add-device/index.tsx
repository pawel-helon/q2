"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { AddDeviceFormAdmin } from "./add-device-form-admin";
import { AddDeviceFormEndUser } from "./add-device-form-end-user";
import { DialogContent } from "@/components/dialog-content";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { owners } from "@/types";

export function AddDevice({
  role,
  userId,
  owners,
}: {
  role: string;
  userId: number;
  owners: owners;
}) {
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
}
