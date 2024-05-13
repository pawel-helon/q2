import { z } from "zod";

export const DeleteAccountSchema = z
  .object({
    confirm: z.boolean({
      required_error: "Confirmation is required",
  }),
  })
  .refine((data) => data.confirm === true, {
    message: "Confirmation is required",
    path: ["deleteAccount"],
  });

export type FormState =
  | {
      errors?: {
        confirm?: string[];
      };
      message?: string;
    }
  | undefined;
