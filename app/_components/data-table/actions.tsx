import { useRouter } from "next/navigation";
import { useState } from "react";

import { updateBobsDevice } from "@/app/api/neon/activate-device";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table } from "@tanstack/react-table";
import { TableColumns } from "./table-columns";
import { Div } from "@/components/motion-ui/div";

interface ActionsProps<TData> {
  table: Table<TData>;
  anySelectedRow: boolean;
}

export function Actions<TData>({ table, anySelectedRow }: ActionsProps<TData>) {
  const [disabled, setDisabled] = useState(false);
  
  const router = useRouter()
  
  const handleClick = () => {
    updateBobsDevice()
    setDisabled(true)
    router.refresh()
  } 
  
  return (
    <div className="relative">
      {anySelectedRow ? (
        <Div duration=".3" className="flex min-w-sm">
          <Button
            variant="ghost"
            onClick={handleClick}
            disabled={disabled}
          >
            Activate
          </Button>
          <Separator orientation="vertical" className="mx-2" />
          <Button variant="ghost">
            Delete
          </Button>
        </Div>
      ) : (
        <div className="size-[36px]" />
      )}
      <TableColumns table={table} />
    </div>
  );
}
