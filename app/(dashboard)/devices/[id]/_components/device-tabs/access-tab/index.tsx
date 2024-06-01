"use client";

import { DataTable } from "@/app/_components/data-table";

import { Disable } from "./disable";
import { columns } from "./data-table/columns";

import { User, Device } from "@prisma/client";

export const AccessTab = ({ users, device }: { users: User[], device: Device }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Disable device={device}/>
      <DataTable columns={columns} data={users} />
    </div>
  );
};
