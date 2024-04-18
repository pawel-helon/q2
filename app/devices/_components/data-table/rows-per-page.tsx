import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface RowsPerPageProps<TData> {
  pagination: {
    pageIndex: number;
    pageSize: number;
  };
  setPagination: Dispatch<
    SetStateAction<{
      pageIndex: number;
      pageSize: number;
    }>
  >;
}

export function RowsPerPage<TData>({
  pagination,
  setPagination,
}: RowsPerPageProps<TData>) {
  const pageSize = pagination.pageSize;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-2 text-muted-foreground text-xs focus-visible:ring-background">
          {pageSize} rows
          <ChevronDown className="ml-2 -mr-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="min-w-[5rem] bg-background shadow-black shadow-lg">
        <DropdownMenuItem
          onSelect={() =>
            setPagination({
              pageIndex: 0,
              pageSize: 5,
            })
          }
        >
          5
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() =>
            setPagination({
              pageIndex: 0,
              pageSize: 10,
            })
          }
        >
          10
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
