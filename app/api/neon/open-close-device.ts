"use server"

import { db } from "@/lib/db";
import { $Enums, STATE } from "@prisma/client";

export async function openCloseDevice(id: number, state: $Enums.STATE | undefined) {
    if (state === $Enums.STATE.OPENED) {
        await db.device.update({
          where: {
            id: id,
          },
          data: {
            state: STATE.CLOSED,
          },
        });
    } else {
        await db.device.update({
            where: {
              id: id,
            },
            data: {
              state: STATE.OPENED,
            },
          });
    }
}    