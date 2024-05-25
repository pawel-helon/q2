"use server";

import { db } from "@/lib/db";
import { Notification } from "@prisma/client";

export async function remove(id: number, entity: string) {
  switch (entity) {
    case "user":
      await db.user.delete({
        where: {
          id: id,
        },
      });
      break;
    case "device":
      await db.device.delete({
        where: {
          id: id,
        },
      });
      break;
    case "notification":
      await db.notification.delete({
        where: {
          id: id,
        },
      });
      break;
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
