import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table } from "@tanstack/react-table";
import { TableColumns } from "./table-columns";

interface ActionsProps<TData> {
  table: Table<TData>;
}

export function Actions<TData>({ table }: ActionsProps<TData>) {
  return (
    <div className="relative flex">
      <Button disabled variant="ghost">Activate</Button>
      <Separator orientation="vertical" className="mx-2" />
      <Button disabled variant="ghost">Delete</Button>
      <TableColumns table={table}/>
    </div>
  );
}
