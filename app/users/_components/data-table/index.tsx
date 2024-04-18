"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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

interface DataTableProps<TData, TValue> {
  title: string;
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

  const numberOfUsers = data.length;

  const selectedRows = table.getState().rowSelection;

  let anySelectedRow = false;
  for (const key in selectedRows) {
    if (selectedRows[key] === true) {
      anySelectedRow = true;
      break;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, type: "easeOut"}}
    >
      <DataTableSearch table={table} />
      <div className="mt-12 py-4 border border-border shadow-black shadow-2xl rounded-lg">
        <DataTableHeader
          table={table}
          numberOfUsers={numberOfUsers}
          anySelectedRow={anySelectedRow}
        />
        <DataTableBody table={table} />
        <DataTableFooter
          table={table}
          pagination={pagination}
          setPagination={setPagination}
        />
      </div>
    </motion.div>
  );
}
