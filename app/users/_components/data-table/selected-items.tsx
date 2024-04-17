import { Table } from "@tanstack/react-table";

interface SelectedItemsProps<TData> {
  table: Table<TData>;
}

export function SelectedItems<TData>({ table }: SelectedItemsProps<TData>) {
  return (
    <div className="flex-1 text-xs text-muted-foreground">
      {table.getFilteredSelectedRowModel().rows.length} of{" "}
      {table.getFilteredRowModel().rows.length} row(s) selected.
    </div>
  );
}
