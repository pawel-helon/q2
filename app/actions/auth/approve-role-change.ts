"use server";

import { db } from "@/lib/db";
import { notification } from "@/types";

export async function approveRoleChange(notification: notification) {
  const newRole = notification.requestedRole;

  await db.user.update({
    where: {
      id: notification.requester,
    },
    data: {
      role: newRole,
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