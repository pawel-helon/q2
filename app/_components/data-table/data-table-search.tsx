import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { Search } from "lucide-react";

interface DataTableSearchProps<TData> {
  table: Table<TData>;
}

export function DataTableSearch<TData>({ table }: DataTableSearchProps<TData>) {
  return (
    <div className="flex justify-between border-b border-border pb-1 my-12">
      <div className="flex items-center">
        <Search className="text-muted-foreground" />
        <Input
          placeholder="Search by name"
          spellCheck={false}
          value={(table.getColumn("deviceName")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("deviceName")?.setFilterValue(event.target.value)
          }
          className="max-w-[264px] h-9 flex items-center border-none bg-background text-white"
        />
      </div>
    </div>
  );
}
