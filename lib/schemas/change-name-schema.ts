import { z } from "zod";

export const ChangeNameSchema = z.object({
  name: z
  .string()
  .min(2, { message: 'Name must be at least 2 characters long.' })
  .trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[]
      };
      message?: string;
    }
  | undefined;
