"use server";

import { readMany, readDevicesWithUsersNames } from "@/lib/data/read";
import { verifySession } from "@/lib/data-access-layer";

import { AddDevice, AddDeviceMobile } from "../devices/_components/add-device";
import { DataTable } from "@/app/_components/data-table";
import { Navbar } from "@/components/navbar";
import { Heading } from "@/components/typography";

import { columnsMember } from "../devices/_components/data-table/columns-member";
import { columns } from "../devices/_components/data-table/columns";

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
      <Heading variant="h1" className="mt-20 pt-8 xs:mt-12 xs:pt-0">
        Devices
      </Heading>
      {role !== ROLE.ADMIN ? (
        <DataTable columns={columnsMember} data={devices} />
      ) : (
        <DataTable columns={columns} data={devices} />
      )}
      <AddDeviceMobile role={role} userId={userId} users={users} />
    </>
  );
}
