"use server";

import { db } from "@/lib/db";
import { ROLE } from "@prisma/client";

export async function requestRoleChangeEndUser(formData: FormData) {
  const userId = formData.get("id");
  const newRole = formData.get("role");
  
  const admins = await db.user.findMany({
    where: {
      role: ROLE.ADMIN,
    },
  });

  const requester = await db.user.findUnique({
    where: {
      id: Number(userId),
    },
  });
  const name = requester!.name;


  for (const admin of admins) {
    await db.notification.create({
      data: {
        title: `${name} requested role change to ${newRole}`,
        user: {
          connect: {
            id: admin.id,
          },
        },
        requester: Number(userId),
        requestedRole: newRole as ROLE,
      },
    });
    //send emails to admins
  }
}
