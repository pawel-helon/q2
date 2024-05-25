import { z } from "zod";

export const AddDeviceSchemaAdmin = z.object({
  owner: z.string().min(1, { message: "Select owner" }),
  city: z.string().min(1, { message: "Select city" }),
  country: z.string().min(1, { message: "Select country" }),
  model: z.string().min(1, { message: "Select model" }),
  deviceName: z
    .string()
    .min(2, { message: "Device name must be at least 2 characters long" })
    .trim(),
  streetAddress: z
    .string()
    .min(2, { message: "Address must be at least 2 characters long" })
    .trim(),
  SIM: z.string().min(1, { message: "Enter SIM card number" }).trim(),
});

export const AddDeviceSchemaEndUser = z.object({
  city: z.string().min(1, { message: "Select city" }),
  country: z.string().min(1, { message: "Select country" }),
  model: z.string().min(1, { message: "Select model" }),
  deviceName: z
    .string()
    .min(2, { message: "Device name must be at least 2 characters long" })
    .trim(),
  streetAddress: z
    .string()
    .min(2, { message: "Address must be at least 2 characters long" })
    .trim(),
  SIM: z.string().min(1, { message: "Enter SIM card number" }).trim(),
});

export type FormState =
  | {
      errors?: {
        owner?: string[];
        city?: string[];
        country?: string[];
        model?: string[];
        deviceName?: string[];
        streetAddress?: string[];
        SIM?: string[];
      };
      message?: string;
    }
  | undefined;

  export type CreateDeviceFormState =
  | {
      errors?: {
        owner?: string[];
        city?: string[];
        country?: string[];
        model?: string[];
        deviceName?: string[];
        streetAddress?: string[];
        SIM?: string[];
      };
      message?: string;
    }
  | undefined;

