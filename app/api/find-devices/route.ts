"use server";

import { db } from "@/lib/db";

export const findDevices = async () => {
  const devices = await db.device.findMany();

  return devices;
};
