"use server";

import { db } from "@/lib/db";

export async function assignDevice(formData: FormData) {
  const userId = Number(formData.get("userId"));
  const deviceId = Number(formData.get("device"));


  await db.device.update({
    where: { id: deviceId },
    data: {
      ownerId: userId,
    },
  });
}
