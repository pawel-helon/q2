"use server";

import { db } from "@/lib/db";

export async function fetchNotifications(ownerId: number) {
  const notifications = await db.notification.findMany({
    where: { userId: ownerId },
  });
  return notifications
}
