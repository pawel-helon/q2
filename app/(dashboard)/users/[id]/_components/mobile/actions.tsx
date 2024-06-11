"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { Device } from "@prisma/client";
import { AssignDevice } from "../more-button/assign-device";
import { Delete } from "../more-button/delete";

export function Actions({
  userId,
  devices,
}: {
  userId: number;
  devices: Device[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="xs:hidden fixed bottom-4 z-10 right-4">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="size-11 shadow-2xl shadow-black rounded-full"
          >
            <Plus />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="bg-background shadow-black shadow-lg"
        >
          <AssignDevice userId={userId} devices={devices} setOpen={setOpen} />
          <Separator className="my-1" />
          <Delete userId={userId} setOpen={setOpen} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
