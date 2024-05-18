"use server";

import { db } from "@/lib/db";
import { ROLE } from "@prisma/client";

export async function changeRoles(idsArray: number[], role: string) {
  if (role === "ADMIN") {
    for (const index of idsArray) {
      await db.user.update({
        where: {
          id: index,
        },
        data: {
          role: ROLE.ADMIN,
        },
      });
    }
  } else if (role === "OWNER") {
    for (const index of idsArray) {
      await db.user.update({
        where: {
          id: index,
        },
        data: {
          role: ROLE.OWNER,
        },
      });
    }
  } else {
    for (const index of idsArray) {
      await db.user.update({
        where: {
          id: index,
        },
        data: {
          role: ROLE.ENDUSER,
        },
      });
    }
  }
}
