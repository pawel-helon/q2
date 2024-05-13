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

  await db.notification.delete({
    where: {
      id: notification.id,
    },
  });
}

  
