import { db } from "@/lib/db";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/data-table/columns";
import { Navbar } from "./_components/navbar";
import { Header } from "../_components/header";

export default async function UsersPage() {
  const allUsers = await fetchAll();

  return (
    <div>
      <Navbar />
      <Header title="Users" />
      <DataTable columns={columns} data={allUsers} />
    </div>
  );
}

export async function fetchAll() {
  const users = await db.user.findMany();
  return users;
}