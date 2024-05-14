"use server"

import { $Enums } from "@prisma/client";
import { db } from "@/lib/db";

export async function approveRoleChange(notification: {
    id: number;
    title: string;
    userId: number;
    requester: number;
    requestedRole: $Enums.ROLE;
    createdAt: Date;
    updatedAt: Date;
}) {
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

  
