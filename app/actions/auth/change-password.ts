"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

import { ChangePasswordSchema } from "@/lib/schemas/change-password-schema";
import { db } from "@/lib/db";
import { FormState } from "@/lib/schemas/sign-up";

export async function changePassword(state: FormState, formData: FormData) {
  const userId = Number(formData.get("userId"))

  const validatedField = ChangePasswordSchema.safeParse({
    password: formData.get("password"),
  });


  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
    };
  }

  const { password } = validatedField.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: {
      id: userId,
    },
    data: { password: hashedPassword },
  });

  redirect("/account");
}
