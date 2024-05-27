"use server";

import { db } from "@/lib/db";
import { Notification } from "@prisma/client";
import { deleteSession } from "@/lib/session";

export async function remove(id: number, entity: string) {
  if (entity === "user") {
    await db.user.delete({
      where: {
        id: id,
      },
    });
    deleteSession();
    return true;
  } else if (entity === "device") {
    await db.device.delete({
      where: {
        id: id,
      },
    });
    return true;
  } else if (entity === "notification") {
    await db.notification.delete({
      where: {
        id: id,
      },
    });
    return true;
  }
}

export async function deleteNotification(notificaction: Notification) {
  await db.notification.delete({
    where: {
      id: notificaction.id,
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

export async function deleteDeviceTanstack(ids: any[]) {
  for (const index of ids) {
    await db.device.delete({
      where: {
        id: index,
      },
    });
  }
}
