import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table } from "@tanstack/react-table";
import { Plus } from "lucide-react";

interface TableColumnsProps<TData> {
  table: Table<TData>;
}

export function TableColumns<TData>({ table }: TableColumnsProps<TData>) {
  return (
    <div className="absolute top-[64px] right-0 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <Plus />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-background shadow-black shadow-lg">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
