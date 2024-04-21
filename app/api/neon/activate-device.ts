"use server"

import { db } from "@/lib/db";

export async function updateBobsDevice() {
  await db.device.update({
    where: {
      id: 2,
    },
    data: {
      status: "ACTIVE",
    },
  });
}
