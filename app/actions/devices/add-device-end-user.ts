"use server";

import { redirect } from "next/navigation";
import { STATE, STATUS } from "@prisma/client";
import {
    AddDeviceSchemaEndUser,
    FormState,
} from "@/lib/schemas/add-device-schema";
import { db } from "@/lib/db";

export async function addDeviceEndUser(state: FormState, formData: FormData) {
  const validatedFields = AddDeviceSchemaEndUser.safeParse({
    city: formData.get("city"),
    country: formData.get("country"),
    model: formData.get("model"),
    deviceName: formData.get("deviceName"),
    streetAddress: formData.get("streetAddress"),
    SIM: formData.get("SIM"),
  });
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const userId = Number(formData.get("userId"));

  const { city, country, model, deviceName, streetAddress, SIM } = validatedFields.data;
  const prefix = formData.get("prefix");
  const phoneNumber = `${prefix}-${SIM}`;

  const newDevice = await db.device.create({
    data: {
      deviceName: deviceName,
      streetAddress: streetAddress,
      city: city,
      country: country,
      model: model,
      SIM: phoneNumber,
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
