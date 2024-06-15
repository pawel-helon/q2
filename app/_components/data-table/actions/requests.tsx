import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";

export function Requests<TData>({
  table,
  ids,
}: {
  table: Table<TData>;
  ids: number[];
}) {
  return (
    <div className="flex gap-1">
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {

        }}
      >
        Accept
      </Button>
      <Button
        size="sm"
        variant="ghost"
      >
        Decline
      </Button>
    </div>
  );
}
