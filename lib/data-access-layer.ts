import "server-only";

import { cookies } from "next/headers";
import { cache } from "react";
import { decrypt } from "./session";
import { redirect } from "next/navigation";
import { db } from "./db";

export const verifySession = cache(async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect("/");
  }

  return { isAuth: true, userId: session.userId, role: session.role };
});

// use in layouts
export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = await db.user.findMany({
      where: {
        id: session.userId,
      },
      select: {
        id: true,
        role: true,
      },
    });
    return data[0];
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
