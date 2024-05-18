import { z } from "zod";

export const ChangeRoleSchema = z.object({
  role: z
    .string()
    .min(1, { message: "No role has been selected." })
});

export type FormState =
  | {
      errors?: {
        role?: string[];
      };
      message?: string;
    }
  | undefined;
