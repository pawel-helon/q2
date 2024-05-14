"use client";

import { useState } from "react";
import { EllipsisVertical } from "lucide-react";

import { Device } from "@/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteDialog } from "./delete-dialog";
import { DeactivateDialog } from "./deactivate-dialog";
import { ActivateDialog } from "./activate-dialog";

interface MoreButtonProps {
  device: Device | null;
}

export const MoreButton = ({ device }: MoreButtonProps) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDeactivateDialogOpen, setIsDeactivateDialogOpen] = useState(false);
  const [isActivateDialogOpen, setIsActivateDialogOpen] = useState(false);

  const deviceStatus = device?.status;

  return (
    <>
      <DeleteDialog
        isDeleteDialogOpen={isDeleteDialogOpen}
        setIsDeleteDialogOpen={setIsDeleteDialogOpen}
        device={device}
      />
      <DeactivateDialog
        isDeactivateDialogOpen={isDeactivateDialogOpen}
        setIsDeactivateDialogOpen={setIsDeactivateDialogOpen}
        device={device}
      />
      <ActivateDialog
        isActivateDialogOpen={isActivateDialogOpen}
        setIsActivateDialogOpen={setIsActivateDialogOpen}
        device={device}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" sideOffset={8} align="end">
          {deviceStatus === "ACTIVE" ? (
            <DropdownMenuItem onSelect={() => setIsDeactivateDialogOpen(true)}>
              Deactivate
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem onSelect={() => setIsActivateDialogOpen(true)}>
              Activate
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onSelect={() => setIsDeleteDialogOpen(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
