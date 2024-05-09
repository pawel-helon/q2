import { useRouter } from "next/navigation";
import { useState } from "react";

import { activateDevice } from "@/app/api/neon/activate-device";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table } from "@tanstack/react-table";
import { TableColumns } from "../table-columns";
import { Div } from "@/components/motion-ui/div";
import { toast } from "sonner";
import { deleteUsers } from "@/app/api/neon/delete-user";
import { deleteDevices } from "@/app/api/neon/delete-device";
import { changeRoles } from "@/app/api/neon/change-role";
import { ChangeRole } from "./change-role";

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

  const handleDeleteUser = () => {
    deleteUsers(ids);
    setTimeout(() => {
      toast.success("User(s) deleted");
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
                variant="ghost"
                onClick={handleActivateDevice}
                disabled={disabled}
              >
                Activate
              </Button>
              <Separator orientation="vertical" className="mx-2" />
              <Button variant="ghost" onClick={handleDeleteDevice}>
                Delete
              </Button>
            </>
          ) : (
            <>
              <ChangeRole ids={ids} />
              <Separator orientation="vertical" className="mx-2" />
              <Button variant="ghost" onClick={handleDeleteUser}>
                Delete
              </Button>
            </>
          )}
        </Div>
      ) : (
        <div className="size-[36px]" />
      )}
      <TableColumns table={table} />
    </div>
  );
}
