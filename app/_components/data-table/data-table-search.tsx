"use client";

import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { Search } from "lucide-react";

export function DataTableSearch<TData>({
  table,
  pathname,
}: {
  table: Table<TData>;
  pathname: string;
}) {

  let searchColumn: string = "";
  if (pathname === "/users") {
    searchColumn = "name";
  } else if (pathname === "/devices") {
    searchColumn = "deviceName";
  } else if (pathname === "/notifications") {
    searchColumn = "title";
  }

  return (
    <div className="flex justify-between border-b border-border pb-1 my-4 xs:my-12">
      <div className="flex items-center">
        <Search className="text-muted-foreground" />
        <Input
          placeholder={
            pathname === "/notifications" ? "Search by title" : "Search by name"
          }
          spellCheck={false}
          value={
            (table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn(searchColumn)?.setFilterValue(event.target.value)
          }
          className="h-9 flex items-center border-none bg-background text-white"
        />
      </div>
    </div>
  );
}
