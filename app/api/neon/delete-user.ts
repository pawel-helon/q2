"use server";

import { db } from "@/lib/db";

export async function deleteUsers(ids: any[]) {
  for (const index of ids) {
    await db.user.delete({
      where: {
        id: index,
      },
    });
  }
}
