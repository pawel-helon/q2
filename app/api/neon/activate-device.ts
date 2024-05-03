"use server"

import { db } from "@/lib/db";

//Activate selected devices in Tanstack Table
export async function activateDevice(ids: any[]) {
  for (const index of ids) {
    await db.device.update({
      where: {
        id: index,
      },
      data: {
        status: "ACTIVE",
      },
    });
  }
}