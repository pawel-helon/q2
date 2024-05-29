"use client";

import { Table } from "@tanstack/react-table";

import { ChangeRole } from "@/components/change-role";
import { ChangeStatus } from "@/components/change-status";
import { TableColumns } from "../table-columns";
import { MoreButton } from "./more-button";
import { Div } from "@/components/motion-ui/div";
import { Button } from "@/components/ui/button";
import { DisableDevice } from "./disable-device";

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
          {title === "Devices" && <ChangeStatus ids={ids} />}
          {title === "Users" && <ChangeRole ids={ids} />}
          {title === "Access" && (
            <>
              <Button size="sm" variant="ghost" className="flex items-center justify-start">
                Remove
              </Button>
            </>
          )}
          {title !== "Access" && <MoreButton title={title} ids={ids} />}
        </Div>
      ) : (
        <>
          {title === "Access" && (
            <>
              {/* <Button variant="ghost">Add user</Button> */}
            </>
          )}
          {title !== "Access" && <div className="size-[32px]" />}
        </>
      )}
      <TableColumns table={table} />
    </div>
  );
}
