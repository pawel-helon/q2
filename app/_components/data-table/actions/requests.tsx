"use client";

import { Table } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { updateRolesTanstack } from "@/lib/data/update";

export function Requests<TData>({
  table,
  ids,
}: {
  table: Table<TData>;
  ids: number[];
}) {
  const router = useRouter();
  
  return (
    <div className="flex gap-1">
      <Button
        onClick={() => {
          updateRolesTanstack(ids, "accept").then(() => {
            setTimeout(() => {
              toast.success("Role(s) updated");
              table.resetRowSelection();
              })
            router.refresh();
          })
        }}
        size="sm"
        variant="ghost"
      >
        Accept
      </Button>
      <Button
        onClick={() => {
          updateRolesTanstack(ids, "decline").then(() => {
            setTimeout(() => {
              toast.success("Request(s) declined");
              table.resetRowSelection();
              })
            router.refresh();
          })
        }}
        size="sm"
        variant="ghost"
      >
        Decline
      </Button>
    </div>
  );
}
