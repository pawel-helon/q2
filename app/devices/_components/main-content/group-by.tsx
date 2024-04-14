import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface GroupByProps {
  groupedByStatus: boolean;
  setGroupedByStatus: (groupedByStatus: boolean) => void;
}

export const GroupBy = ({ groupedByStatus, setGroupedByStatus }: GroupByProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="secondary"
          className="pl-3 bg-card border text-muted-foreground w-[10rem]"
        >
          Group by:  &nbsp;
          {groupedByStatus
            ? <p className="text-white">Status</p>
            : <p className="text-white">None</p>
          }
          <ChevronDown className="ml-2 -mr-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={4}
        className="bg-card w-[10rem]"
      >
        <DropdownMenuItem
          onSelect={() => setGroupedByStatus(false)}
        >
          None
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => setGroupedByStatus(true)}
        >
          Status
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
