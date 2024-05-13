"use server";

import { db } from "@/lib/db";

export async function requestRoleChangeEndUser(formData: FormData) {
  const userId = formData.get("id");
  const newRole = formData.get("role");

  const requester = await db.user.findUnique({
    where: {
      id: Number(userId),
    },
  });

  const name = requester!.name;

  await db.notification.create({
    data: {
      title: `${name} requested role change to ${newRole}`,
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });
}
