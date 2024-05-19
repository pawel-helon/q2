"use client";

import React, { useState } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { DataTableHeader } from "./data-table-header";
import { DataTableFooter } from "./data-table-footer";
import { DataTableBody } from "./data-table-body";
import { DataTableSearch } from "./data-table-search";
import { Div } from "@/components/motion-ui/div";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      pagination,
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const numberOfResults = data.length;

  const selectedRows = table.getState().rowSelection;
  let anySelectedRow = false;
  for (const key in selectedRows) {
    if (selectedRows[key] === true) {
      anySelectedRow = true;
      break;
    }
  }

  return (
    <>
      <Div duration=".6" className="hidden lg:block">
        <DataTableSearch table={table} />
        <div className="mt-12 py-4 border border-border shadow-black shadow-2xl rounded-lg mb-12">
          <DataTableHeader
            table={table}
            numberOfResults={numberOfResults}
            anySelectedRow={anySelectedRow}
          />

          <DataTableBody table={table} />
          <DataTableFooter
            table={table}
            pagination={pagination}
            setPagination={setPagination}
          />
        </div>
      </Div>
      <Div duration=".6" className="lg:hidden w-full">
        <DataTableSearch table={table} />
        <div className=" h-[240px] mt-12 py-4 border border-border shadow-black shadow-2xl rounded-lg flex items-center justify-center">
          <p className="text-center text-xs text-white px-8">
            Window is to small to view content.
          </p>
        </div>
      </Div>
    </>
  );
}
