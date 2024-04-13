import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface GroupByProps {
  setStatus: (status: boolean) => void;
}

export const GroupBy = ({ setStatus }: GroupByProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="pl-3 bg-card border"
        >
          Group by <ChevronDown className="ml-4 -mr-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={4}
        className="bg-card"
      >
        <DropdownMenuItem
          onSelect={() => setStatus(false)}
        >
          None
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => setStatus(true)}
        >
          Status
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
