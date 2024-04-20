import { Header } from "@/app/_components/header";
import { DataTable } from "@/app/_components/data-table";
import { fetchDevices } from "@/app/api/neon";

import { columns } from "./_components/data-table/columns";
import { Navbar } from "./_components/navbar";

export default async function UsersPage() {
  const allDevices = await fetchDevices();

  return (
    <div>
      <Navbar />
      <Header title="Devices" />
      <DataTable columns={columns} data={allDevices} />
    </div>
  );
}