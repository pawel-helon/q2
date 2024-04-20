import { Header } from "../_components/header";
import { DataTable } from "@/app/_components/data-table";
import { fetchUsers } from "@/app/api/neon";

import { columns } from "./_components/data-table/columns";
import { Navbar } from "./_components/navbar";

export default async function UsersPage() {
  const allUsers = await fetchUsers();

  return (
    <div>
      <Navbar />
      <Header title="Users" />
      <DataTable columns={columns} data={allUsers} />
    </div>
  );
}