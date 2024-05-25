"use server";

import { db } from "@/lib/db";

export async function declineRoleChange(id: number) {
    //create a new notification for the user
    //send email to the user
    await db.notification.delete({
      where: {
        id: id,
      },
    });
  }