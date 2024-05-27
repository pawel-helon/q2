import { z } from "zod";

export const DeleteAccountSchema = z
  .object({
    confirm: z.boolean(),
  })
  .refine((data) => data.confirm === true, {
    message: "Confirmation is required",
    path: ["confirm"],
  });

export type FormState =
  | {
      errors?: {
        confirm?: string[];
      };
      message?: string;
    }
  | undefined;
