"use server";

import { db } from "@/lib/db";

//devices page
export async function deleteDevices(ids: any[]) {
  for (const index of ids) {
    await db.device.delete({
      where: {
        id: index,
      },
    });
  }
}

//device page
export async function deleteDevice(id: number) {
  await db.device.delete({
    where: {
      id: id,
    },
  });
}
