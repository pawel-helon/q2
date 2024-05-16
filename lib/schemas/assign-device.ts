import { z } from "zod";

export const AssignDeviceSchema = z.object({
  deviceId: z.string().min(1, { message: "Please select device." }),
});

export type FormState =
  | {
      errors?: {
        deviceId?: string[];
      };
      message?: string;
    }
  | undefined;
