"use client";

import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

import { AssignDevice } from "./assign-device";
import { Delete } from "./delete";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { Device } from "@prisma/client";

export function MoreButton({
  userId,
  devices,
}: {
  userId: number;
  devices: Device[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8}>
        <AssignDevice userId={userId} devices={devices} setOpen={setOpen} />
        <Separator className="my-1" />
        <Delete userId={userId} setOpen={setOpen} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
