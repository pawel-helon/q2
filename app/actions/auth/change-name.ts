"use server";

import { db } from "@/lib/db";

export async function updateUser(userId: number, name: string) {
  await db.user.update({
    where: {
      id: userId,
    },
    data: { name },
  });
}