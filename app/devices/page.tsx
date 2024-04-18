import { db } from "@/lib/db";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/data-table/columns";
import { Navbar } from "./_components/navbar";
import { Header } from "../_components/header";

export default async function UsersPage() {
  const allDevices = await fetchAll();

  return (
    <div>
      <Navbar />
      <Header title="Devices" />
      <DataTable columns={columns} data={allDevices} />
    </div>
  );
}

export async function fetchAll() {
  const devices = await db.device.findMany();
  return devices;
}