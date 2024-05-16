"use server";

import { db } from "@/lib/db";

export async function assignDevice(userId: number, deviceId: number) {
  await db.device.update({
    where: { id: deviceId },
    data: {
      ownerId: userId,
    },
  });
}
