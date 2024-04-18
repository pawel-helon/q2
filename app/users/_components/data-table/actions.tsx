import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Row, RowSelectionState, Table } from "@tanstack/react-table";
import { TableColumns } from "./table-columns";

interface ActionsProps<TData> {
  table: Table<TData>;
  anySelectedRow: boolean;
}

export function Actions<TData>({ table, anySelectedRow }: ActionsProps<TData>) {
  return (
    <div className="relative">
      {anySelectedRow ? (
        <div className="flex min-w-sm">
          <Button variant="ghost">Assign device</Button>
          <Separator orientation="vertical" className="mx-2" />
          <Button variant="ghost">Delete</Button>
        </div>
      ) : (
        <div className="size-[36px]"/>
      )}
      <TableColumns table={table} />
    </div>
  );
}
