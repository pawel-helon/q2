"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export async function deleteAccount(userId: number) {
    await db.user.delete({
      where: {
        id: userId,
      },
    });
    redirect("/");
}
