"use server";

import { db } from "@/lib/db";
import { Notification } from "@prisma/client";

export async function fetchNotifications(ownerId: number) {
  const notifications = (await db.notification.findMany({
    where: { userId: ownerId },
  })) as Notification[];
  
  return notifications;
}
