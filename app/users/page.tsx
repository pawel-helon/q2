import { z } from "zod";

import { db } from "@/lib/db";
import { addDeviceSchema } from "@/schemas";
import { AddDeviceForm } from "../devices/_components/add-device/add-device-form";

//Temp
export default function Home() {
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
    <div className="mx-auto max-w-xl my-8">
      <AddDeviceForm onDataAction={onDataAction} />
      {/* <AddDeviceDialog /> */}
    </div>
  );
}