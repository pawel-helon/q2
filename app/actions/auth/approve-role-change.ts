"use server";

import { db } from "@/lib/db";
import { Notification } from "@prisma/client";

export async function approveRoleChange(notification: Notification) {
  await db.user.update({
    where: {
      id: notification.requester,
    },
    data: {
      role: notification.requestedRole,
    },
  });
  //create a new notification for the user
  //send email to the user
  await db.notification.delete({
    where: {
      id: notification.id,
    },
  });
}
