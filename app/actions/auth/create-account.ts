"use server";

import { ROLE } from "@prisma/client";

import { db } from "@/lib/db";

export async function createAccount(
  name: string,
  email: string,
  role: ROLE,
  hashedPassword: string
) {
  const newUser = await db.user.create({
    data: {
      name: name,
      email: email,
      role: role,
      password: hashedPassword,
    },
  });

  if (newUser) {
    return true
  }
}
