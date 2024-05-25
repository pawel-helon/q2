"use server";

import { db } from "@/lib/db";
import { Notification } from "@prisma/client";

export async function deleteUser(id: number) {
  await db.user.delete({
    where: {
      id: id,
    },
  });
}

export async function deleteUserTanstack(ids: any[]) {
  for (const index of ids) {
    await db.user.delete({
      where: {
        id: index,
      },
    });
  }
}

export async function deleteDevice(id: number) {
  await db.device.delete({
    where: {
      id: id,
    },
  });
}

export async function deleteDeviceTanstack(ids: any[]) {
  for (const index of ids) {
    await db.device.delete({
      where: {
        id: index,
      },
    });
  }
}

export async function deleteNotification(notificaction: Notification) {
  await db.notification.delete({
    where: {
      id: notificaction.id,
    },
  });
}
  