import { z } from "zod";

export const AddDeviceSchema = z.object({
  deviceName: z
    .string()
    .min(2, { message: "Device name must be at least 2 characters long" })
    .trim(),
  streetAddress: z
    .string()
    .min(2, { message: "Street address must be at least 2 characters long" })
    .trim(),
  SIM: z
    .string()
    .min(9, { message: "SIM must be at least 9 characters long" })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        deviceName?: string[];
        streetAddress?: string[];
        SIM?: string[];
      };
      message?: string;
    }
  | undefined;
