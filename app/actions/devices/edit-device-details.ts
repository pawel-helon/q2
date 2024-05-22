"use server";

import { db } from "@/lib/db";

export async function editDeviceDetails(
  deviceId: number,
  owner: string,
  city: string,
  country: string,
  model: string,
  deviceName: string,
  streetAddress: string,
  SIM: string
) {
  const updatedDevice = await db.device.update({
    where: {
      id: deviceId,
    },
    data: {
      owner: {
        connect: {
          email: owner,
        },
      },
      city: city,
      country: country,
      model: model,
      deviceName: deviceName,
      streetAddress: streetAddress,
      SIM: SIM,
    },
  });

  if (!updatedDevice) {
    return {
      message: "An error occurred while updating device details.",
    };
  }

  return updatedDevice;
}
