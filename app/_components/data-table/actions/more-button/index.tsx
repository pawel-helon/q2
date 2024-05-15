"use client";

import { useState } from "react";
import { Ellipsis } from "lucide-react";

import { DeleteUsers } from "./delete-users";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface MoreButtonProps {
  ids: any[];
}

export const MoreButton = ({ ids }: MoreButtonProps) => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
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
        <DeleteUsers ids={ids} open={open} setOpen={setOpen} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
