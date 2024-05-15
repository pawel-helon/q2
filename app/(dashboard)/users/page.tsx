"use server";

import { DataTable } from "@/app/_components/data-table";
import { columns } from "./_components/data-table/columns";

import { fetchUsers } from "@/app/api/neon";

import { Navbar } from "@/components/navbar";
import { AddUser } from "./_components/add-user";
import { Header } from "@/app/_components/header";

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div>
      <Navbar>
        <AddUser />
      </Navbar>
      <Header title="Users" />
      <DataTable columns={columns} data={users} />
    </div>
  );
}
