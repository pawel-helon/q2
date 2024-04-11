import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const GroupBy = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="pl-3 bg-card border">
          Group by <ChevronDown className="ml-4 -mr-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={4}
        className="bg-card shadow-2xl shadow-white/10"
      >
        <DropdownMenuItem>Status</DropdownMenuItem>
        <DropdownMenuItem>Addition date</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
