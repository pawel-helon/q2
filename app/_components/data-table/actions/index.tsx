"use client";

import { Table } from "@tanstack/react-table";

import { TableColumns } from "../table-columns";
import { MoreButton } from "./more-button";
import { Div } from "@/components/motion-ui/div";
import { ChangeRole } from "@/components/change-role";
import { ChangeStatus } from "@/components/change-status";

interface ActionsProps<TData> {
  table: Table<TData>;
  anySelectedRow: boolean;
  title: string;
}

export function Actions<TData>({
  table,
  anySelectedRow,
  title,
}: ActionsProps<TData>) {
  const selectedRowsActions = table.getSelectedRowModel().rows;
  // @ts-ignore
  const ids = selectedRowsActions.map((row) => row.original.id);

  return (
    <div className="relative flex h-8">
      {anySelectedRow ? (
        <Div duration=".3" className="flex min-w-sm">
          {title === "Devices" ? (
            <ChangeStatus ids={ids} />
          ) : (
            <ChangeRole ids={ids} />
          )}
          <MoreButton title={title} ids={ids} />
        </Div>
      ) : (
        <div className="size-[32px]" />
      )}
      <TableColumns table={table} />
    </div>
  );
}
