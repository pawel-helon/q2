"use server";

import { readMany, readDevicesWithUsersNames } from "@/lib/data/read";
import { verifySession } from "@/lib/data-access-layer";

import { AddDevice } from "./_components/add-device";
import { DataTable } from "@/app/_components/data-table";
import { Navbar } from "@/components/navbar";
import { Header } from "@/app/_components/header";

import { columns } from "./_components/data-table/columns";
import { columnsMember } from "./_components/data-table/columns-member";

import { User, ROLE } from "@prisma/client";

export default async function DevicesPage() {
  const session = await verifySession();

  const role = session.role as ROLE;
  const userId = Number(session.userId);

  const users = (await readMany("users")) as User[];
  const devices = await readDevicesWithUsersNames();

  return (
    <>
      <Navbar>
        <AddDevice role={role} userId={userId} users={users} />
      </Navbar>
      <Header title="Devices" />
      {role !== ROLE.ADMIN ? (
        <DataTable columns={columnsMember} data={devices} />
      ) : (
        <DataTable columns={columns} data={devices} />
      )}
    </>
  );
}
