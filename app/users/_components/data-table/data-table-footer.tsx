import { Table } from "@tanstack/react-table";

import { SelectedItems } from "./selected-items";
import { RowsPerPage } from "./rows-per-page";
import { Pagination } from "./pagination";
import { Dispatch, SetStateAction } from "react";

interface DataTableFooterProps<TData> {
  table: Table<TData>;
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

export function DataTableFooter<TData>({
  table,
  pagination,
  setPagination,
}: DataTableFooterProps<TData>) {
  return (
    <div className="flex mt-6 px-4 justify-between items-center">
      <SelectedItems table={table} />
      <div className="flex justify-end gap-2">
        <RowsPerPage pagination={pagination} setPagination={setPagination} />
        <Pagination table={table} />
      </div>
    </div>
  );
}
