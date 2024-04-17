import { Heading } from "@/components/typography";
import { Table } from "@tanstack/react-table";
import { Actions } from "./actions";
import { Input } from "@/components/ui/input";

interface DataTableHeaderProps<TData> {
  table: Table<TData>;
}

export function DataTableHeader<TData>({
  table,
}: DataTableHeaderProps<TData>) {
  return (
    <div className="flex px-4 justify-between items-center">
      <Input
        placeholder="Filter by name..."
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="max-w-sm h-9"
      />
      <Actions table={table} />
    </div>
  );
}
