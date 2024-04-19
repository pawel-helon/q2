import { db } from "@/lib/db";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/data-table/columns";
import { Navbar } from "./_components/navbar";
import { Header } from "../_components/header";

export default async function UsersPage() {
  const allDevices = await fetchDevices();

  return (
    <div>
      <Navbar />
      <Header title="Devices" />
      <DataTable columns={columns} data={allDevices} />
    </div>
  );
}
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