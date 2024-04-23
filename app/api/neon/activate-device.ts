"use server"

import { db } from "@/lib/db";

export async function activateDevice(ids: any[]) {
  for (const index of ids) {
    await db.device.updateMany({
      where: {
        id: index,
      },
      data: {
        status: "ACTIVE",
      },
    });
  }
}