"use server";

import { redirect } from "next/navigation";

import { FormState } from "@/lib/schemas/sign-up";
import { ChangeNameSchema } from "@/lib/schemas/change-name-schema";
import { db } from "@/lib/db";

export async function changeName(state: FormState, formData: FormData) {
  const userId = Number(formData.get("userId"))

  const validatedField = ChangeNameSchema.safeParse({
    name: formData.get("name"),
  });


  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
    };
  }

  const { name } = validatedField.data;

  await db.user.update({
    where: {
      id: userId,
    },
    data: { name },
  });

  redirect("/account");
}
