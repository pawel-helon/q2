"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { SignInFormSchema, FormState } from "@/lib/schemas/sign-in";
import { createSession } from "@/lib/session";

export async function signin(state: FormState, formData: FormData) {
  const validatedFields = SignInFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await db.user.findUnique({
    where: {
      email: email,
    },
  });
  
  const match = await bcrypt.compare(password, existingUser!.password)

  if(match) {
    await createSession(existingUser!.id, existingUser!.role)
    redirect("/devices");
  } else {
    alert("Invalid credentials")
  }
}
