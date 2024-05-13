"use server";

import { redirect } from "next/navigation";

import { deleteSession } from "@/lib/session";
import {
  DeleteAccountSchema,
  FormState,
} from "@/lib/schemas/delete-account-schema";
import { db } from "@/lib/db";

export async function deleteAccount(state: FormState, formData: FormData) {
  const userId = Number(formData.get("userId"));

  const validatedFields = DeleteAccountSchema.safeParse({
    confirm: Boolean(formData.get("confirm")),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await db.user.delete({
    where: {
      id: userId,
    },
  });

  deleteSession();
  redirect("/");
}
