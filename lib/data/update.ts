"use server";

import { db } from "@/lib/db";
import { STATUS, ROLE } from "@prisma/client";
import { readUnique } from "./read";

export async function update(
  id: number,
  entity: "user" | "device" | "notification",
  field:
    | "name"
    | "email"
    | "password"
    | "role"
    | "deviceName"
    | "streetAddress"
    | "city"
    | "country"
    | "model"
    | "SIM"
    | "status"
    | "state"
    | "owner"
    | "users"
    | "disabledFrom"
    | "disabledTo"
    | "requestedRole",
  value: any
) {
  if (entity === "user") {
    switch (field) {
      case "name":
        await db.user.update({
          where: {
            id: id,
          },
          data: { name: value },
        });
        break;
      case "email":
        await db.user.update({
          where: {
            id: id,
          },
          data: { email: value },
        });
        break;
      case "password":
        await db.user.update({
          where: {
            id: id,
          },
          data: { password: value },
        });
        break;
      case "role":
        await db.user.update({
          where: {
            id: id,
          },
          data: { role: value },
        });
        break;
      default:
        throw new Error(`Invalid field: ${field}`);
    }
  } else if (entity === "device") {
    switch (field) {
      case "deviceName":
        await db.device.update({
          where: {
            id: id,
          },
          data: { deviceName: value },
        });
        break;
      case "streetAddress":
        await db.device.update({
          where: {
            id: id,
          },
          data: { streetAddress: value },
        });
        break;
      case "city":
        await db.device.update({
          where: {
            id: id,
          },
          data: { city: value },
        });
        break;
      case "country":
        await db.device.update({
          where: {
            id: id,
          },
          data: { country: value },
        });
        break;
      case "model":
        await db.device.update({
          where: {
            id: id,
          },
          data: { model: value },
        });
        break;
      case "SIM":
        await db.device.update({
          where: {
            id: id,
          },
          data: { SIM: value },
        });
        break;
      case "status":
        await db.device.update({
          where: {
            id: id,
          },
          data: { status: value },
        });
        break;
      case "state":
        await db.device.update({
          where: {
            id: id,
          },
          data: { state: value },
        });
        break;
      case "owner":
        await db.device.update({
          where: {
            id: id,
          },
          data: { ownerId: value },
        });
        break;
      case "users":
        await db.device.update({
          where: {
            id: id,
          },
          data: { usersIds: value },
        });
        break;
      case "disabledFrom":
        await db.device.update({
          where: {
            id: id,
          },
          data: { disabledFrom: value },
        });
        break;
      case "disabledTo":
        await db.device.update({
          where: {
            id: id,
          },
          data: { disabledTo: value },
        });
        break;
      default:
        throw new Error(`Invalid field: ${field}`);
    }
  } else if (entity === "notification") {
    switch (field) {
      case "requestedRole":
        await db.notification.update({
          where: {
            id: id,
          },
          data: { requestedRole: value },
        });
        break;
      default:
        throw new Error(`Invalid field: ${field}`);
    }
  }
}

export async function updateRole(idsArray: number[], role: ROLE) {
  if (role === ROLE.ADMIN) {
    for (const index of idsArray) {
      await db.user.update({
        where: {
          id: index,
        },
        data: {
          role: ROLE.ADMIN,
        },
      });
    }
  } else if (role === ROLE.OWNER) {
    for (const index of idsArray) {
      await db.user.update({
        where: {
          id: index,
        },
        data: {
          role: ROLE.OWNER,
        },
      });
    }
  } else {
    for (const index of idsArray) {
      await db.user.update({
        where: {
          id: index,
        },
        data: {
          role: ROLE.ENDUSER,
        },
      });
    }
  }
}

export async function updateStatus(ids: number[], status: STATUS) {
  if (status === STATUS.ACTIVE) {
    for (const index of ids) {
      await db.device.update({
        where: {
          id: index,
        },
        data: {
          status: STATUS.ACTIVE,
        },
      });
    }
  } else {
    for (const index of ids) {
      await db.device.update({
        where: {
          id: index,
        },
        data: {
          status: STATUS.INACTIVE,
        },
      });
    }
  }
}

export async function updateDeviceDetails(
  deviceId: number,
  owner: string,
  city: string,
  country: string,
  model: string,
  deviceName: string,
  streetAddress: string,
  SIM: string
) {
  const updatedDevice = await db.device.update({
    where: {
      id: deviceId,
    },
    data: {
      owner: {
        connect: {
          email: owner,
        },
      },
      city: city,
      country: country,
      model: model,
      deviceName: deviceName,
      streetAddress: streetAddress,
      SIM: SIM,
    },
  });

  if (!updatedDevice) {
    return {
      message: "An error occurred while updating device details.",
    };
  }

  return updatedDevice;
}

export async function updateUsersWithAccess(
  deviceId: number,
  ids: number | number[]
) {
  const currentUsersWithAccess = (await readUnique(
    deviceId,
    "device",
    "users"
  )) as number[];

  let updatedUsersWithAccess;
  if (typeof ids === "number") {
    updatedUsersWithAccess = Array.from(
      new Set([...currentUsersWithAccess, ids])
    ); // Add users (dropdown menu)
  } else {
    updatedUsersWithAccess = currentUsersWithAccess.filter(
      (id) => !ids.includes(id)
    ); // Remove users (table)
  }

  await update(deviceId, "device", "users", updatedUsersWithAccess);
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