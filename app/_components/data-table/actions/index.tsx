"use client";

import { Table } from "@tanstack/react-table";

import { TableColumns } from "../table-columns";
import { ChangeRole } from "@/app/_components/data-table/actions/change-role";
import { ChangeStatus } from "@/app/_components/data-table/actions/change-status";
import { Requests } from "./requests";
import { MoreButton } from "./more-button";
import { Div } from "@/components/motion-ui/div";
import { RemoveUsers } from "./remove-users";

export function Actions<TData>({
  table,
  pathname,
}: {
  table: Table<TData>;
  pathname: string;
}) {
  const selectedRowsActions = table.getSelectedRowModel().rows;
  // @ts-ignore
  const ids = selectedRowsActions.map((row) => row.original.id) as number[];

  return (
    <div className="relative">
      {table.getFilteredSelectedRowModel().rows.length > 0 ? (
        <Div duration=".3" className="flex min-w-sm h-8">
          {pathname === "/devices" && <ChangeStatus table={table} ids={ids} />}
          {pathname === "/users" && <ChangeRole  table={table} ids={ids} />}
          {(pathname === "/devices" || pathname === "/users") && (<MoreButton pathname={pathname} ids={ids} table={table}/>)}
          {pathname.startsWith("/devices/") && <RemoveUsers ids={ids} pathname={pathname}/>}
          {pathname === "/notifications" && <Requests table={table} ids={ids} />}
        </Div>
      ) : (
        <div className="size-[32px]" />
      )}
      <TableColumns table={table} />
    </div>
  );
}
