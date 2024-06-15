"use client";

import { Heading, Paragraph } from "@/components/typography";
import { Table } from "@tanstack/react-table";
import { Actions } from "./actions";

export function DataTableHeader<TData>({
  table,
  pathname,
}: {
  table: Table<TData>;
  pathname: string;
}) {
  return (
    <div className="flex px-4 justify-between items-center">
      <div className="flex gap-2 items-center">
        <Heading variant="h3">
          {pathname === "/users" && "User"}
          {pathname === "/devices" && "Device"}
          {pathname === "/notifications" && "Notifications"}
          {pathname.startsWith("/devices/") && "Access list"}
        </Heading>
        <Paragraph variant="small-thick" className="text-muted-foreground">
          ({table.getCoreRowModel().rows.length})
        </Paragraph>
      </div>
      <Actions
        table={table}
        pathname={pathname}
      />
    </div>
  );
}
