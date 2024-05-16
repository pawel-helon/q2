import { z } from "zod";

export const ChangeRoleSchema = z.object({
  role: z
    .string()
    .min(1, { message: "Please select role." })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        role?: string[];
      };
      message?: string;
    }
  | undefined;
