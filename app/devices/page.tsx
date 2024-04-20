import { Header } from "@/app/_components/header";
import { DataTable } from "@/app/_components/data-table";
import { fetchDevices, fetchOwners } from "@/app/api/neon";

import { columns } from "./_components/data-table/columns";
import { Navbar } from "./_components/navbar";

export default async function UsersPage() {
  const allDevices = await fetchDevices();
  const owners = await fetchOwners();

  return (
    <div>
      <Navbar owners={owners} />
      <Header title="Devices" />
      <DataTable columns={columns} data={allDevices} />
    </div>
  );
}