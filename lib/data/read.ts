"use server";

import { db } from "@/lib/db";
import { Device, Notification, ROLE, User } from "@prisma/client";

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
    | "users"
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
      case "users":
        result = device.usersIds;
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
    if (!property) {
      result = (await db.user.findMany()) as User[];
      return result;
    } else if (property === "email") {
      result = await db.user.findMany({
        select: {
          id: true,
          email: true,
        },
      });
      return result;
    } else if (property === "name") {
      result = await db.user.findMany({
        select: {
          id: true,
          name: true,
        },
      });
      return result;
    } else if (property === "password") {
      result = await db.user.findMany({
        select: {
          id: true,
          password: true,
        },
      });
      return result;
    } else if (property === "role") {
      result = await db.user.findMany({
        select: {
          id: true,
          role: true,
        },
      });
      return result;
    } else {
      throw new Error(`Invalid proerty`);
    }
  } else if (entity === "devices") {
    if (!property) {
      result = (await db.device.findMany()) as Device[];
      return result;
    } else if (property === "deviceName") {
      result = await db.device.findMany({
        select: {
          id: true,
          deviceName: true,
        },
      });
      return result;
    } else if (property === "streetAddress") {
      result = await db.device.findMany({
        select: {
          id: true,
          streetAddress: true,
        },
      });
      return result;
    } else if (property === "city") {
      result = await db.device.findMany({
        select: {
          id: true,
          city: true,
        },
      });
      return result;
    } else if (property === "country") {
      result = await db.device.findMany({
        select: {
          id: true,
          country: true,
        },
      });
      return result;
    } else if (property === "SIM") {
      result = await db.device.findMany({
        select: {
          id: true,
          SIM: true,
        },
      });
    } else if (property === "status") {
      result = await db.device.findMany({
        select: {
          id: true,
          status: true,
        },
      });
      return result;
    } else if (property === "state") {
      result = await db.device.findMany({
        select: {
          id: true,
          state: true,
        },
      });
    } else if (property === "model") {
      result = await db.device.findMany({
        select: {
          id: true,
          model: true,
        },
      });
    } else {
      throw new Error(`Invalid property`);
    }
  }
  return result;
}

export async function readUserByEmail(email: string) {
  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  });
  return user!.id;
}

export async function readDeviceByUser(userId: number) {
  const devices = await db.device.findMany({
    where: {
      ownerId: userId,
    },
  });
  return devices;
}

export async function readDevicesWithUsersNames() {
  const devices = await db.device.findMany();

  const devicesWithUsersNames = await Promise.all(
    devices.map(async (device) => {
      const owner = await db.user.findUnique({
        where: {
          id: device.ownerId,
        },
      });

      return {
        id: device.id,
        deviceName: device.deviceName,
        streetAddress: device.streetAddress,
        city: device.city,
        country: device.country,
        model: device.model,
        SIM: device.SIM,
        status: device.status,
        owner: owner?.name || null,
      };
    })
  );

  return devicesWithUsersNames;
}

export async function readUsersWithDevices() {
  const users = await db.user.findMany({
    include: {
      devices: true,
    },
  });

  const usersWithDevices = users.map((user) => ({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    devices: user.devices[0]?.deviceName || null,
  }));

  return usersWithDevices;
}

export async function readNotificationsForUser(userId: number) {
  const notifications = (await db.notification.findMany({
    where: { userId: userId },
  })) as Notification[];

  return notifications;
}

export async function readEmails() {
  const emails = await db.user.findMany({
    select: {
      email: true,
    },
  });

  return emails;
}

export async function readUsersWithAccess(deviceId: number) {
  const array = (await readUnique(deviceId, "device", "users")) as number[];

  const users = await db.user.findMany({
    where: {
      id: {
        in: array,
      },
    },
  });

  return users;
}

export async function readManyIds(entity: "devices" | "users") {
  let result;
  if (entity === "devices") {
    result = await db.device.findMany({
      select: {
        id: true,
      },
      orderBy: {
        id: "asc",
      },
    });
  } else if (entity === "users") {
    result = await db.user.findMany({
      select: {
        id: true,
      },
      orderBy: {
        id: "asc",
      },
    });
  }
  return result;
}

export async function updateRolesTanstack(idsArray: number[], action: string) {
  if (action === "accept") {
    for (const index of idsArray) {
      const request = await db.notification.findUnique({
        where: {
          id: index,
        },
      });
      await db.user.update({
        where: {
          id: request!.requester,
        },
        data: {
          role: request!.requestedRole,
        },
      });
      await db.notification.delete({
        where: {
          id: index,
        },
      });
    }
  } else if (action === "decline") {
    for (const index of idsArray) {
      await db.notification.delete({
        where: {
          id: index,
        },
      });
    }
  }
}
