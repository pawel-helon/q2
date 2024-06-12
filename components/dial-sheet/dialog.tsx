"use client";

import { useState } from "react";

import {
  DialogShad,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function Dialog({
  title,
  description,
  trigger,
  children,
}: {
  title: string;
  description?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="hidden xs:block">
      <DialogShad open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader className="mb-6">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </DialogShad>
    </div>
  );
}
