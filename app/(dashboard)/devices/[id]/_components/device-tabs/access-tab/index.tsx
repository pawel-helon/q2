"use client";

import { DataTable } from "@/app/_components/data-table";

import { Disable } from "./disable";
import { columns } from "./data-table/columns";

import { User } from "@prisma/client";

export const AccessTab = ({ users }: { users: User[] }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Disable />
      <DataTable columns={columns} data={users} />
    </div>
  );
};
