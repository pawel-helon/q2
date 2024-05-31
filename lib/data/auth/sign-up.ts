"use server";

import bcrypt from "bcryptjs";

import { SignupFormSchema, FormState } from "@/lib/schemas/sign-up";
import { db } from "@/lib/db";
import { ROLE } from "@prisma/client";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm: formData.get("confirm"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await db.user.create({
    data: {
      email: email,
      name: name,
      password: hashedPassword,
      role: ROLE.ENDUSER,
    },
  });

  if (!newUser) {
    return {
      message: "An error occurred while creating your account.",
    };
  }
  redirect("/sign-in");
}