"use server";

import { db } from "@/lib/db";

export async function fetchUserEmail(ownerId: number) {
  const email = await db.user.findUnique({
    where: { id: ownerId },
    select: { email: true },
  });
  return email
}
