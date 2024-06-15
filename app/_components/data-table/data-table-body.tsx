"use client";

import { Table, flexRender } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

import {
  TableShad,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { columns } from "@/app/(dashboard)/devices/_components/data-table/columns";

export function DataTableBody<TData>({
  table,
  pathname,
}: {
  table: Table<TData>;
  pathname: string;
}) {
  const router = useRouter();

  return (
    <div className="px-4 mt-6">
      <TableShad>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-t h-[52px]">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                onClick={() => {
                  if (pathname === "/devices") {
                    //@ts-ignore
                    router.push(`/devices/${row.original.id}`);
                  } else if (pathname === "/users") {
                    //@ts-ignore
                    router.push(`/users/${row.original.id}`);
                  } else if (pathname === "/notifications") {
                    return;
                  }
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableShad>
    </div>
  );
}
