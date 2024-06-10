import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

interface DataTableSearchProps<TData> {
  table: Table<TData>;
}

export function DataTableSearch<TData>({ table }: DataTableSearchProps<TData>) {
  const pathname = usePathname()
  const searchColumn = pathname === "/users" ? "name" : "deviceName"

  return (
    <div className="flex justify-between border-b border-border pb-1 my-12">
      <div className="flex items-center">
        <Search className="text-muted-foreground" />
        <Input
          placeholder="Search by name"
          spellCheck={false}
          value={(table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(searchColumn)?.setFilterValue(event.target.value)
          }
          className="h-9 flex items-center border-none bg-background text-white"
        />
      </div>
    </div>
  );
}
