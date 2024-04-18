import { Heading, Paragraph } from "@/components/typography";
import { RowModel, RowSelectionState, Table } from "@tanstack/react-table";
import { Actions } from "./actions";
import { Input } from "@/components/ui/input";

interface DataTableHeaderProps<TData> {
  table: Table<TData>;
  numberOfUsers: number;
  anySelectedRow: boolean;
}

export function DataTableHeader<TData>({
  table,
  numberOfUsers,
  anySelectedRow
}: DataTableHeaderProps<TData>) {
  return (
    <div className="flex px-4 justify-between items-center">
      <div className="flex gap-2 items-end">
      <Heading variant="h3">Users</Heading>
      <Paragraph variant="small-thick" className="text-muted-foreground">
        ({numberOfUsers})
      </Paragraph>
      </div>
      <Actions table={table} anySelectedRow={anySelectedRow}/>
    </div>
  );
}
