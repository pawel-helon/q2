"use client";

import { useState } from "react";

import { ChangeRoleForm } from "./change-role-form";

import { DialogContent } from "@/components/dialog-content";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ChangeRoleProps {
  ids: any[];
}

export const ChangeRole = ({ ids }: ChangeRoleProps) => {
  const [open, setOpen] = useState(false);

  return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button variant="ghost" size="sm">
            Change role
          </Button>
        </DialogTrigger>
        <DialogContent title="Change role">
          <ChangeRoleForm ids={ids} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
  );
};
