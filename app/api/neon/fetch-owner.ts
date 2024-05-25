"use server";

import { db } from "@/lib/db";
import { owner } from "@/types";

export async function fetchOwner(ownerId: number) {
  const owner = await db.user.findUnique({
    where: {
      id: ownerId,
    },
  });
  return owner;
}

export async function fetchOwnerByEmail(email: string, column: keyof owner) {
  const owner = await db.user.findUnique({
    where: {
      email: email,
    },
  });
  return owner![column]; 
}