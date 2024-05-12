"use server";

import { redirect } from "next/navigation";
import { STATE, STATUS } from "@prisma/client";
import {
    AddDeviceSchema,
    FormState,
} from "@/lib/schemas/add-device-schema";
import { db } from "@/lib/db";

export async function addDeviceEndUser(state: FormState, formData: FormData) {
  const userId = Number(formData.get("userId"));

  const city = String(formData.get("city"));
  const country = String(formData.get("country"));
  const model = String(formData.get("model"));

  const validatedFields = AddDeviceSchema.safeParse({
    deviceName: formData.get("deviceName"),
    streetAddress: formData.get("streetAddress"),
    SIM: formData.get("SIM"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { deviceName, streetAddress, SIM } = validatedFields.data;

  const newDevice = await db.device.create({
    data: {
      deviceName: deviceName,
      streetAddress: streetAddress,
      city: city,
      country: country,
      model: model,
      SIM: SIM,
      owner: {
        connect: {
          id: userId,
        },
      },
      status: STATUS.INACTIVE,
      state: STATE.CLOSED,
    },
  });

  if (!newDevice) {
    return {
      message: "An error occurred while adding new device.",
    };
  }

  redirect(`/devices/${newDevice.id}`);
}
