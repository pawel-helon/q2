"use server";

import { redirect, useRouter } from "next/navigation";

import { remove } from "@/lib/data/delete";
import { deleteSession } from "@/lib/session";

import {
  DeleteAccountSchema,
  FormState,
} from "@/lib/schemas/delete-account-schema";

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

  // removeUser(userId).then((response) => {
  //   if (response === true) {
  //     deleteSession();
  //     redirect("/");
  //   }
  // })
  // deleteSession();
  // redirect("/");
}
