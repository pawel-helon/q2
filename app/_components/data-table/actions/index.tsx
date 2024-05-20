"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Table } from "@tanstack/react-table";
import { toast } from "sonner";

import { activateDevice } from "@/app/api/neon/activate-device";
import { deleteDevices } from "@/app/api/neon/delete-device";
import { TableColumns } from "../table-columns";

import { MoreButton } from "./more-button";
import { Div } from "@/components/motion-ui/div";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChangeRole } from "./change-role";
import { Delete } from "./delete";
import { ChangeRoleButton } from "@/components/change-role-button";


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
  const [disabled, setDisabled] = useState(false);

  const router = useRouter();
  const selectedRowsActions = table.getSelectedRowModel().rows;
  // @ts-ignore
  const ids = selectedRowsActions.map((row) => row.original.id);

  const handleActivateDevice = () => {
    activateDevice(ids);
    setTimeout(() => {
      setDisabled(true);
      toast.success("Device(s) activated");
      router.refresh();
    }, 500);
  };

  return (
    <div className="relative">
      {anySelectedRow ? (
        <Div duration=".3" className="flex min-w-sm">
          {title === "Devices" ? (
            <>
              <Button
                onClick={handleActivateDevice}
                variant="ghost"
                size="sm"
                disabled={disabled}
              >
                Activate
              </Button>
              <Separator orientation="vertical" className="mx-1" />
              <Delete ids={ids} />
            </>
          ) : (
            <div className="flex items-center">
              <ChangeRoleButton ids={ids}/>
              {/* <ChangeRole ids={ids} /> */}
              <Separator orientation="vertical" className="mx-1" />
              <MoreButton ids={ids}/>
            </div>
          )}
        </Div>
      ) : (
        <div className="size-[32px]" />
      )}
      <TableColumns table={table} />
    </div>
  );
}
