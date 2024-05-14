"use server"

import { STATUS } from "@prisma/client";

import { db } from "@/lib/db";

export async function activateDevice(id: number) {
    await db.device.update({
      where: {
        id: id,
      },
      data: {
        status: STATUS.ACTIVE,
      },
    });
  }