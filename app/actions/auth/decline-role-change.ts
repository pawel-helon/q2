"use server";

import { db } from "@/lib/db";
import { notification } from "@/types";

export async function declineRoleChange(notification: notification) {
    //create a new notification for the user
    //send email to the user
    await db.notification.delete({
      where: {
        id: notification.id,
      },
    });
  }