"use server"

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { $Enums, STATE, STATUS } from "@prisma/client";
import { Plus } from "lucide-react";

import { AddDeviceForm } from "./add-device-form";
import { addDeviceSchema } from "@/schemas";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AddDeviceDialogProps {
  owners: {
    id: number;
    email: string;
    name: string | null;
    password: string;
    role: $Enums.ROLE;
    createdAt: Date;
    updatedAt: Date;
}[]
}

export const AddDeviceDialog = ({ owners }: AddDeviceDialogProps) => {
  const onDataAction = async (data: z.infer<typeof addDeviceSchema>) => {
    "use server";
    const parsed = addDeviceSchema.safeParse(data);

    if (parsed.success) {
      await db.device.create({
        data: {
          deviceName: parsed.data.deviceName,
          streetAddress: parsed.data.streetAddress,
          city: parsed.data.city,
          country: parsed.data.country,
          model: parsed.data.model,
          owner: {
            connect: {
              email: parsed.data.owner,
            },
          },
          SIM: parsed.data.SIM,
          status: STATUS.INACTIVE,
          state: STATE.CLOSED,
        },
      });
      revalidatePath("/devices", "page");

      return { message: "Device added", user: parsed.data };
    } else {
      return {
        message: "Invalid data",
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="-ml-2 mr-2" />
          Add device
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[720px]">
        <DialogHeader className="mb-4 text-left">
          <DialogTitle>Add new device</DialogTitle>
        </DialogHeader>
        <AddDeviceForm onDataAction={onDataAction} owners={owners}/>
      </DialogContent>
    </Dialog>
  );
};
