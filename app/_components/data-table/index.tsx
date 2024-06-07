"use client"

import React, { useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
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

  return (
    <>
      <Div duration=".6" className="hidden lg:block">
        {!pathname.startsWith("/devices/") && <DataTableSearch table={table} />}
        <div className="mt-12 py-4 border border-border shadow-black shadow-2xl rounded-lg mb-12">
          <DataTableHeader
            table={table}
            pathname={pathname}
          />

          <DataTableBody table={table} pathname={pathname}/>
          <DataTableFooter
            table={table}
            pagination={pagination}
            setPagination={setPagination}
          />
        </div>
      </Div>
      <Div duration=".6" className="w-full lg:hidden">
        {!pathname.startsWith("/devices/") && <DataTableSearch table={table} />}
        <div className=" h-[240px] mt-12 py-4 border border-border shadow-black shadow-2xl rounded-lg flex items-center justify-center">
          <p className="text-center text-xs text-white px-8">
            Window is too narrow to display content.
          </p>
        </div>
      </Div>
    </>
  );
}
