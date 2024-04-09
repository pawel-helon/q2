import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "./breadcrumbs";
import { Actions } from "./actions";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AddDeviceForm } from "@/app/devices/_components/add-device/add-device-form";
import { addDeviceSchema } from "@/schemas";
import { db } from "@/lib/db";
import { z } from "zod";
import { useState } from "react";

export const Navbar = () => {
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
      console.log("Device added");

      return { message: "Device added", user: parsed.data };
    } else {
      return {
        message: "Invalid data",
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }
  };

  
  return (
    <div className="w-full h-[64px] flex justify-between items-center">
      <Breadcrumbs />
      <Actions>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="-ml-2 mr-2"/>
              Add new device
            </Button>
          </DialogTrigger>
          <DialogContent>
            <AddDeviceForm onDataAction={onDataAction} />
          </DialogContent>
        </Dialog>
      </Actions>
    </div>
  );
};
