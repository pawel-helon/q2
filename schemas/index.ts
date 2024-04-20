import { z } from "zod";

export const addDeviceSchema = z.object({
  deviceName: z.string().trim(),
  streetAddress: z.string().trim(),
  city: z.string().trim(),
  country: z.string().trim(),
  model: z.string().trim(),
  SIM: z.string().trim(),
  owner: z.string().trim(),
});
