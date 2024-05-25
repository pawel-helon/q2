"use server";

import { db } from "@/lib/db";
import { Device, User } from "@prisma/client";

export async function read(
  id: number,
  entity: "user" | "device",
  property?:
    | "role"
    | "name"
    | "email"
    | "deviceName"
    | "streetAddress"
    | "city"
    | "country"
    | "SIM"
    | "status"
    | "state"
    | "model"
) {
  let result;
  if (entity === "user") {
    const user = (await db.user.findUnique({
      where: {
        id: id,
      },
    })) as User;
    if (!property) {
      return user;
    }
    switch (property) {
      case "role":
        result = user.role;
        break;
      case "name":
        result = user.name;
        break;
      case "email":
        result = user.email;
        break;
    }
  } else if (entity === "device") {
    const device = (await db.device.findUnique({
      where: {
        id: id,
      },
    })) as Device;
    if (!property) {
      return device;
    }
    switch (property) {
      case "status":
        result = device.status;
        break;
      case "state":
        result = device.state;
        break;
      case "model":
        result = device.model;
        break;
    }
  }
  return result;
}

export async function readUserByEmail(email: string, column: keyof User) {
  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  });
  return user![column];
}
