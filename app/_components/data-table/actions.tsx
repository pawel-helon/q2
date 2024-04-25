import { useRouter } from "next/navigation";
import { useState } from "react";

import { activateDevice } from "@/app/api/neon/activate-device";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table } from "@tanstack/react-table";
import { TableColumns } from "./table-columns";
import { Div } from "@/components/motion-ui/div";
import { toast } from "sonner"
import { auth } from "@clerk/nextjs/server";

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

  const handleClick = () => {
    activateDevice(ids);
    setTimeout(() => {
      setDisabled(true);
      toast.success("Device(s) activated")
      router.refresh();
    }, 500)
  };

  return (
    <div className="relative">
      {anySelectedRow ? (
        <Div duration=".3" className="flex min-w-sm">
          {title === "Devices" ? (
            <>
              <Button variant="ghost" onClick={handleClick} disabled={disabled}>
                Activate
              </Button>
              <Separator orientation="vertical" className="mx-2" />
            </>
          ) : (
            <>
            <Button variant="ghost">
              Add device
            </Button>
            <Separator orientation="vertical" className="mx-2" />
          </>
          )}
          <Button variant="ghost">Delete</Button>
        </Div>
      ) : (
        <div className="size-[36px]" />
      )}
      <TableColumns table={table} />
    </div>
  );
}
