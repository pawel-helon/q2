"use client";

import { Ellipsis } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DeleteUsers } from "./delete-users";

interface MoreButtonProps {
  ids: any[];
}

export const MoreButton = ({ ids }: MoreButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" size="sm" className="ml-1 px-[3px]">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={2}
        className="bg-background shadow-black shadow-lg"
      >
        <DropdownMenuItem asChild>
          <DeleteUsers ids={ids} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
