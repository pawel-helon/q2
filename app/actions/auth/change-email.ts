"use server";

import { FormState } from "@/lib/schemas/sign-up";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { ChangeEmailSchema } from "@/lib/schemas/change-email-schema";
import { revalidatePath } from "next/cache";

export async function changeEmail(state: FormState, formData: FormData) {
  const userId = Number(formData.get("userId"))

  const validatedField = ChangeEmailSchema.safeParse({
    email: formData.get("email"),
  });


  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedField.data;

  await db.user.update({
    where: {
      id: userId,
    },
    data: { email },
  });

  redirect("/");
}
