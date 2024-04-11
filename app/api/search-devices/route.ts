"use server";

import { db } from "@/lib/db";

export const searchDevices = async (value: string) => {
  const devices = await db.device.findMany({
    where: {
      streetAddress: {
        contains: value
      },
    }
  });
  return devices;
};
