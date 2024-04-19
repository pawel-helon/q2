import { Heading, Paragraph } from "@/components/typography";
import { Table } from "@tanstack/react-table";
import { Actions } from "./actions";

interface DataTableHeaderProps<TData> {
  table: Table<TData>;
  numberOfResults: number;
  anySelectedRow: boolean;
}

export function DataTableHeader<TData>({
  table,
  numberOfResults,
  anySelectedRow
}: DataTableHeaderProps<TData>) {
  return (
    <div className="flex px-4 justify-between items-center">
      <div className="flex gap-2 items-end">
      <Heading variant="h3">Devices</Heading>
      <Paragraph variant="small-thick" className="text-muted-foreground">
        ({numberOfResults})
      </Paragraph>
      </div>
      <Actions table={table} anySelectedRow={anySelectedRow}/>
    </div>
  );
}
