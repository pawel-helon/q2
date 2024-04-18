import { db } from "@/lib/db";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/data-table/columns";
import { ROLE } from "@prisma/client";
import { Navbar } from "./_components/navbar";
import { Header } from "../_components/header";
import { IndexTemp } from "./_components/data-table/index-temp";

export default async function UsersPage() {
  const allUsers = await fetchAll();
  const allUsersWithSearch = await fetchAllWithSearch("John");
  const admins = await fetchAdmins();
  const users = await fetchUsers();

  return (
    <div>
      <Navbar />
      <Header title="Users" />
      {/* <DataTable columns={columns} data={allUsers} title="temp"/> */}
      <IndexTemp columns={columns} data={allUsers} title="temp"/>
      {/* <DataTable columns={columns} data={allUsersWithSearch} title="All users with search" /> */}
      {/* <DataTable columns={columns} data={admins} title="Admins" /> */}
      {/* @ts-ignore */}
      {/* <DataTable columns={columns} data={users} title="Users" /> */}
    </div>
  );
}

export async function fetchAll() {
  const users = await db.user.findMany();
  return users;
}

export async function fetchAllWithSearch(searchValue: string) {
  const users = await db.user.findMany({
    where: {
      name: {
        contains: searchValue,
      },
    },
  });
  return users;
}

export async function fetchAdmins() {
  const users = await db.user.findMany({
    where: {
      role: ROLE.ADMIN,
    },
  });
  return users;
}

export async function fetchUsers() {
  const users = await db.user.findMany({
    where: {
      role: ROLE.USER,
    },
  });
  return users;
}
