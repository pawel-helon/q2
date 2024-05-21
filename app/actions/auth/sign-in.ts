"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { createSession } from "@/lib/session";

export async function signin(email: string, password: string) {
  const existingUser = await db.user.findUnique({
    where: {
      email: email,
    },
  });
  const match = await bcrypt.compare(password, existingUser!.password);

  if (match) {
    await createSession(existingUser!.id, existingUser!.role);
    redirect("/devices");
  } else {
    return false;
  }
}
