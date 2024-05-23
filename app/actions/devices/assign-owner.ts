"use server";

import { db } from "@/lib/db";

export async function assignOwner(
  deviceId: number,
  userId: number | undefined
) {
  await db.device.update({
    where: { id: deviceId },
    data: {
      owner: {
        connect: {
          id: userId,
        },
      },
    },
  });
}
