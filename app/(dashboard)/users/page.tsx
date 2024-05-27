"use server";

import { readUsersWithDevices } from "@/lib/data/read";
import { verifySession } from "@/lib/data-access-layer";

import { DataTable } from "@/app/_components/data-table";
import { Navbar } from "@/components/navbar";
import { AddUser } from "./_components/add-user";
import { Header } from "@/app/_components/header";

import { columns } from "./_components/data-table/columns";

import { ROLE } from "@prisma/client";

export default async function UsersPage() {
  const session = await verifySession();
  const role = session.role as ROLE;

  const users = await readUsersWithDevices();

  return (
    <>
      {role === ROLE.ADMIN && (
        <>
          <Navbar>
            <AddUser />
          </Navbar>
          <Header title="Users" />
          <DataTable columns={columns} data={users} />
        </>
      )}
    </>
  );
}
