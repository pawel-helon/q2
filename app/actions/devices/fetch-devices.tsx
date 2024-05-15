"use server";

import { db } from "@/lib/db";

export const fetchDevices = async () => {
  const devices = await db.device.findMany();
  return devices;
};
