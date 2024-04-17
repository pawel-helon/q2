import React, { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface RowsPerPageProps {
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

export const RowsPerPage = ({
  pagination,
  setPagination,
}: RowsPerPageProps) => {
    
  const pageSize = pagination.pageSize;
    
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-2 text-muted-foreground text-xs">
            {pageSize} rows
          <ChevronDown className="ml-2"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
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
};
