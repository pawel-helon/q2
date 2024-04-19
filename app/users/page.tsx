import { db } from "@/lib/db";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/data-table/columns";
import { Navbar } from "./_components/navbar";
import { Header } from "../_components/header";

export default async function UsersPage() {
  const usersWithDevices = await fetchUsers();

  return (
    <div>
      <Navbar />
      <Header title="Users" />
      <DataTable columns={columns} data={usersWithDevices} />
    </div>
  );
}

export async function fetchUsers() {
  const users = await db.user.findMany({
    include: {
      devices: true,
    }
  });

  const usersWithDevices = users.map(user => ({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    devices: user.devices[0]?.deviceName || null,
  }));

  console.log('users:', usersWithDevices);
  return usersWithDevices;
}