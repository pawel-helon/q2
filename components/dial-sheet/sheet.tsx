"use client";

import { useState } from "react";

import {
  SheetShad,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";

export function Sheet({
  side,
  title,
  description,
  trigger,
  children,
}: {
  side?: "top" | "bottom" | "left" | "right";
  title: string;
  description?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <div className="xs:hidden">
      <SheetShad open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger asChild>{trigger}</SheetTrigger>
        <SheetContent side={side}>
          <SheetHeader className="text-left mb-6">
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
          {children}
        </SheetContent>
      </SheetShad>
    </div>
  );
}
