import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps<TData> {
  table: Table<TData>;
}

export function Pagination<TData>({ table }: PaginationProps<TData>) {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        className="ml-4"
      >
        <ChevronLeft />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
