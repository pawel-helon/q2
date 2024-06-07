"use client";

import { Table } from "@tanstack/react-table";
import { useState } from "react";
import { Ellipsis } from "lucide-react";

import { DeleteUsers } from "./delete-users";
import { DeleteDevices } from "./delete-devices";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function MoreButton<TData>({
  table,
  ids,
  pathname,
}: {
  table: Table<TData>;
  ids: any[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <Button variant="outline" size="sm" className="ml-1 px-[3px]">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={2}
        className="bg-background shadow-black shadow-lg"
      >
        {pathname === "/devices" ? (
          <DeleteDevices ids={ids} setOpen={setOpen} table={table}/>
        ) : (
          <DeleteUsers ids={ids} setOpen={setOpen} table={table}/>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
