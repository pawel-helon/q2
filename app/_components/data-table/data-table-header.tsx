"use client";

import { Heading, Paragraph } from "@/components/typography";
import { Table } from "@tanstack/react-table";
import { Actions } from "./actions";

export function DataTableHeader<TData>({
  table,
  numberOfResults,
  anySelectedRow,
  pathname,
}: {
  table: Table<TData>;
  numberOfResults: number;
  anySelectedRow: boolean;
  pathname: string;
}) {
  return (
    <div className="flex px-4 justify-between items-center">
      <div className="flex gap-2 items-center">
        <Heading variant="h3">
          {pathname === "/users" && "User"}
          {pathname === "/devices" && "Device"}
          {pathname.startsWith("/devices/") && "Access"}
        </Heading>
        <Paragraph variant="small-thick" className="text-muted-foreground">
          ({numberOfResults})
        </Paragraph>
      </div>
      <Actions
        table={table}
        anySelectedRow={anySelectedRow}
        pathname={pathname}
      />
    </div>
  );
}
