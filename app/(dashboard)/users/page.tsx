import { DataTable } from "@/app/_components/data-table";
import { fetchUsers } from "@/app/api/neon";

import { columns } from "./_components/data-table/columns";
import { Header } from "@/app/_components/header";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default async function UsersPage() {
  const allUsers = await fetchUsers();

  return (
    <div>
      <Navbar>
        <div className="flex gap-2 justify-end">
          <Button>
            <Plus className="-ml-2 mr-2" />
            Add user
          </Button>
        </div>
      </Navbar>
      <Header title="Users" />
      <DataTable columns={columns} data={allUsers} />
    </div>
  );
}
