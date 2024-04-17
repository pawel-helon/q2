"use client";

import React, { useState } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { DataTableHeader } from "./data-table-header";
import { DataTableFooter } from "./data-table-footer";
import { DataTableBody } from "./data-table-body";

interface DataTableProps<TData, TValue> {
  title: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination,
      columnFilters,
    }
  });

  return (
    <div className="mt-12 py-4 shadow-black shadow-2xl rounded-lg">
      <DataTableHeader table={table} />
      <DataTableBody table={table} />
      <DataTableFooter table={table} pagination={pagination} setPagination={setPagination}/>
    </div>
  );
}
