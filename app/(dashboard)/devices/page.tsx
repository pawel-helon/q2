"use server";
import { Header } from "@/app/_components/header";
import { DataTable } from "@/app/_components/data-table";
import { fetchDevices, fetchOwners } from "@/app/api/neon";

import { columns } from "./_components/data-table/columns";
import { Navbar } from "./_components/navbar";
import { columnsMember } from "./_components/data-table/columns-member";
import { verifySession } from "@/lib/data-access-layer";

export default async function DevicesPage() {
  const session = await verifySession();
  const role = session?.role;

  const allDevices = await fetchDevices();
  const owners = await fetchOwners();

  return (
    <div>
      <Navbar owners={owners} />
      <Header title="Devices" />
      {role === "org:member" ? (
        <DataTable columns={columnsMember} data={allDevices} />
      ) : (
        <DataTable columns={columns} data={allDevices} />
      )}
    </div>
  );
}
