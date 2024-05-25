"use server";

import { db } from "@/lib/db";
import { STATUS } from "@prisma/client";

export async function changeStatus(ids: number[], status: STATUS) {
  if (status === STATUS.ACTIVE) {
    for (const index of ids) {
      await db.device.update({
        where: {
          id: index,
        },
        data: {
          status: STATUS.ACTIVE,
        },
      });
    }
  } else {
    for (const index of ids) {
      await db.device.update({
        where: {
          id: index,
        },
        data: {
          status: STATUS.INACTIVE,
        },
      });
    }
  }
}
