import { z } from "zod";

import { db } from "@/lib/db";
import { addDeviceSchema } from "@/schemas";
import { AddDeviceForm } from "./_components/add-device-form";

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
      console.log("User registered");

      return { message: "User registered", user: parsed.data };
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
    </div>
  );
}
