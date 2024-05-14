"use client";

import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

import { Deactivate } from "./deactivate";
import { Activate } from "./activate";
import { Delete } from "./delete";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Device } from "@/types";

interface MoreButtonProps {
  device: Device | null;
}

export const MoreButton = ({ device }: MoreButtonProps) => {
  const deviceStatus = device?.status;

  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8}>
        {deviceStatus === "ACTIVE" ? (
          <Deactivate device={device} open={open} setOpen={setOpen} />
        ) : (
          <Activate device={device} open={open} setOpen={setOpen} />
        )}
        <Delete device={device} open={open} setOpen={setOpen}/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
