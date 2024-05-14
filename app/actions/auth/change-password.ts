"use server";

import { db } from "@/lib/db";

export async function updateUser(userId: number, hashedPassword: string) {
  await db.user.update({
    where: {
      id: userId,
    },
    data: { password: hashedPassword },
  });
}