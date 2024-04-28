"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

export type Status = {
  dateAndTime: string;
  connection: boolean;
};
export const columns: ColumnDef<Status>[] = [
  {
    accessorKey: "dateAndTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent p-0"
        >
          Date and Time
          <CaretSortIcon className="ml-2 size-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "connection",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent p-0"
        >
          Connection
          <CaretSortIcon className="ml-2 size-4" />
        </Button>
      );
    },
    cell: (info) => {
      const value = info.getValue();
      return (
        <Badge variant={value ? "success" : "destructive"}>
          {value ? "connected" : "disconnected"}
        </Badge>
      );
    },
  },
];

export const data = [
  { dateAndTime: "14:54:58 GMT+0200", connection: true },
  { dateAndTime: "13:54:58 GMT+0200", connection: false },
  { dateAndTime: "12:54:58 GMT+0200", connection: true },
  { dateAndTime: "11:54:58 GMT+0200", connection: false },
  { dateAndTime: "10:54:58 GMT+0200", connection: true },
  { dateAndTime: "08:54:58 GMT+0200", connection: true },
  { dateAndTime: "07:54:58 GMT+0200", connection: false },
  { dateAndTime: "06:54:58 GMT+0200", connection: true },
  { dateAndTime: "05:54:58 GMT+0200", connection: false },
  { dateAndTime: "04:54:58 GMT+0200", connection: true },
  { dateAndTime: "14:54:58 GMT+0200", connection: true },
  { dateAndTime: "14:54:58 GMT+0200", connection: false },
  { dateAndTime: "14:54:58 GMT+0200", connection: true },
  { dateAndTime: "14:54:58 GMT+0200", connection: false },
  { dateAndTime: "14:54:58 GMT+0200", connection: true },
  { dateAndTime: "14:54:58 GMT+0200", connection: true },
  { dateAndTime: "14:54:58 GMT+0200", connection: true },
  { dateAndTime: "14:54:58 GMT+0200", connection: true },
  { dateAndTime: "14:54:58 GMT+0200", connection: false },
  { dateAndTime: "14:54:58 GMT+0200", connection: true },
];
