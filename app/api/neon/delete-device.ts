"use server";

import { db } from "@/lib/db";

export async function deleteDevices(ids: any[]) {
  for (const index of ids) {
    await db.device.delete({
      where: {
        id: index,
      },
    });
  }
}
