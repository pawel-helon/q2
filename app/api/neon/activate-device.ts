"use server"

import { db } from "@/lib/db";

//TODO
const deviceId = 4

export async function updateBobsDevice() {
  await db.device.update({
    where: {
      id: deviceId,
    },
    data: {
      status: "ACTIVE",
    },
  });
}
