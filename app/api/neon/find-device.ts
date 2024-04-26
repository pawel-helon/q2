"use server"

import { db } from "@/lib/db";

export async function fetchDevice(id: number) {
    const device = await db.device.findUnique({
      where: {
        id: id,
      },
    });
    return device;
  }