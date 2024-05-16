"use server";

import { db } from "@/lib/db";

export async function deleteAccount(userId: number) {
  await db.user.delete({
    where: {
      id: userId,
    },
  });
}
