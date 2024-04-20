import { db } from "@/lib/db";

export async function fetchDevices() {
  const devices = await db.device.findMany();

  const devicesWithOwners = await Promise.all(devices.map(async (device) => {
    const ownerId = device.ownerId;

    const owner = await db.user.findUnique({
      where: {
        id: ownerId,
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
  }));

  return devicesWithOwners;
}

export async function fetchUsers() {
  const users = await db.user.findMany({
    include: {
      devices: true,
    }
  });

  const usersWithDevices = users.map(user => ({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    devices: user.devices[0]?.deviceName || null,
  }));

  return usersWithDevices;
}

export async function fetchOwners() {
  const users = await db.user.findMany();
  return users;
}