"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Table } from "@tanstack/react-table";
import { toast } from "sonner";

import { activateDevice } from "@/app/api/neon/activate-device";
import { deleteDevices } from "@/app/api/neon/delete-device";
import { TableColumns } from "../table-columns";

import { ChangeRole } from "./change-role";
import { MoreButton } from "./more-button";
import { Div } from "@/components/motion-ui/div";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";


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

  const handleDeleteDevice = () => {
    deleteDevices(ids);
    setTimeout(() => {
      toast.success("Device(s) deleted");
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
              <Button
                onClick={handleDeleteDevice}
                variant="ghost"
                size="sm"
              >
                Delete
              </Button>
            </>
          ) : (
            <div className="flex items-center">
              <ChangeRole ids={ids} />
              <Separator orientation="vertical" className="mx-1" />
              <Button
                onClick={() => {}}
                variant="ghost"
                size="sm"
              >
                Assign device
              </Button>
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
