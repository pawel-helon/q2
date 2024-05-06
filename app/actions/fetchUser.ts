"use server";

import { db } from "@/lib/db";

export async function fetchUser(userId: number) {
  const user = await db.user.findUnique({
    where: { id: userId },
  });
  return user
}
