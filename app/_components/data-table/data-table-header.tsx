import { Heading, Paragraph } from "@/components/typography";
import { Table } from "@tanstack/react-table";
import { Actions } from "./actions";
import { usePathname } from "next/navigation";

interface DataTableHeaderProps<TData> {
  table: Table<TData>;
  numberOfResults: number;
  anySelectedRow: boolean;
}

export function DataTableHeader<TData>({
  table,
  numberOfResults,
  anySelectedRow,
}: DataTableHeaderProps<TData>) {
  const pathname = usePathname();

  let title;
  if (pathname === "/users") {
    title = "Users"
  } else if (pathname === "/devices") {
    title = "Devices"
  } else {
    title = "Access"
  }

  return (
    <div className="flex px-4 justify-between items-center">
      <div className="flex gap-2 items-center">
        <Heading variant="h3">{title}</Heading>
        <Paragraph variant="small-thick" className="text-muted-foreground">
          ({numberOfResults})
        </Paragraph>
      </div>
      <Actions table={table} anySelectedRow={anySelectedRow} title={title} />
    </div>
  );
}
