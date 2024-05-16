"use server"

import { db } from "@/lib/db";

export async function fetchDevice(userId: number) {
    const device = await db.device.findMany({
      where: {
        ownerId: userId,
      },
    });
    return device;
  }