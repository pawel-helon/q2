import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface GroupByProps {
  groupedByStatus: boolean;
  setGroupedByStatus: (groupedByStatus: boolean) => void;
}

export const GroupBy = ({
  groupedByStatus,
  setGroupedByStatus,
}: GroupByProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button
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
        </Button> */}

        {/* TODO: Create component for Trigger */}
        <button
          style={{ backgroundColor: "#1E1E1E"}}
          className={cn(
            "border text-muted-foreground w-[10rem]",
            "inline-flex items-center justify-between whitespace-nowrap rounded-md",
            "font-medium transition-colors focus-visible:outline-none",
            "disabled:pointer-events-none disabled:opacity-50 bg-secondary",
            "text-secondary-foreground shadow-sm hover:bg-secondary/80 h-8 px-3 text-xs"
          )}
        >
          <>
          <p className="text-muted-foreground">
          Group by:&nbsp;
          </p>
          {groupedByStatus ? (
            <p className="text-white">Status</p>
          ) : (
            <p className="text-white">None</p>
          )}
          </>
          <ChevronDown className="ml-2 -mr-2" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={4}
        className="bg-card w-[10rem]"
      >
        <DropdownMenuItem onSelect={() => setGroupedByStatus(false)}>
          None
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setGroupedByStatus(true)}>
          Status
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
