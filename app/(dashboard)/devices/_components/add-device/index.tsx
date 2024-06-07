"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { AddDeviceFormAdmin } from "./add-device-form-admin";
import { AddDeviceFormEndUser } from "./add-device-form-end-user";
import { DialogContent } from "@/components/dialog-content";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { ROLE, User } from "@prisma/client";

export function AddDevice({
  role,
  userId,
  users,
}: {
  role: ROLE;
  userId: number;
  users: User[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-5 -ml-2 mr-2" />
          Add device
        </Button>
      </DialogTrigger>
      <DialogContent title="Add new device">
        {role !== ROLE.ENDUSER ? (
          <AddDeviceFormAdmin users={users} />
        ) : (
          <AddDeviceFormEndUser userId={userId} />
        )}
      </DialogContent>
    </Dialog>
  );
}
