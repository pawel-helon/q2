"use client";

import { useState } from "react";

import { ChangeRoleForm } from "./change-role-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      <DialogContent>
        <DialogHeader className="mb-6">
          <DialogTitle>Change role</DialogTitle>
        </DialogHeader>
        <ChangeRoleForm ids={ids} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
