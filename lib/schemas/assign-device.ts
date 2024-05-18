import { z } from "zod";

export const AssignDeviceSchema = z.object({
  deviceId: z.string().min(1, { message: "No device has been selected" }),
});

export type FormState =
  | {
      errors?: {
        deviceId?: string[];
      };
      message?: string;
    }
  | undefined;
