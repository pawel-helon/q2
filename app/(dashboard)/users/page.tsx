"use server";

import { readUsersWithDevices } from "@/lib/data/read";
import { verifySession } from "@/lib/data-access-layer";

import { DataTable } from "@/app/_components/data-table";
import { Navbar } from "@/components/navbar";
import { AddUser } from "./_components/add-user";

import { columns } from "./_components/data-table/columns";

import { ROLE } from "@prisma/client";
import { Heading } from "@/components/typography";

export default async function UsersPage() {
  const session = await verifySession();
  const role = session.role as ROLE;

  const users = await readUsersWithDevices();

  return (
    <>
      {role === ROLE.ADMIN && (
        <div className="relative">
          <Navbar>
            <AddUser />
          </Navbar>
          <Heading variant="h1" className="mt-20 pt-8 xs:mt-12 xs:pt-0">
            Users
          </Heading>
          <DataTable columns={columns} data={users} />
        </div>
      )}
    </>
  );
}
