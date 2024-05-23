"use server"

import { db } from "@/lib/db";

export async function fetchOwner(ownerId: number) {
    const owner = await db.user.findUnique({
      where: {
        id: ownerId,
      },
    });
    return owner;
}

export async function fetchOwnerByEmail(email: string) {
    const owner = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    return owner?.id;
}