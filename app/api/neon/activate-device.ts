"use server"

import { db } from "@/lib/db";
import { STATUS } from "@prisma/client";

export async function activateDevice(ids: any[]) {
  for (const index of ids) {
    await db.device.update({
      where: {
        id: index,
      },
      data: {
        status: STATUS.ACTIVE,
      },
    });
  }
}