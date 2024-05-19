"use server";

import { Header } from "@/app/_components/header";
import { DataTable } from "@/app/_components/data-table";
import { fetchDevices, fetchOwners } from "@/app/api/neon";

import { columns } from "./_components/data-table/columns";
import { columnsMember } from "./_components/data-table/columns-member";
import { verifySession } from "@/lib/data-access-layer";
import { Navbar } from "@/components/navbar";
import { AddDevice } from "./_components/add-device";

export default async function DevicesPage() {
  const session = await verifySession();

  const role = String(session?.role);
  const userId = Number(session?.userId);
  const owners = await fetchOwners();

  const allDevices = await fetchDevices();

  return (
    <>
      <Navbar>
        <AddDevice role={role} userId={userId} owners={owners} />
      </Navbar>
      <Header title="Devices" />
      {role !== "ADMIN" ? (
        <DataTable columns={columnsMember} data={allDevices} />
      ) : (
        <DataTable columns={columns} data={allDevices} />
      )}
    </>
  );
}
