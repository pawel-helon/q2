"use server";

import { db } from "@/lib/db";
import { ROLE } from "@prisma/client";

// user page
export async function changeRole(userId: number, role: ROLE) {
  await db.user.update({
    where: { id: userId},
    data: {
      role: role,
    },
  });
}