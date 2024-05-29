"use client";

import { DataTable } from "@/app/_components/data-table";
import { columns } from "@/app/(dashboard)/users/_components/data-table/columns";

import { User } from "@prisma/client";
import { Disable } from "./disable";

export const AccessTab = ({ users }: { users: User[] }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Disable />
      <DataTable columns={columns} data={users} />
    </div>
  );
};
