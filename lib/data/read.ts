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
    }
  }
  return result;
}

export async function readMany(entity: string, field: string) {
  let result;
  switch (entity) {
    case "users":
      switch (field) {
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
        default:
          throw new Error(`Invalid field '${field}' for entity '${entity}'.`);
      }
      break;
    case "devices":
      switch (field) {
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
          throw new Error(`Invalid field '${field}' for entity '${entity}'.`);
      }
      break;
    default:
      throw new Error(`Invalid entity '${entity}'.`);
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

