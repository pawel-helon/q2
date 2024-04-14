import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface GroupByProps {
  status: boolean;
  setStatus: (status: boolean) => void;
}

export const GroupBy = ({ status, setStatus }: GroupByProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="secondary"
          className="pl-3 bg-card border text-muted-foreground"
        >
          Group by :
          {status
            ? <p className="text-white">&nbsp;Status</p>
            : <p className="text-white">&nbsp;None</p>
          }
          <ChevronDown className="ml-2 -mr-2" />
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
