"use server";

import { db } from "@/lib/db";
import { ROLE } from "@prisma/client";

export async function requestRoleChangeEndUser(role: string, userId: number) {
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
        title: `${name} requested role change to ${role}`,
        user: {
          connect: {
            id: admin.id,
          },
        },
        requester: Number(userId),
        requestedRole: role as ROLE,
      },
    });
    //send emails to admins
  }
}
