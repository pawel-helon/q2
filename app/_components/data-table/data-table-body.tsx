import {
  TableShad,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Row, Table, flexRender } from "@tanstack/react-table";
import { columns } from "@/app/devices/_components/data-table/columns";
import { useRouter } from "next/navigation";

interface DataTableBodyProps<TData> {
  table: Table<TData>;
}

export function DataTableBody<TData>({ table }: DataTableBodyProps<TData>) {
  const router = useRouter();
  const handleRowClick = () => {
    router.push("/devices/device")
  }
  
  return (
    <div className='px-4 mt-6'>
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
                onClick={handleRowClick}
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
