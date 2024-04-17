"use server";

import { db } from "@/lib/db";
import { $Enums, STATUS } from "@prisma/client";

export const searchDevices = async (value: string) => {
  const devices = await db.device.findMany({
    where: {
      streetAddress: {
        contains: value
      },
    }
  });
  return devices;
};

export const fetchAllDevices = async (searchValue: string) => {
  const allDevices = await db.device.findMany({
    where: {
      deviceName: {
        contains: searchValue
      },
    }
  });
  return allDevices;
};

export const fetchActiveDevices = async (searchValue: string) => {
  const devices = await db.device.findMany({
    where: {
      status: STATUS.ACTIVE,
      deviceName: {
        contains: searchValue
      },
    }
  });
  return devices;
}

export const fetchInactiveDevices = async (searchValue: string) => {
  const devices = await db.device.findMany({
    where: {
      status: STATUS.INACTIVE,
      deviceName: {
        contains: searchValue
      },
    }
  });
  return devices;
}