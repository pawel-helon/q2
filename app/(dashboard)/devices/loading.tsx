import React from "react";
import { fetchOwners } from "@/app/api/neon";
import { Loader, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Header } from "@/app/_components/header";
import { Navbar } from "@/components/navbar";
import { AddDevice } from "./_components/add-device";
import { verifySession } from "@/lib/data-access-layer";

export default async function Loading() {
  const session = await verifySession();

  const role = String(session?.role);
  const userId = Number(session?.userId);
  const owners = await fetchOwners();

  return (
    <div>
      <Navbar>
        <AddDevice role={role} userId={userId} owners={owners} />
      </Navbar>
      <Header title="Devices" />
      <div className="flex justify-between border-b border-border pb-1 my-12">
        <div className="flex items-center">
          <Search className="text-muted-foreground" />
          <Input
            placeholder="Search by name"
            className="h-9 flex items-center border-none bg-background text-white"
          />
        </div>
      </div>
      <div className="w-full h-[400px] flex items-center justify-center mt-12 py-4 border border-border shadow-black shadow-2xl rounded-lg">
        <Loader />
      </div>
    </div>
  );
}
