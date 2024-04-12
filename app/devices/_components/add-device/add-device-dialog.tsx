import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { AddDeviceForm } from "./add-device-form";
import { addDeviceSchema } from "@/schemas";
import { db } from "@/lib/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export const AddDeviceDialog = () => {
  const onDataAction = async (data: z.infer<typeof addDeviceSchema>) => {
    "use server";
    const parsed = addDeviceSchema.safeParse(data);

    if (parsed.success) {
      await db.device.create({
        data: {
          streetAddress: parsed.data.streetAddress,
          city: parsed.data.city,
          country: parsed.data.country,
          model: parsed.data.model,
          owner: parsed.data.owner,
          SIM: parsed.data.SIM,
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
        <AddDeviceForm onDataAction={onDataAction} />
      </DialogContent>
    </Dialog>
  );
};
