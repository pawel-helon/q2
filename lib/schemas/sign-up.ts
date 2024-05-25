import { z } from "zod";

export const SignupFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .trim(),
    email: z.string().email({ message: "Please enter a valid email" }).trim(),
    password: z
      .string()
      .min(8, { message: "be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "contain at least one letter" })
      .regex(/[0-9]/, { message: "contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "contain at least one special character",
      })
      .trim(),
    confirm: z
      .string()
      .min(8, { message: "be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "contain at least one letter" })
      .regex(/[0-9]/, { message: "contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "contain at least one special character",
      })
      .trim(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        confirm?: string[];
      };
      message?: string;
    }
  | undefined;

export type CreateUserFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        confirm?: string[];
      };
      message?: string;
    }
  | undefined;
