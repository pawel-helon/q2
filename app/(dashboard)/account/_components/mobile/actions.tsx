"use client";

import { useState } from "react";
import { MoreVertical } from "lucide-react";

import { Delete } from "./delete";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Actions({ userId }: { userId: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-50 xs:hidden fixed bottom-3 right-3">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="size-11 shadow-2xl shadow-black rounded-full"
          >
            <MoreVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="bg-background shadow-black shadow-lg"
        >
          <Delete userId={userId} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
