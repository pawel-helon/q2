"use server";

import { db } from "@/lib/db";
import { Device, User } from "@prisma/client";

export async function readUnique(
  id: number,
  entity: "user" | "device",
  property?:
    | "name"
    | "email"
    | "password"
    | "role"
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
      case "email":
        result = user.email;
        break;
      case "name":
        result = user.name;
        break;
      case "role":
        result = user.role;
        break;
      case "password":
        result = user.password;
        break;
      default:
        throw new Error("Invalid property");
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
      case "deviceName":
        result = device.deviceName;
        break;
      case "streetAddress":
        result = device.status;
        break;
      case "city":
        result = device.city;
        break;
      case "country":
        result = device.country;
        break;
      case "model":
        result = device.model;
        break;
      case "SIM":
        result = device.SIM;
        break;
      case "state":
        result = device.state;
        break;
      case "model":
        result = device.model;
        break;
      default:
        throw new Error("Invalid property");
    }
  }
  return result;
}

export async function readMany(
  entity: "users" | "devices",
  property?:
    | "email"
    | "name"
    | "password"
    | "role"
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
  if (entity === "users") {
    const users = (await db.user.findMany()) as User[];
    if (!property) {
      return users;
    }
    switch (property) {
      case "email":
        result = await db.user.findMany({
          select: {
            email: true,
          },
        });
        break;
      case "name":
        result = await db.user.findMany({
          select: {
            name: true,
          },
        });
        break;
      case "password":
        result = await db.user.findMany({
          select: {
            password: true,
          },
        });
        break;
      case "role":
        result = await db.user.findMany({
          select: {
            role: true,
          },
        });
        break;
      default:
        throw new Error("Invalid property");
    }
  } else if (entity === "devices") {
    const devices = (await db.device.findMany()) as Device[];
    if (!property) {
      return devices;
    }
    switch (property) {
      case "deviceName":
        result = await db.device.findMany({
          select: {
            deviceName: true,
          },
        });
        break;
      case "streetAddress":
        result = await db.device.findMany({
          select: {
            streetAddress: true,
          },
        });
        break;
      case "city":
        result = await db.device.findMany({
          select: {
            city: true,
          },
        });
        break;
      case "country":
        result = await db.device.findMany({
          select: {
            country: true,
          },
        });
        break;
      case "model":
        result = await db.device.findMany({
          select: {
            model: true,
          },
        });
        break;
      case "SIM":
        result = await db.device.findMany({
          select: {
            SIM: true,
          },
        });
        break;
      case "status":
        result = await db.device.findMany({
          select: {
            status: true,
          },
        });
        break;
      case "state":
        result = await db.device.findMany({
          select: {
            state: true,
          },
        });
        break;
      default:
        throw new Error("Invalid property");
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
